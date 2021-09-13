from ..models import User
from wtforms.validators import ValidationError


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
        user_id = form.user_id.data
    # Checking if user exists
        email = field.data
        user = User.query.filter(User.email == email).first()
        if user and user_id != user.id:
            raise ValidationError('Email address is already in use.')
    return user_exists

def username_validation():
    def username_exists(form, field):
        user_id = form.user_id.data
    # Checking if user exists
        username = field.data
        user = User.query.filter(User.username == username).first()
        if user and user_id != user.id:
            raise ValidationError('Username is already in use.')
    return username_exists

# Password Validator
