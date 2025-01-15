"use client";
import React, { useState } from "react";
import Link from "next/link";
// swipert
import { Swiper, SwiperSlide } from "swiper/react";
// componetns
import FeaturedBoatCard from "./FeaturedBoatCard";
// styles
import styles from "./featured.module.css";
import "swiper/css";
// icons
import { HiArrowNarrowRight } from "react-icons/hi";
// gql
import { useQuery, gql } from "@apollo/client";
import { GET_CITIES } from "@/queries/citiesQuery";
import LoadingCard from "@/components/LoadingCard/LoadingCard";
import CustomEventFormDialog from "@/components/custom-event-form/CustomEventFormDialog";
const GET_RENTALS_BY_CITY = gql`
query MyQuery($id:bigint) {
  rentals(where: {city_id: {_eq: $id}}) {
    id
    city_id
    image
    name
    location
    status
    yacht {
      price
    }
  }
}
`
const GET_RENTALS = gql`
query MyQuery {
  rentals {
    id
    city_id
    image
    name
    location
    status
    yacht {
      price
    }
  }
}
`
const FeaturedBoats = () => {
  const [currentCity, setCurrentCity] = useState(null);
  const [countryId, setCountryId] = useState(null);
  const { loading, error, data } = useQuery(GET_CITIES);
  const [open, setOpen] = useState(false);

  const {loading:loadingRentals, data:rentalsData, error:loadingError} = useQuery(currentCity ? GET_RENTALS_BY_CITY : GET_RENTALS, {
    variables:{
      id:currentCity? currentCity : null,
    }
  });
  console.log(rentalsData);
  return (
    <div className={styles.featured}>
      <div className={styles.featured__tabs_container}>
        {loading ? (
          <LoadingCard />
        ) : (
          data?.cities?.map((item, index) => (
            <button
              key={index}
              className={`${styles.featured__tab} ${item?.id === currentCity ? styles.active : ""}`}
              onClick={() => {
                setCurrentCity(item.id);
                // setCountryId(item?.country_id);
              }}
            >
              {item.city_en}
            </button>
          ))
        )}
      </div>

      {/* <div className="container"> */}
      <div className={styles.featured__boats_slider}>
        <Swiper
          spaceBetween={16}
          slidesPerView={3.5}
          loop={true}
          className={styles?.featured__swiper}
        >
          {rentalsData?.rentals?.map((item, index) => (
            <SwiperSlide key={index}>
              <FeaturedBoatCard boat={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* </div> */}

      <div className="container">
        <div className={styles.featured__actions}>
          <div className={styles.featured__actions_text}>
            <h4>Featured</h4>
            <h5>Boats & Yachts</h5>
          </div>
          <div className={styles.featured__actions_cta}>
            <p>
              <span>"Showcasing Excellence: </span>
              Explore Our Featured Boats with Top Offers and Stunning Designs."
            </p>
            <div>
              <button onClick={()=>setOpen(true)}>Customize</button>
              <Link href="/rental">
                Discover <HiArrowNarrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CustomEventFormDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default FeaturedBoats;

const distinations = ["all", "Egypt", "Dubai", "Norway"];
const boats = [
  {
    id: "1",
    price: "1300$/day",
    name: "Conceptum Luxurious Yach",
    img: "/Images/7dd6f7e5c89ae574848a6b96ad0ba42d.jpeg",
  },
  {
    id: "2",
    price: "1700$/day",
    name: "Conceptum Luxurious Yach",
    img: "https://images.pexels.com/photos/1819631/pexels-photo-1819631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "3",
    price: "1400$/day",
    name: "Conceptum Luxurious Yach",
    img: "https://images.pexels.com/photos/28573434/pexels-photo-28573434/free-photo-of-scenic-boat-cruise-on-tranquil-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "4",
    price: "100$/day",
    name: "Conceptum Luxurious Yach",
    img: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "5",
    price: "1700$/day",
    name: "Conceptum Luxurious Yach",
    img: "https://images.pexels.com/photos/1819631/pexels-photo-1819631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "6",
    price: "1400$/day",
    name: "Conceptum Luxurious Yach",
    img: "https://images.pexels.com/photos/28573434/pexels-photo-28573434/free-photo-of-scenic-boat-cruise-on-tranquil-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
