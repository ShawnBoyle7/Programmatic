from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired, Email
from .utils import user_validation, username_validation


class EditUserForm(FlaskForm):
    user_id = IntegerField('user_id')
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])
    username = StringField('username', validators=[DataRequired(), username_validation(user_id = user_id)])
    email = StringField('email', validators=[DataRequired(), Email(), user_validation(user_id = user_id)])
    password = StringField('password', validators=[DataRequired()])
    img_url = StringField('img_url')