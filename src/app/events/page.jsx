'use client';
import React from "react";
import EventsHero from "./components/events-hero/EventsHero";
// import SpecialEvents from "./components/special-events/SpecialEvents";
import SpecialEvents from "../destinations/components/special-events/SpecialEvents";
import UpcommingEvents from "./components/upcomming-events/UpcommingEvents";
import CustomEvent from "./components/custom-event/CustomEvent";
import AmazingExperienceCarousel from "./components/amazing-experience-carousel/AmazingExperienceCarousel";
import ContactForm from "@/components/Form/ContactForm";
import CardComponent from "../Resale/Card";
import { gql, useQuery } from "@apollo/client";
const GET_EVENTS = gql`
query MyQuery {
  events(where: {status: {_eq: "approved"}})  {
    description
    country {
      country_en
    }
    city {
      city_en
    }
    image
    id
    images
    location
    name
    note
    offer_id
  }
}

`
const Events = () => {
  const {data,loading,error} = useQuery(GET_EVENTS);
  return (
    <div>
      {/* <EventsHero /> */}
      <CardComponent cards={data?.events.map(item => ({title:item?.name,subtitle:item?.city?.city_en,bgImage:process.env.NEXT_PUBLIC_IMAGE_PRE_URL+item?.image}))} />
      <div className="container">

      <SpecialEvents />
      </div>
      <UpcommingEvents />
      <CustomEvent />
      <AmazingExperienceCarousel />
      <div className="container">
        <ContactForm />
      </div>
    </div>
  );
};

export default Events;
