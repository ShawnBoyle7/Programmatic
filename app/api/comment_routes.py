from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Comment
from app.forms import CommentForm, EditCommentForm
from .utils import validation_errors_to_error_messages

comment_routes = Blueprint("comments", __name__)

@comment_routes.route("/")
def load_comment():
    comments = Comment.query.all()

    return {"comments": [comment.to_dict() for comment in comments]}

@comment_routes.route("/", methods=["POST"])
@login_required
def new_comment():
    # comment = Comment.query.filter(Comment.user_id == form.data["user_id"]).first()

    form = CommentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        comment = Comment(
            content=form.data["content"],
            user_id=form.data["user_id"],
            lesson_id=form.data["lesson_id"]
        )
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    # Placeholder Errors
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@comment_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_comment(id):
    comment = Comment.query.get(id)

    form = EditCommentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        comment.content=form.data["content"]
        db.session.commit()
        return comment.to_dict()
    # Placeholder Errors
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@comment_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()

    return {"message": "Successfully Deleted"}


    