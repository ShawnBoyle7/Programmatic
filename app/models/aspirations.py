from .db import db


class Aspiration(db.Model):
    __tablename__ = "aspirations"

    id = db.Column(db.Integer, primary_key=True)
    completed = db.Column(db.Boolean, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    lesson_id = db.Column(db.Integer, db.ForeignKey('lessons.id'), nullable=False)

    user = db.relationship("User", back_populates = "aspirations")
    lesson = db.relationship("Lesson", back_populates = "aspirations")
