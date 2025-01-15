"use client";
import React, { useState } from "react";
// styles
import styles from "./destinationFilterTabs.module.css";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// graph ql
import { useQuery } from "@apollo/client";
import { GET_CITIES } from "@/queries/citiesQuery";
import { GET_COUNTRIES } from "@/queries/countriesQuery";
import LoadingCard from "../LoadingCard/LoadingCard";

const DestinationFilterTabs = ({onChangeCb}) => {
  const [currentDest, setCurrentDest] = useState(null);
  const { loading, error, data } = useQuery(GET_CITIES);
  if (loading) return <LoadingCard />;
  if (error) return <p>{error.message}</p>;
  return (
    <div className={styles.destination__list}>
      <Swiper spaceBetween={16} slidesPerView={"auto"} loop={true}>
        {loading ? (
          <LoadingCard />
        ) : (
          data?.cities?.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "200px", height: "200px" }}
            >
              <button
                style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_PRE_URL}${item?.image})` }}
                onClick={() => {
                  setCurrentDest(item.id);
                  if(onChangeCb){
                    onChangeCb(item.id);
                  }
                }}
              >
                <h6>{item.city_en}</h6>
              </button>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default DestinationFilterTabs;
