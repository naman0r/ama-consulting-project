# main backend entrypoint

import os
import random
from flask import Flask, jsonify, request
from flask_cors import CORS
from supabase import create_client, Client
from dotenv import load_dotenv
import ssl

load_dotenv()


from slack_sdk.webhook import WebhookClient
 
 
ssl._create_default_https_context = ssl._create_unverified_context  # Unsafe fallback fix for prod

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

app = Flask(__name__)

CORS(app)

@app.route('/', methods=["GET"])
def hello_world():
    return jsonify({"message": "this is just an example flask endpoint. "}), 200


# testing the supabase 
@app.route('/test', methods=["GET"])
def test_supabase(): 
    response = supabase.table("my_table").select("example").execute()
    response = response.data
    return jsonify({"message": response}), 200
    # can only reqest GET from this endpoint. 

# testing the supabase 
@app.route('/tests', methods=["GET"])
def tests_supabase(): 
    response = supabase.table("my_table").select("*").execute()
    response = response.data
    return jsonify({"message": response}), 200
    # can only reqest GET from this endpoint. 

# /users/ GET: List all users
@app.route('/users/', methods=["GET"])
def get_users():
    response = supabase.table("users").select("*").execute()
    users = response.data
    return jsonify({"users": users}), 200

# @app.route('/users', methods=["POST"])
# @app.route('/users/', methods=["POST"])
# def add_user():
#     data = request.json
#     user_email = data.get("user_id")
#     fact_text = data.get("fact_text")

#     if not user_id or not fact_text:
#         return jsonify({"error": "Missing required fields"}), 400

#     response = supabase.table("fun_facts").insert({
#         "user_id": user_id,
#         "fact_text": fact_text,
#         # "created_at": "now()"
#     }).execute()

#     if not response.data:
#         return jsonify({"error": "Insert failed, no data returned"}), 500
    
#     return jsonify({"message": "Fun fact added successfully"}), 201

# /fun_facts/ GET: Retrieve all fun facts
@app.route('/fun_facts/', methods=["GET"])
def get_fun_facts():
    response = supabase.table("fun_facts").select("*").execute()
    fun_facts = response.data
    return jsonify({"fun_facts": fun_facts}), 200

# /fun_facts/ POST: Submit fun facts
@app.route('/fun_facts/', methods=["POST"])
@app.route('/fun_facts', methods=["POST"])
def submit_fun_fact():
    data = request.json
    user_id = data.get("user_id")
    fact_text = data.get("fact_text")

    if not user_id or not fact_text:
        return jsonify({"error": "Missing required fields"}), 400

    response = supabase.table("fun_facts").insert({
        "user_id": user_id,
        "fact_text": fact_text,
        # "created_at": "now()"
    }).execute()

    if not response.data:
        return jsonify({"error": "Insert failed, no data returned"}), 500
    
    return jsonify({"message": "Fun fact added successfully"}), 201

# /ama/select POST: Randomly selects a user
@app.route('/ama/select', methods=["POST"])
@app.route('/ama/select/', methods=["POST"])
def select_random_user():
    response = supabase.table("users").select("*").execute()
    users = response.data

    if not users:
        return jsonify({"error": "No users available"}), 404

    selected_user = random.choice(users)
    
    # Example of inserting into the AMA table with the selected user
    ama_response = supabase.table("ama").insert({
        "user_id": selected_user["id"],
        "selected_date": "now()",
        "blurb": f"Selected user: {selected_user['name']}",
        "formatted_message": None,
        "sent_status": False
    }).execute()

    if not ama_response.data:
        return jsonify({"error": "Couldn't find user information"}), 500
    
    return jsonify({"selected_user": selected_user}), 200

@app.route('/ama/history/', methods=["GET"])
def get_ama_details():
    response = supabase.table("ama").select("*, users(name)").execute()
    response = response.data
    return jsonify({"message": response}), 200

@app.route('/ama/new_member', methods=["POST"])
def add_new_member():
    try:
        data = request.get_json()  # Changed from .json to get_json()
        print("Received data:", data)  # Debug what's being received

        # Validate required fields
        required = ['name', 'email', 'password', 'slackId', 'funFacts', 'blurb']
        if not all(field in data for field in required):
            return jsonify({"error": "Missing required fields"}), 400

        # Insert into users table
        user_response = supabase.table("users").insert({
            "name": data["name"],
            "email": data["email"],
            "password": data["password"],  # Note: Should be hashed in production
            "slack_id": data["slackId"]  # Changed to match Supabase column name
        }).execute()

        if not user_response.data:
            return jsonify({"error": "Failed to create user"}), 500

        user_id = user_response.data[0]["id"]

        # Insert into AMA table
        fun_facts = data["funFacts"]
        if len(fun_facts) != 5:
            return jsonify({"error": "Exactly 5 fun facts are required"}), 400

        ama_response = supabase.table("ama").insert({
            "user_id": user_id,
            "fact_1": fun_facts[0],
            "fact_2": fun_facts[1],
            "fact_3": fun_facts[2],
            "fact_4": fun_facts[3],
            "fact_5": fun_facts[4],
            "blurb": data["blurb"],
            "sent_status": False
        }).execute()

        if not ama_response.data:
            return jsonify({"error": "Failed to insert into AMA table"}), 500

        return jsonify({"message": "Member created successfully", "user_id": user_id}), 201

    except Exception as e:
        print("Error:", str(e))  # Log the error
        return jsonify({"error": str(e)}), 500


# @app.route('admin/override', methods=["POST"])
# def select_ama():
#     data = request.json
#     user_id = data.get("user_id")

#     if not user_id:
#         return jsonify({"error": "Please enter a user"}), 400
    
    
    
@app.route("/ama/send_to_slack", methods=["POST"])
def send_ama_to_slack(): 
    data = request.json
    
    user_name = data.get('name')
    fun_facts = data.get('fun_facts')
    blurb = data.get('blurb')
    
    # we need all the elements of an Ama. so a blank error json statement
    # TODO rishi make this correct. 
    if not user_name or not fun_facts or not blurb:
        return jsonify({"error": "Missing AMA data"}), 400
    
    formatted_message = f"""
*🎉 AMA of the Week 🎉*

*Fun Facts:*
{fun_facts}

*About Me:*
{blurb}

_Can you guess who this is?_ 🤔
"""

    webhook = WebhookClient(os.getenv("SLACK_WEBHOOK_URL"))
    response = webhook.send(text=formatted_message)
    if response.status_code != 200:
        return jsonify({"error": "Slack send failed"}), 500

    return jsonify({"message" : "chat am i cooking"}), 200


@app.route("/ama/send_to_slack/intro", methods=["POST"])
def slack_intro():
    '''NOTE: this is the intro slack message. Look at what sneha sends: an intro message followed by the first clue. '''
    data = request.json
    
    intro = data.get("intro")
    clue1 = data.get("first_clue")
    
    if not intro or not clue1:
        return jsonify({"error" : "please ensure you send a POST to this route with a JSON object containing 'intro' and 'first clue'"})
    
    formatted_message = f"""
    
    *🎉 AMA of the Week 🎉*
    {intro}
    
    {clue1}
    
    Can YOU guess tho this is?
    """
    
    webhook = WebhookClient(os.getenv("SLACK_WEBHOOK_URL"))
    response = webhook.send(text=formatted_message)
    if response.status_code != 200:
        return jsonify({"error": "Slack send failed"}), 500

    return jsonify({"message" : "chat am i cooking"}), 200
    
    
    
    

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4001)

