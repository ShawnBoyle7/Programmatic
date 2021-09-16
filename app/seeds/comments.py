from app.models import db, Comment
from faker import Faker

faker = Faker()

def seed_comments():

    comments = []
    
    comments.append(Comment(
            content="Whoa!!! Brady told me the same thing.", lesson_id=1, user_id=1
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    comments.append(Comment(
            content=faker.text(300), lesson_id=faker.pyint(min_value=1, max_value=26, step=1), user_id=faker.pyint(min_value=1, max_value=5, step=1)
        ))
    

    for comment in comments:
        db.session.add(comment)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
