import React from "react";
import styles from "./specialEvents.module.css";
import { gql, useQuery } from "@apollo/client";

const SpecialEvents = () => {

  return (
    <div className="container">
      <div className={styles.special}>
        <h3 className={styles.title}>Special Events</h3>
        <p>
          Find the perfect yacht in our top-rated destinations, tailored for
          your ultimate maritime adventure.
        </p>
        <div className={styles.events_wrapper}>
          {events.map((event, index) => (
            <div className={styles.event} key={index}>
              <img src={event.img} alt={event.title} />
              <p>{event.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialEvents;

const events = [
  {
    id: "1",
    img: "https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Weding",
  },
  {
    id: "2",
    img: "https://images.pexels.com/photos/39691/family-pier-man-woman-39691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Party",
  },
  {
    id: "3",
    img: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Wedding",
  },
  {
    id: "4",
    img: "https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "New Event",
  },
  {
    id: "5",
    img: "https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Weding",
  },
  {
    id: "6",
    img: "https://images.pexels.com/photos/39691/family-pier-man-woman-39691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Party",
  },
  {
    id: "7",
    img: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Wedding",
  },
  {
    id: "8",
    img: "https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "New Event",
  },
];
