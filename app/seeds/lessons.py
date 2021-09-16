from app.models import db, Lesson
from faker import Faker

faker = Faker()

def seed_lessons():

    lessons = []

    lessons.append(Lesson(
            name='Arrays', description='Stuff in a row', content="Arrays are a contiguous block of memory containing variables with the same data type(but Javascript and Python don't really care like at all really about like the data types being the same pretty much.)", img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTC33lo8qyopa7oRQbCvPMIWWqr0abbV8b8w&usqp=CAU", course_id=1
        ))
    lessons.append(Lesson(
            name='Linked Lists MK2', description='It\'s like a seal because it has a head and a tail.', content="It's a list linked by edges", img_url="https://i.kym-cdn.com/entries/icons/mobile/000/023/397/C-658VsXoAo3ovC.jpg", course_id=1
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=1
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=1 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=2 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=2 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=2 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=2 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=2 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=3 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=3
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=3 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=3 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=3 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=5 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=5 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=5 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=5 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=5 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url=faker.image_url(), course_id=5 
        ))


    for lesson in lessons:
        db.session.add(lesson)

    db.session.commit()


def undo_lessons():
    db.session.execute('TRUNCATE lessons RESTART IDENTITY CASCADE;')
    db.session.commit()
