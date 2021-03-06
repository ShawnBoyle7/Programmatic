from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():
    
    demo = User(
        username='Demouser', email='demo@aa.io', password='password', first_name="Demo", last_name="Lastname", img_url= "https://i.imgur.com/3Q5cM90.jpeg")

    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', first_name="Marnie", last_name="Martinez", img_url= "https://i.imgur.com/xLWjzLB.jpeg")

    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', first_name="Bobbie", last_name="Mendaros", img_url= "https://i.imgur.com/6NtMdtk.jpeg")
    
    kristian = User(
        username='k_mart', email='kris@mart.com', password='password', first_name="Kristian", last_name="Martinez", img_url= "https://i.imgur.com/mFcUDuz.png")
    
    shawn = User(
        username='DrivenShinobi', email='shawn@groyle.com', password='password', first_name="Shawn", last_name="Gargoyle", img_url= "https://i.imgur.com/PKksv8l.png")

    ivy = User(
        username='WellHelloIvy', email='notpoisonivy@yahoo.com', password='password', first_name="Ivy", last_name="Huynh", img_url= "https://i.imgur.com/DfFnACj.png")

    moiz = User(
        username='wizkika', email='therealwizkika@gmail.com', password='password', first_name="Moiz", last_name="Ahmad", img_url= "https://i.imgur.com/gDj0r9E.png")

    zane = User(
        username='TheChamp', email='thechamp@ymail.com', password='password', first_name="Zane", last_name="Hamadi", img_url= "https://i.imgur.com/RK3Bbrt.png")

    kiara = User(
        username='keipara', email='keiparos@io.com', password='password', first_name="Kiara", last_name="Mendaros", img_url= "https://i.imgur.com/JXfvpao.png")
    

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(kristian)
    db.session.add(shawn)
    db.session.add(ivy)
    db.session.add(moiz)
    db.session.add(zane)
    db.session.add(kiara)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
