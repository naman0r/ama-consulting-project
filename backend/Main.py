# main backend entrypoint

from flask import Flask, jsonify
from supabase import create_client, Client
import os
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")



supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

app = Flask(__name__)

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
@app.route('/users', methods=["GET"])
def get_users():
    response = supabase.table("users").select("*").execute()
    users = response.data
    return jsonify({"users": users}), 200


# /fun_facts/ GET: Retrieve all fun facts
@app.route('/fun_facts/', methods=["GET"])
def get_fun_facts():
    response = supabase.table("fun_facts").select("*").execute()
    fun_facts = response.data
    return jsonify({"fun_facts": fun_facts}), 200


@app.route('/ama/history', methods=["GET"])
def get_ama_history():
    # Query the AMA table to get all past AMA details
    response = supabase.table("AMA").select("id, user_id, selected_date, blurb, formatted_message, sent_status").execute()
    ama_history = response.data

    if not ama_history:
        return jsonify({"error": "No AMA history found"}), 404

    # Fetch user details for each AMA entry
    detailed_history = []
    for ama in ama_history:
        user_response = supabase.table("Users").select("id, name, email").eq("id", ama["user_id"]).execute()
        user_data = user_response.data
        if user_data:
            ama["user"] = user_data[0]  # Add user details to AMA entry
        detailed_history.append(ama)

    return jsonify({"ama_history": detailed_history}), 200

# /fun_facts/ POST: Submit fun facts
@app.route('/fun_facts/', methods=["POST"])
def submit_fun_fact():
    data = request.json
    user_id = data.get("user_id")
    fact_text = data.get("fact_text")

    if not user_id or not fact_text:
        return jsonify({"error": "Missing required fields"}), 400

    response = supabase.table("fun_facts").insert({
        "user_id": user_id,
        "fact_text": fact_text,
        "created_at": "now()"
    }).execute()

    if response.error:
        return jsonify({"error": response.error.message}), 500
    
    return jsonify({"message": "Fun fact added successfully"}), 201

# /ama/select POST: Randomly selects a user
@app.route('/ama/select', methods=["POST"])
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

    if ama_response.error:
        return jsonify({"error": ama_response.error.message}), 500
    
    return jsonify({"selected_user": selected_user}), 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4001)

