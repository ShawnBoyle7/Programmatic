from flask import Blueprint
from flask_login import login_required
from app.models import db, Aspiration
from app.forms import AspirationForm

aspirations_routes = Blueprint("aspirations", __name__)

@aspirations_routes.route("/", methods=["POST"])
@login_required
def add_aspiration():
    form = AspirationForm()
    if form.validate_on_submit():
        aspiration = Aspiration(
            lesson_id=form.data["lesson_id"],
            user_id=form.data["user_id"],
            completed=False
        )
        db.session.add(aspiration)
        db.session.commit()
        return aspiration.to_dict()
    return {"Bad Data"}
