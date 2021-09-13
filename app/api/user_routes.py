from flask import Blueprint, request, jsonify
from flask_login import login_required, login_user
from app.models import User, db
from .utils import validation_errors_to_error_messages
from ..forms import EditUserForm

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_user(id):
    user = User.query.get(id)
    form = EditUserForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user.first_name=form.data['first_name']
        user.last_name=form.data['last_name']
        user.username=form.data['username']
        user.email=form.data['email']
        user.password=form.data['password']
        user.img_url=form.data['img_url']
        db.session.commit()
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    