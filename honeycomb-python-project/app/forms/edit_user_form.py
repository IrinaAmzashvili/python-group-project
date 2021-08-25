from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from flask_login import current_user
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user.email != current_user.email and user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user.username != current_user.username and user:
        raise ValidationError('Username is already in use.')


class EditForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists])
    school_id = StringField('school_id', validators=[DataRequired()])
    profile_img_url = StringField('profile_img_url')
    password = StringField('password', validators=[DataRequired()])
