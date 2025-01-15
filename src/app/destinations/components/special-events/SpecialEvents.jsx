"use client";
import React, { useState } from "react";
import styles from "./specialEvents.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import dayjs from "dayjs"
import CustomEventFormDialog from "@/components/custom-event-form/CustomEventFormDialog";

const GET_EVENTS = gql`
query MyQuery {
  events(where: {status: {_eq: "approved"}})  {
    city {
      city_en
      id
    }
    country {
      country_en
      id
    }
    name
    image
    id
    yacht {
      price
    }
    event_availabilities {
      from
    }
  }
}
`
const SpecialEvents = () => {
  const params = useParams();
  const {data,loading,error} = useQuery(GET_EVENTS);
  const [open,setOpen] = useState(false);
  return (
    <div className={styles.special_events}>
      <h2>Special Events</h2>
      <p>
        Find the perfect yacht in our top-rated destinations, tailored for your
        ultimate maritime adventure.
      </p>
      <div>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          draggable={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.slider}
        >
          {data?.events?.map((event, index) => (
            <SwiperSlide key={index} style={{ width: "300px" }}>
              <div className={styles.slide_content}>
                <img src={process.env.NEXT_PUBLIC_IMAGE_PRE_URL + event.image} width="295px" height="320px" />
                <div>
                  <Link href={`/events/${event?.id}`}>
                    <h6>{event.name}</h6>
                  </Link>
                  <div className={styles.date_price}>
                    <p>{dayjs(event?.event_availabilities?.[0]?.from).format("DD-MM-YYYY")}</p>
                    <p>{event?.yacht?.price }$</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button  className={styles.customize_btn} onClick={()=>setOpen(true)}>
        Customize
      </button>
      <CustomEventFormDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default SpecialEvents;

const yachts = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Submarine Underwater",
    country: "Egypt",
    city: "Red Sea",
    price: "2040",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Submarine Underwater",
    country: "Egypt",
    city: "Red Sea",
    price: "2040",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Submarine Underwater",
    country: "Egypt",
    city: "Red Sea",
    price: "2040",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Submarine Underwater",
    country: "Egypt",
    city: "Red Sea",
    price: "2040",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Submarine Underwater",
    country: "Egypt",
    city: "Red Sea",
    price: "2040",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Submarine Underwater",
    country: "Egypt",
    city: "Red Sea",
    price: "2040",
  },
];
