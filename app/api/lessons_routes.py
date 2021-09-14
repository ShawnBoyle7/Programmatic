from flask import Blueprint, request, jsonify
from app.models import Lesson, db
from .utils import validation_errors_to_error_messages

lessons_routes = Blueprint('lessons', __name__)


@lessons_routes.route('/')
def lessons():
    lessons = Lesson.query.all()
    return {'lessons': [lesson.to_dict() for lesson in lessons]}
