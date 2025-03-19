# main backend entrypoint

from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/', methods=["GET"])
def hello_world():
    return jsonify({"message": "this is just an example flask endpoint. "}), 200


@app.route('/test', methods=["GET"])
def test_supabase(): 
    return jsonify({"message": "to implement by madhav"})
    # can only reqest GET from this endpoint. 

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4000)