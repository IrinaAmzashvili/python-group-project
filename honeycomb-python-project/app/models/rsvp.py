from .db import db

rsvps = db.Table(
    'rsvps',
    # Base.metadata,
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('event_id', db.Integer, db.ForeignKey('events.id'), primary_key=True)
)

# class Rsvp(db.Model):
#     __tablename__ = "rsvps"

#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#     event_id = db.Column(db.Integer, db.ForeignKey(
#         'events.id'), nullable=False)

#     users = db.relationship('User', back_populates="rsvps")
#     events = db.relationship('Event', back_populates="rsvps")

#     def to_dict(self):
#         return{
#             'id': self.id,
#             'user_id': self.user_id,
#             'event_id': self.event_id
#         }


# Ask about joins table
