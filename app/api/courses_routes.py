from flask import Blueprint, request, jsonify
from app.models import Course, db
from .utils import validation_errors_to_error_messages

courses_routes = Blueprint('courses', __name__)

@courses_routes.route('/')
def courses():
    courses = Course.query.all()
    return {'courses': [course.to_dict() for course in courses]}
