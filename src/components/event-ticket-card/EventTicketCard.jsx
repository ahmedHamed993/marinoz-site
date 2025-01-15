import React from "react";
// styles
import styles from "./eventTicketCard.module.css";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";
const EventTicketCard = ({ event }) => {
  return (
    <div className={styles.card} >
      <img src={process.env.NEXT_PUBLIC_IMAGE_PRE_URL + event.image} alt={event.name} width="400px" />
      <div>
        <p className={styles.city}>
          <GrLocation />
          <span>
            {event.city?.city_en}, {event.country?.country_en}
          </span>
        </p>
        <div className={styles.title_price}>
          <h3>{event.name}</h3>
          <h4>{event.yacht?.price} $</h4>
        </div>
        <div className={styles.dashed_divider} />
        {/* <div className={styles.packages}>
          {event.packages.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div> */}
        <p className={styles.description}>{event.description}</p>
        <Link href={`/events/${event.id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default EventTicketCard;
