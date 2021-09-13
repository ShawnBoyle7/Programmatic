from app.models import db, Aspiration

def seed_aspirations():

    a1 = Aspiration(
            completed=True, user_id=1, lesson_id=1
        )

    a2 = Aspiration(
            completed=False, user_id=1, lesson_id=2
        )

    db.session.add(a1)
    db.session.add(a2)

    db.session.commit()


def undo_aspirations():
    db.session.execute('TRUNCATE aspirations RESTART IDENTITY CASCADE;')
    db.session.commit()