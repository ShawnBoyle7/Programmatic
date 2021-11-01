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
    def validate_password(form, field):
        password = field.data

        regex_eight_min = "^.{8,}$"
        regex_lower_case = "^.*[a-z]+.*$"
        regex_upper_case = "^.*[A-Z]+.*$"
        regex_digit = "^.*\d+.*$"
        regex_special = "^.*[@$!%*?&]+.*$"

        eight_matches = re.fullmatch(regex_eight_min, password)
        lower_case_matches = re.fullmatch(regex_lower_case, password)
        upper_case_matches = re.fullmatch(regex_upper_case, password)
        digit_matches = re.fullmatch(regex_digit, password)
        special_matches = re.fullmatch(regex_special, password)

        errors = []

        if not eight_matches and len(password):
            errors.append("Must be at least 8 characters")
        if not lower_case_matches and len(password):
            errors.append("Must contain at least one lower case character")
        if not upper_case_matches and len(password):
            errors.append("Must contain at least one upper case character")
        if not digit_matches and len(password):
            errors.append("Must contain at least one digit")
        if not special_matches and len(password):
            errors.append("Must contain at least one special character (@, $, !, %, *, ?, &)")

        if len(errors):
            raise ValidationError(errors)
    return validate_password
