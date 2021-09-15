from flask_wtf import FlaskForm
from wtforms import BooleanField

class AspirationForm(FlaskForm):
    completed = BooleanField("completed")

