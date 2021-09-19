from app.models import db, Vote
from faker import Faker

faker = Faker()

def seed_votes():

    votes = []
    
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=1
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=2
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=3
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=5
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=7
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=12
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=13
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=14
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=15
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=16
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=21
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=22
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=24
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=26
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=27
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=28
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=29
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=1, lesson_id=30
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=2
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=3
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=6
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=7
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=8
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=9
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=10
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=12
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=13
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=14
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=15
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=16
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=18
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=20
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=21
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=22
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=23
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=25
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=26
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=27
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=31
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=32
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=33
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=34
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=35
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=37
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=39
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=41
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=42
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=43
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=46
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=47
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=48
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=2, lesson_id=50
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=1
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=2
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=3
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=4
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=5
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=6
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=7
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=8
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=9
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=10
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=11
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=12
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=15
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=16
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=31
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=37
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=42
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=50
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=3, lesson_id=51
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=1
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=2
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=3
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=4
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=5
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=6
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=7
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=8
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=9
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=10
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=11
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=12
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=13
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=14
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=15
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=16
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=17
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=18
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=19
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=20
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=21
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=22
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=23
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=24
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=25
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=26
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=27
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=28
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=29
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=30
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=31
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=32
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=33
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=34
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=35
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=36
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=37
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=38
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=39
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=40
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=41
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=42
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=43
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=44
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=45
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=46
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=47
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=48
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=49
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=50
        ))
    votes.append(Vote(
            liked=True, user_id=4, lesson_id=51
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=2
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=12
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=15
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=16
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=18
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=19
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=20
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=22
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=25
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=4
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=5
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=6
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=10
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=28
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=29
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=32
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=33
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=34
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=35
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=36
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=40
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=41
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=42
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=43
        ))
    votes.append(Vote(
            liked=faker.pybool(), user_id=5, lesson_id=47
        ))

    for vote in votes:
        db.session.add(vote)

    db.session.commit()


def undo_votes():
    db.session.execute('TRUNCATE votes RESTART IDENTITY CASCADE;')
    db.session.commit()
