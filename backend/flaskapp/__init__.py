from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
# from flask_cors import CORS
# from pprint import pprint
import os
from dotenv import load_dotenv

load_dotenv()


# app = Flask(__name__, static_folder="../../build", static_url_path='/')
app = Flask(__name__, static_url_path='/')
# os.getenv('GCP_PROJECT_ID')
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config['SQLALCHEMY_ECHO'] = True
db = SQLAlchemy(app)
# /Users/ryanlee/Desktop/Repos/healthyUC/backend/flaskapp
engine = create_engine("sqlite:////Users/ryanlee/Desktop/Repos/healthyUC/backend/flaskapp/database.db")

from .routes import *
from .models import *

db.create_all()