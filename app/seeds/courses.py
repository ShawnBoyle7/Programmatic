from app.models import db, Course

def seed_courses():

    data_structures = Course(name='Data Structures', description='It\'s, like, structures, with, like, data.')
    algorithms = Course(name='Algorithms', description='This is how you tell your computer what to do.')
    recursion = Course(name='Recursion', description='You keep doing it over and over and over and over and over and over. Let\'s do that again.')
    javascript = Course(name='JavaScript', description='The programming language of the web.')
    python = Course(name='Python', description='How to make all the bad scripting languages better.')

    db.session.add(data_structures)
    db.session.add(algorithms)
    db.session.add(recursion)
    db.session.add(javascript)
    db.session.add(python)

    db.session.commit()


def undo_courses():
    db.session.execute('TRUNCATE courses RESTART IDENTITY CASCADE;')
    db.session.commit()
