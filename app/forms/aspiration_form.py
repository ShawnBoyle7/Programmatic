from flask_wtf import FlaskForm
from wtforms import IntegerField, BooleanField
from wtforms.validators import DataRequired

class AspirationForm(FlaskForm):
    user_id = IntegerField("user_id", validators=[DataRequired()])
    lesson_id = IntegerField("lesson_id", validators=[DataRequired()])
    completed = BooleanField("completed")
