from flask import Blueprint, request
from app.models import db, Vote, Lesson
from app.forms import VoteForm
from .utils import validation_errors_to_error_messages

votes_routes = Blueprint('votes', __name__)

@votes_routes.route('/', methods=["POST"])
def add_vote():
    form = VoteForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        vote = Vote(
            user_id=form.data['user_id'],
            lesson_id=form.data['lesson_id'],
            liked=form.data['liked'],
        )
        db.session.add(vote)
        db.session.commit()
        lesson = Lesson.query.get(vote.lesson_id)
        return lesson.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@votes_routes.route("/<int:id>", methods=["PUT"])
def edit_vote(id):
    vote = Vote.query.get(id)
    vote.liked= False if vote.liked else True
    db.session.commit()
    lesson = Lesson.query.get(vote.lesson_id)
    return lesson.to_dict()

@votes_routes.route("/<int:id>", methods=["DELETE"])
def delete_vote(id):
    vote = Vote.query.get(id)
    lesson_id = vote.lesson_id
    db.session.delete(vote)
    db.session.commit()
    lesson = Lesson.query.get(lesson_id)
    return lesson.to_dict()
    