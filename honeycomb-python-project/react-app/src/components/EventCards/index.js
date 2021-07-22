import styles from '../EventCards/EventCards.module.css'


const EventsCard = ({ event }) => {

    const newTime = new Date(event.date_and_time)

    return (
        <div className={styles.outerContainer}>
            <div className={styles.content}>
                <div className={styles.eventDate}>{newTime.toLocaleDateString()}{newTime.toLocaleTimeString()}</div>
                {/* <div className={styles.eventDate}>{event.date_and_time}</div> */}
                <div className={styles.eventLocation}>Location: {event.location}</div>
                <div className={styles.eventName}>{event.name}</div>
                <div className={styles.eventDescription}>{event.description}</div>
            </div>
            <div className={styles.buttonGroup}>
                <button className={styles.editButton}>Edit Event</button>
                <button className={styles.attendButton}>Attend</button>
            </div>
        </div>
    )



}

export default EventsCard
