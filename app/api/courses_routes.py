from flask import Blueprint
from app.models import Course

courses_routes = Blueprint('courses', __name__)

@courses_routes.route('/')
def courses():
    courses = Course.query.all()
    return {'courses': [course.to_dict() for course in courses]}
