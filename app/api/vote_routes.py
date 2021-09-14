from flask import Blueprint, request
from app.models import Vote, db
from app.forms import VoteForm, EditVoteForm
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
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@votes_routes.route("/<int:id>", methods=["PUT"])
def edit_vote(id):
    vote = Vote.query.get(id)
    form = EditVoteForm()
    form['crsf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        vote.liked=form.data['liked']
        db.session.commit()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@votes_routes.route("/<int:id>", methods=["DELETE"])
def delete_vote(id):
    Vote.query.get(id).delete()
    db.session.commit()
    return {"message": "Successfully deleted"}
    