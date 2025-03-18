# Backend readme

**setup:**

- python3 -m venv venv
- source venv/bin/activate
- pip3 install flask flas-cors supabase
- python3 main.py
  - this runs the flask server
    - open up http://localhost:4000/
    - this is the address and port the flask is running on locally.

## how it works, and what we are doing

- in main.py, i set up a very simple route "/" route.
- i am also setting up a "/test" route, which you have to implemet @madhav
- the /test route should return a 200 success message IF supabase connects properly
- this is how to set it up: https://bootstrapped.app/guide/how-to-use-supabase-with-flask
- get on this ASAP. load environment variables from .env (copy the .env template into a new file in the backend folder called .env ; this is so we dont leak api keys and sensitive data to github)
- you need to get the keys from supabase.com

edit on readme- krisha
