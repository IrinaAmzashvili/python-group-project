import { set } from "date-fns";
import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { attendOneEvent, leaveOneEvent, getRsvps } from "../../store/rsvp";
import styles from "../EventCards/EventCards.module.css";
import EditEventModal from "../EditEventModal";

const EventsCard = ({ event, indx }) => {
  console.log("==============> event", event);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const allRsvps = useSelector((state) => Object.values(state.rsvp));
  const rsvp = allRsvps.find((rsvp) => +rsvp?.id === +event?.id);
  const [attending, setAttending] = useState(event.rsvps.length);
  // const rsvp = allRsvps.find(rsvp => console.log('RSVP INSIDE FIND for the rsvp', event.id, rsvp.id));
  console.log("==================>", allRsvps, " | ", rsvp);
  // const [attending, setAttending] = useState(false);
  // console.log('Find the event members through this console log',event)
  // const getRsvps = () => {
  //     return event.rsvps.length;
  // }
  useEffect(() => {
    dispatch(getRsvps());
  }, [dispatch]);

  const newTime = new Date(event.date_and_time);
  const loopThroughRsvps = () => {
    // console.log('LOOP IS WORKING')
    if (sessionUser.rsvps.includes(event.id)) return true;
  };
  // console.log('==============> EVENT INSIDE LOOP', userEvent, event.id)

  // if(userEvent === event.id) {
  //     return true;
  // }

  // console.log(loopThroughRsvps())
  console.log("EVENT DOT RSVP NGSKBHJSABHJDSABHJK", event.rsvps);
  const handleRsvp = (e) => {
    e.preventDefault();

    if (rsvp) {
      dispatch(leaveOneEvent(event.id));
      setAttending((event.rsvps.length -= 1));
    } else {
      dispatch(attendOneEvent(event.id));
      setAttending((event.rsvps.length += 1));
    }
  };

  return (
    <div key={indx} className={styles.outerContainer}>
      <div className={styles.content}>
        <div className={styles.eventDate}>
          {newTime.toLocaleDateString()}{" "}
          <span className={styles.timeStampMiddle}>at</span>{" "}
          {newTime.toLocaleTimeString()}
        </div>
        {/* <div className={styles.eventDate}>{event.date_and_time}</div> */}
        <div className={styles.eventRsvps}>
          There are{" "}
          {attending
            ? ` ${attending} members attending`
            : " no members attending"}
        </div>
        <div className={styles.eventLocation}>Location: {event.location}</div>
        <div className={styles.eventName}>{event.name}</div>
        <div className={styles.eventDescription}>{event.description}</div>
      </div>
      <div className={styles.buttonGroup}>
        {/* if user is host, display "edit event" button */}
        {sessionUser.id === event?.host_id && (
          <EditEventModal eventId={event.id} className={styles.editButton} />
        )}
        <button
          className={
            rsvp
              ? `cta_button_empty ${styles.attendButton}`
              : `cta_button ${styles.attendButton}`
          }
          onClick={handleRsvp}
        >
          {rsvp ? "Can't make it" : "Attend"}
        </button>
      </div>
    </div>
  );
};

export default EventsCard;
