from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Comment
from app.forms import CommentForm

comment_routes = Blueprint("comments", __name__)

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
    # Placeholder errors
    return {"Bad Data"}