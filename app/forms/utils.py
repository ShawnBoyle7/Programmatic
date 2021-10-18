from ..models import User
from wtforms.validators import ValidationError
import re

def user_validation():
    def user_exists(form, field):
        # Conditional that checks for userid if the user is logged in, if registering a new user, use 0 as a placeholder
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

def password_validation():
    def check_password(form, field):
        regexValidator = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        password = field.data
        matches = re.fullmatch(regexValidator, password)
        if not matches and len(password):
            raise ValidationError("Password must contain at least 8 or more characters, at least one number, one uppercase letter, one lowercase letter, and one special character: @$!%*?&")
    return check_password
