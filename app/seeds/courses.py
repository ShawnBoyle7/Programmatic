from app.models import db, Course

def seed_courses():

    data_structures = Course(
            name='Data Structures', description='It\'s, like, structures, with, like, data.'
        )

    db.session.add(data_structures)

    db.session.commit()


def undo_courses():
    db.session.execute('TRUNCATE courses RESTART IDENTITY CASCADE;')
    db.session.commit()
