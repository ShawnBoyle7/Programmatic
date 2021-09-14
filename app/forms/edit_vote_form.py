from flask_wtf import FlaskForm
from wtforms import BooleanField
from wtforms.validators import DataRequired

class EditVoteForm(FlaskForm):
    liked = BooleanField('liked', validators=[DataRequired()])
