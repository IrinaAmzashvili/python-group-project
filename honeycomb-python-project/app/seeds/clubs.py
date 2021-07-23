from app.models import category, db, Club


def seed_club():
    club1 = Club(name='Feisty! :3', description='A bunch of feisty old dinosaurs', img_url='https://www.yc.edu/v6/campus-activities/img/club-header.jpg', category_id=1, host_id=1, school_id=1)
    club2 = Club(name='Feisty! :3', description='A bunch of feisty old dinosaurs', img_url='https://www.yc.edu/v6/campus-activities/img/club-header.jpg', category_id=1, host_id=2, school_id=1)
    club3 = Club(name='Feisty! :3', description='A bunch of feisty old dinosaurs', img_url='https://www.yc.edu/v6/campus-activities/img/club-header.jpg', category_id=1, host_id=3, school_id=1)
    club4 = Club(name='Feisty! :3', description='A bunch of feisty old dinosaurs', img_url='https://www.yc.edu/v6/campus-activities/img/club-header.jpg', category_id=1, host_id=1, school_id=1)
    club5 = Club(name='Chess Club', description='We love playing chess! Come join us!', img_url='https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg', category_id=1, host_id=1, school_id=1)
    club6 = Club(name='Feisty! :3', description='A bunch of feisty old dinosaurs', img_url='https://secure-content.meetupstatic.com/images/https%3A%2F%2Fsecure.meetupstatic.com%2Fphotos%2Fevent%2Fd%2F9%2F4%2Fd%2F600_485635629.jpeg', category_id=1, host_id=1, school_id=1)
    club7 = Club(name='Feisty! :3', description='A bunch of feisty old dinosaurs', img_url='https://secure-content.meetupstatic.com/images/https%3A%2F%2Fsecure.meetupstatic.com%2Fphotos%2Fevent%2Fd%2F9%2F4%2Fd%2F600_485635629.jpeg', category_id=1, host_id=1, school_id=1)
    db.session.add(club1)
    db.session.add(club2)
    db.session.add(club3)
    db.session.add(club4)
    db.session.add(club5)
    db.session.add(club6)
    db.session.add(club7)
    db.session.commit()


def undo_club():
    db.session.execute('TRUNCATE clubs RESTART IDENTITY CASCADE;')
    db.session.commit()
