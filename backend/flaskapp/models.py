# bmi, calories, bulk/cut

from sqlalchemy import Column, ForeignKey, String, Float, ARRAY, Integer, BOOLEAN
from sqlalchemy.orm import declarative_base, relationship


Base = declarative_base()
class Food(Base):
    __tablename__ = "food"

    index = Column(Integer, primary_key=True)
    Name = Column(String, nullable=False)
    Description = Column(String, nullable=False)
    Calorie = Column(Integer, nullable=True)
    Dayofweek = Column(Integer, nullable=False)
    Meal = Column(String, nullable=False)

    def __repr__(self):
        return "<Canon(id='%s', family_member='%s', sequence='%s', isoforms='%s')>" % (
            self.Name,
            self.Description,
            self.Calorie,
            self.Meal
        )
    
# class User(db.Model):
#     index = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(120), nullable=False)
#     hashed_pass = db.Column(db.String(120), nullable=True)
#     current_bmi = db.Column(db.Float, nullable=True)
#     cal_per_day = db.Column(db.Integer, nullable=True)
#     bulk_cut = db.Column(db.Boolean, nullable=True)