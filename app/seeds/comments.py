from app.models import db, Comment

def seed_comments():
    
    c1 = Comment(
            content="Whoa!!! Brady told me the same thing.", lesson_id=1, user_id=1
        )

    db.session.add(c1)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()