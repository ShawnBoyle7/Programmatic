from app.models import db, Vote

def seed_votes():
    
    v1 = Vote(
            liked=True, user_id=1, lesson_id=1
        )

    v2 = Vote(
            liked=False, user_id=1, lesson_id=2
        )

    db.session.add(v1)
    db.session.add(v2)

    db.session.commit()


def undo_votes():
    db.session.execute('TRUNCATE votes RESTART IDENTITY CASCADE;')
    db.session.commit()