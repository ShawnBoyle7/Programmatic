from .db import db

class Lesson(db.Model):
    __tablename__ = "lessons"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    content = db.Column(db.String(10000), nullable=False)
    img_url = db.Column(db.String(255), nullable=True)
    course_id = db.Column(db.Integer, db.ForeignKey("courses.id"), nullable=False)

    course = db.relationship("Course", back_populates = "lessons")
    comments = db.relationship("Comment", back_populates = "lesson", cascade="all, delete-orphan")
    votes = db.relationship("Vote", back_populates = "lesson", cascade="all, delete-orphan")
    aspirations = db.relationship("Aspiration", back_populates = "lesson", cascade="all, delete-orphan")

    def to_dict(self):
        comment_id_list = [comment.id for comment in self.comments]
        votes = [{'id': vote.id, 'liked': vote.liked, 'userId':vote.user_id} for vote in self.votes]

        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'content': self.content,
            'imgUrl': self.img_url,
            'courseId': self.course_id,
            'comments': comment_id_list,
            'votes': votes
        }
