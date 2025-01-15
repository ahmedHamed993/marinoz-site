'use client'
import React, { useState } from "react";
import styles from "./upcommingEvents.module.css";
import DestinationFilterTabs from "@/components/destinations-filter-tabs/DestinationFilterTabs";
import EventTicketCard from "@/components/event-ticket-card/EventTicketCard";
import { gql, useQuery } from "@apollo/client";

const GET_EVENT_TYPES = gql`
  query MyQuery {
    event_types {
      id
      type
    }
  }
`
const GET_EVENTS = gql`
  query MyQuery {
    events(where: {status: {_eq: "approved"}})  {
      id
      image
      city {
        id
        city_en
      }
      country {
        country_en
      }
      name
      yacht {
        price
      }
      note
      description
    }
  }
`
const GET_EVENTS_BY_CITY = gql`
  query MyQuery($id:bigint) {
    events(where:{city_id:$id , status: {_eq: "approved"}}) {
      id
      image
      city {
        city_en
      }
      country {
        country_en
      }
      name
      yacht {
        price
      }
      note
      description
    }
  }
`
const UpcommingEvents = () => {
  const [currentType, setCurrentType] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);
  const {data,loading,error}=useQuery( GET_EVENT_TYPES);

  const {data:events,loading:loadingEvents,error:errorEvents}=useQuery(currentCity ? GET_EVENTS_BY_CITY : GET_EVENTS, {
    variables:{
      id:currentCity || undefined
    }
  });
  console.log(events)
  return (
    <div className="container">
      <div className={styles.upcomming}>
        <h3 className={styles.title}>Upcomming Events</h3>
        <div className={styles.event_types_wrapper}>
          {data?.event_types?.map((event, index) => (
            <button className={styles.event_type} key={index} onClick={()=>setCurrentType(event.id)}>
              {event.type}
            </button>
          ))}
        </div>
        <DestinationFilterTabs onChangeCb={(v)=>setCurrentCity(v)} />
        <div className={styles.events_wrapper}>
          {events?.events.map((event, index) => (
            <EventTicketCard event={event} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcommingEvents;

const eventTypes = [
  {
    id: "1",
    label: "birthday",
  },
  {
    id: "2",
    label: "wedding",
  },
  {
    id: "3",
    label: "Themed Party",
  },
  {
    id: "4",
    label: "Anniversary",
  },
];

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
];
