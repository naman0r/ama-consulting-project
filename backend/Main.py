# main backend entrypoint

from flask import Flask, jsonify
import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

@app.route('/', methods=["GET"])
def hello_world():
    return jsonify({"message": "this is just an example flask endpoint. "}), 200


@app.route('/test', methods=["GET"])
def test_supabase(): 
    try:
        # read the elements in the test table
        response = supabase.table("test").select("*").limit(5).execute()
        
        # if we get a response, Supabase is connected
        if response.data:
            return jsonify({"message": "Supabase connected successfully!"}, response.data), 200
        else:
            return jsonify({"error": "Supabase connected, but query returned no data"}), 500

    except Exception as e:
        # if there's an error, return failure
        return jsonify({"error": str(e)}), 500
   
    # can only reqest GET from this endpoint. 

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4000)