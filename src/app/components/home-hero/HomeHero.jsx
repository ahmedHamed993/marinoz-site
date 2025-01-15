"use client";
import React, { useRef } from "react";
// wiper
import SearchBar from "@/components/navbar/SearchBar/SearchBar";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// styles
import styles from "./homeHero.module.css";
// icons
import { FaQuoteLeft } from "react-icons/fa";
import HomeHeroSlide from "./HomeHeroSlide";

const HomeHero = () => {
  const swiperRef = useRef(null);

  const slideTo = (idx) => {
    // const index = options.findIndex((slide) => slide.id === id);
    swiperRef.current.slideTo(idx);
  };
  return (
    <div className={`${styles.slider_container}`}>
      <div className={styles.slider}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          draggable={true}
          modules={[Navigation]}
        >
          {options.map((opt, index) => (
            <SwiperSlide key={index} id={opt.id} className={styles.slide}>
              <HomeHeroSlide
                slide={opt}
                index={index}
                slideTo={(index) => slideTo(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeHero;

const options = [
  {
    id: "0",
    image: "/images/home-hero-1.jpg",
    color: "#034EA2",
  },
  {
    id: "1",
    image: "/images/home-hero-2.jpg",
    color: "#9E0059",
  },
  {
    id: "2",
    image: "/images/home-hero-3.png",
    color: "#CA852C",
  },
];
