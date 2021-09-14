from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Aspiration, User
from app.forms import AspirationForm
from .utils import validation_errors_to_error_messages

aspirations_routes = Blueprint("aspirations", __name__)

@aspirations_routes.route("/", methods=["POST"])
@login_required
def add_aspiration():
    form = AspirationForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        aspiration = Aspiration(
            lesson_id=form.data["lesson_id"],
            user_id=form.data["user_id"],
            completed=False
        )
        db.session.add(aspiration)
        db.session.commit()
        user = User.query.get(form.data["user_id"])
        return user.to_dict()
    return {"Bad Data"}

@aspirations_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_aspiration(id):
    aspiration = Aspiration.query.get(id)
    aspiration.completed= True if aspiration.completed is False else False
    db.session.commit()
    user = User.query.get(aspiration.user_id)
    return user.to_dict()


@aspirations_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_aspiration(id):
    aspiration = Aspiration.query.get(id)
    db.session.delete(aspiration)
    db.session.commit()
    return {"message": "Removed from Learning Path"}
