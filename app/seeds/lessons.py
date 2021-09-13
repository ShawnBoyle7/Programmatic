from app.models import db, Lesson

def seed_lessons():

    arrays = Lesson(
            name='Arrays', description='Stuff in a row', content="Arrays are a contiguous block of memory containing variables with the same data type(but Javascript and Python don't really care like at all really about like the data types being the same pretty much.)", img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTC33lo8qyopa7oRQbCvPMIWWqr0abbV8b8w&usqp=CAU", course_id=1
        )

    linked_lists = Lesson(
            name='Linked Lists MK2', description='It\'s like a seal because it has a head and a tail.', content="It's a list linked by edges", img_url="https://i.kym-cdn.com/entries/icons/mobile/000/023/397/C-658VsXoAo3ovC.jpg", course_id=1
        )

    db.session.add(arrays)
    db.session.add(linked_lists)

    db.session.commit()


def undo_lessons():
    db.session.execute('TRUNCATE lessons RESTART IDENTITY CASCADE;')
    db.session.commit()