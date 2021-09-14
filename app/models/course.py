from .db import db

class Course(db.Model):
    __tablename__ = "courses"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(1000), nullable=False)

    lessons = db.relationship("Lesson", back_populates = "course", cascade="all, delete-orphan")

    def to_dict(self):
        lessons = [lesson.id for lesson in self.lessons]

        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'lessons': lessons
        }
