from flask_wtf import FlaskForm
from wtforms import BooleanField, IntegerField
from wtforms.validators import DataRequired

class VoteForm(FlaskForm):
    user_id = IntegerField("user_id", validators=[DataRequired()])
    lesson_id = IntegerField("lesson_id", validators=[DataRequired()])
    liked = BooleanField('liked')
