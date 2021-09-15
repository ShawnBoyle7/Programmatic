from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    img_url = db.Column(db.String(255), nullable=True)

    comments = db.relationship("Comment", back_populates = "user", cascade="all, delete-orphan")
    votes = db.relationship("Vote", back_populates = "user", cascade="all, delete-orphan")
    aspirations = db.relationship("Aspiration", back_populates = "user", cascade="all, delete-orphan")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'imgUrl': self.img_url,
        }

    def to_session_dict(self):
        asp = [{"id": asp.id, "lessonId": asp.lesson_id, "completed": asp.completed} for asp in self.aspirations]
        return {
            'id': self.id,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'username': self.username,
            'email': self.email,
            'imgUrl': self.img_url,
            "aspirations": asp
        }
