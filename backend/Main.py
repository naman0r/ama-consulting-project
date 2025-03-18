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





if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4000)

