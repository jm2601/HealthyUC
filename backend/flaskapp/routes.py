# to run this, for mac:
# export FLASK_APP=hello.py
from sqlalchemy.orm import Session

# for windows:
# setx FLASK_APP "hello.py"

# and then for both:
# flask run
from flaskapp import app, engine
from flask import Flask, request
from sqlalchemy import select
from .models import User

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/register", methods=['POST'])
def register():
    if request.method == 'POST':
        login_request  = request.json
        with Session(engine) as session:
            select(User).where(User.name == "spongebob")
            if login_request['username']