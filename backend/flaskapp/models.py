# bmi, calories, bulk/cut
from flaskapp import db

class Food(db.Model):
    index = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(120), nullable=False)
    calorie = db.Column(db.Float, nullable=True)
    week = db.Column(db.Integer, nullable=False)
    meal = db.Column(db.Integer, nullable=False)
    
class User(db.Model):
    index = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), nullable=False)
    hashed_pass = db.Column(db.String(120), nullable=True)
    current_bmi = db.Column(db.Float, nullable=True)
    cal_per_day = db.Column(db.Integer, nullable=True)
    bulk_cut = db.Column(db.Boolean, nullable=True)