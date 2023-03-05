from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


# to run this, for mac:
# export FLASK_APP=hello.py

# for windows:
# setx FLASK_APP "hello.py"

# and then for both:
# flask run