from app.models import db, Aspiration
from faker import Faker

faker = Faker()

def seed_aspirations():

    aspirations = []

    aspirations.append(Aspiration(
            completed=True, user_id=1, lesson_id=1
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=1, lesson_id=2
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=1, lesson_id=5
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=1, lesson_id=7
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=1, lesson_id=18
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=1, lesson_id=19
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=1, lesson_id=20
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=2, lesson_id=7
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=2, lesson_id=8
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=2, lesson_id=9
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=2, lesson_id=10
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=2, lesson_id=2
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=2, lesson_id=4
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=2, lesson_id=25
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=2, lesson_id=26
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=3, lesson_id=1
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=3, lesson_id=2
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=3, lesson_id=3
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=3, lesson_id=4
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=1
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=2
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=3
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=4
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=5
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=6
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=7
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=8
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=9
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=10
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=11
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=12
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=13
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=14
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=15
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=16
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=17
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=18
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=19
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=20
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=4, lesson_id=21
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=4, lesson_id=22
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=4, lesson_id=23
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=4, lesson_id=24
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=4, lesson_id=25
        ))
    aspirations.append(Aspiration(
            completed=False, user_id=4, lesson_id=26
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=5, lesson_id=1
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=5, lesson_id=3
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=5, lesson_id=4
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=5, lesson_id=13
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=5, lesson_id=14
        ))
    aspirations.append(Aspiration(
            completed=True, user_id=5, lesson_id=15
        ))

    for asp in aspirations:
        db.session.add(asp)

    db.session.commit()


def undo_aspirations():
    db.session.execute('TRUNCATE aspirations RESTART IDENTITY CASCADE;')
    db.session.commit()
