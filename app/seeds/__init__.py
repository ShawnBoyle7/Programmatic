from flask.cli import AppGroup
from .users import seed_users, undo_users
from .courses import seed_courses, undo_courses
from .lessons import seed_lessons, undo_lessons
from .comments import seed_comments, undo_comments
from .aspirations import seed_aspirations, undo_aspirations
from .votes import seed_votes, undo_votes

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_courses()
    seed_lessons()
    seed_comments()
    seed_aspirations()
    seed_votes()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_courses()
    undo_lessons()
    undo_comments()
    undo_aspirations()
    undo_votes()