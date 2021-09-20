from app.models import db, Lesson
from faker import Faker

faker = Faker()

def seed_lessons():

    lessons = []

    lessons.append(Lesson(
            name='Arrays', description='An array is a sequence of elements of the same type stored in a contiguous block of memory.', content="An array data structure, or simply an array, is a data structure consisting of a collection of elements, each identified by at least one array index or key. An array is stored such that the position of each element can be computed from its index tuple by a mathematical formula.", img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTC33lo8qyopa7oRQbCvPMIWWqr0abbV8b8w&usqp=CAU", course_id=1
        ))
    lessons.append(Lesson(
            name='Linked Lists', description='An ordered set of data elements, each containing a link to its successor (and sometimes its predecessor).', content="A linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence.", img_url="https://i.kym-cdn.com/entries/icons/mobile/000/023/397/C-658VsXoAo3ovC.jpg", course_id=1
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=1
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=1 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=1 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=1 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=1 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=1 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=1 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=1 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=2 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=2 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=2 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=2 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=2 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=2 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=2 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=2 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=2 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=3 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=3
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=3 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=3 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=3 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=3 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=3 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=3 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=4 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=5 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=5 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=5 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=5 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=5 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=5 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=5 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=5 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=5 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=5 
        ))
    lessons.append(Lesson(
            name=faker.catch_phrase(), description=faker.text(500), content=faker.text(6000), img_url='https://week-20-group-project.s3.amazonaws.com/tmpdata-structure-diagram.png', course_id=5 
        ))


    for lesson in lessons:
        db.session.add(lesson)

    db.session.commit()


def undo_lessons():
    db.session.execute('TRUNCATE lessons RESTART IDENTITY CASCADE;')
    db.session.commit()
