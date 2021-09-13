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

def user_validation(user_id=0):
    def user_exists(form, field):
        print("ID FIELD", user_id)
    # Checking if user exists
        email = field.data
        user = User.query.filter(User.email == email).first()
        if user and user_id != user.id:
            raise ValidationError('Email address is already in use.')
    return user_exists

def username_validation(user_id=0):
    def username_exists(form, field):
        print("FORM PRINT ASDLF;PK,ASDPLOF,KASDEPOFKZSDPFKASDPOFK,SDAPOF", form.user_id())
    # Checking if user exists
        username = field.data
        user = User.query.filter(User.username == username).first()
        if user and user_id != user.id:
            raise ValidationError('Username is already in use.')
    return username_exists

# Password Validator