import React from "react";
import styles from "./offerEvents.module.css";
import EventTicketCard from "@/components/event-ticket-card/EventTicketCard";
const OfferEvents = () => {
  return (
    <div className={styles?.offer_events}>
      <div className={`${styles?.offer_events} container`}>
        <h6>Events Deals</h6>
        <div className={`${styles?.offer_events_list} hide-scrollbar`}>
          {events?.map((event) => (
            <div style={{ minWidth: "900px" }}>
              <EventTicketCard event={event} key={event?.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferEvents;

const events = [
  {
    id: "1",
    image:
      "https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Birthday Boat Party",
    price: 507,
    city: "Hurgada",
    country: "Egypt",
    packages: ["group package", "private package", "morning or night periods"],
    description:
      "Escape the ordinary on your birthday with a boat party like no other! Sail away, soak up the sun, dance to the beats, and toast to another year of amazing memories. Reserve your spot now! Yes! Our...",
  },
  {
    id: "2",
    image:
      "https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Birthday Boat Party",
    price: 507,
    city: "Hurgada",
    country: "Egypt",
    packages: ["group package", "private package", "morning or night periods"],
    description:
      "Escape the ordinary on your birthday with a boat party like no other! Sail away, soak up the sun, dance to the beats, and toast to another year of amazing memories. Reserve your spot now! Yes! Our...",
  },
  {
    id: "3",
    image:
      "https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Birthday Boat Party",
    price: 507,
    city: "Hurgada",
    country: "Egypt",
    packages: ["group package", "private package", "morning or night periods"],
    description:
      "Escape the ordinary on your birthday with a boat party like no other! Sail away, soak up the sun, dance to the beats, and toast to another year of amazing memories. Reserve your spot now! Yes! Our...",
  },
  {
    id: "4",
    image:
      "https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Birthday Boat Party",
    price: 507,
    city: "Hurgada",
    country: "Egypt",
    packages: ["group package", "private package", "morning or night periods"],
    description:
      "Escape the ordinary on your birthday with a boat party like no other! Sail away, soak up the sun, dance to the beats, and toast to another year of amazing memories. Reserve your spot now! Yes! Our...",
  },
];
