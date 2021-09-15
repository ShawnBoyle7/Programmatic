from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired

class AspirationForm(FlaskForm):
    user_id = IntegerField("user_id", validators=[DataRequired()])
    lesson_id = IntegerField("lesson_id", validators=[DataRequired()])
