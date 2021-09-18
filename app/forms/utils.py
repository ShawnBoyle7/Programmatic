from ..models import User
from wtforms.validators import ValidationError
import re


# def user_exists(form, field):
# # Checking if user exists
#     email = field.data
#     user = User.query.filter(User.email == email).first()
#     if user:
#         raise ValidationError('Email address is already in use.')

# def username_exists(form, field):
# # Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')

def user_validation():
    def user_exists(form, field):
        #conditional that checks for userid if the user is logged in, if registering a new user, use 0 as a placeholder
        user_id = 0
        if hasattr(form, 'user_id'):
            user_id = form.user_id.data
    # Checking if user exists
        email = field.data
        user = User.query.filter(User.email == email).first()
        if user and user_id != user.id:
            raise ValidationError('Email address is already in use.')
    return user_exists

def username_validation():
    def username_exists(form, field):
        user_id = 0
        if hasattr(form, 'user_id'):
            user_id = form.user_id.data
    # Checking if user exists
        username = field.data
        user = User.query.filter(User.username == username).first()
        if user and user_id != user.id:
            raise ValidationError('Username is already in use.')
    return username_exists

def password_validation(form, field):
    def validate_password():
        user_id = 0
        if hasattr(form, 'user_id'):
            email = field.data
            user = User.query.filter(User.email == email).first()

        password = field.data
        regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        matches = re.match(regex, password)
        if not matches:
            return "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"


# Password Validator
