from flask import Blueprint
from app.models import Lesson


lessons_routes = Blueprint('lessons', __name__)


@lessons_routes.route('/')
def lessons():
    lessons = Lesson.query.all()
    return {'lessons': [lesson.to_dict() for lesson in lessons]}
