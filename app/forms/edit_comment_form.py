from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class EditCommentForm(FlaskForm):
    content = StringField("content", validators=[DataRequired()])