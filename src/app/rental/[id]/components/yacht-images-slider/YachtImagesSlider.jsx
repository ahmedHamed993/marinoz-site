"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./yachtimagesSlider.module.css";
const YachtImagesSlider = ({ images }) => {
  return (
    <div className={styles.slider}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        draggable={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={process.env.NEXT_PUBLIC_IMAGE_PRE_URL +image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default YachtImagesSlider;
