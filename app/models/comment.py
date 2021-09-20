from .db import db

class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(1000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    lesson_id = db.Column(db.Integer, db.ForeignKey("lessons.id"), nullable=False)

    user = db.relationship("User", back_populates = "comments")
    lesson = db.relationship("Lesson", back_populates = "comments")

    def to_dict(self):
        return {
            "id": self.id,
            "content": self.content,
            "userId": self.user_id,
            "lessonId": self.lesson_id
        }