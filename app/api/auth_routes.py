from flask import Blueprint, jsonify, session, request
from sqlalchemy.orm import joinedload
from app.models import User, db, Aspiration
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from .utils import validation_errors_to_error_messages

auth_routes = Blueprint('auth', __name__)

@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_session_dict()
    return {'errors': ['Unauthorized']}

@auth_routes.route('/demo/<int:id>')
def demo_user(id):
    user = User.query.get(id)
    login_user(user)
    return user.to_session_dict()

@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_session_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}

@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            first_name=form.data['first_name'],
            last_name=form.data['last_name'],
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password'],
            img_url="https://week-20-group-project.s3.amazonaws.com/tmp451-4517876_default-profile-hd-png-download.png"
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_session_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    logout_user()
    db.session.delete(user)
    db.session.commit()

    return {"message": "Successfully Deleted"}


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
