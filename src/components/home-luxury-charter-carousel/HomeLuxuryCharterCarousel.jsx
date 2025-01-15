import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import styles from "./homeLuxuryCharterCarousel.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

const HomeLuxuryCharterCarousel = () => {
  const swiperRef = useRef(null);
  const goTo = (idx) => {
    console.log(idx);
    if (idx !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(idx);
    }
  };
  return (
    <div className={styles.slider_container}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Attach the Swiper instance to the ref
        }}
        loop={true}
        spaceBetween={30}
        // effect={'fade'}
        // navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[EffectFade]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={slide?.id}
            className={styles.slide}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className={styles.slide_content}>
              <h2>{slide?.name}</h2>
              <p>{slide?.details}</p>
              <div className={styles?.slide_inner_pagination}>
                  <button onClick={() => goTo(index - 1)}>
                    <FaChevronLeft />
                  </button>
                  <button onClick={() => goTo(index + 1)}>
                    <FaChevronRight />
                  </button>
              </div>
              <h3>{slide?.city}</h3>
              <h4>{slide?.country}</h4>
              <h6>{slide?.notes}</h6>
              <div style={{ margin: "40px 0" }}>
                <Link className={styles?.customize_btn} href="/customize">
                  Customize Trip
                </Link>
                <Link className={styles?.discover_btn} href="/luxury-charter">
                  Discover
                </Link>
              </div>
            </div>
            <div className={styles?.images}>
              <img src={slide?.images[0]} alt={slide?.name} width="200px" />
              <img src={slide?.images[1]} alt={slide?.name} width="200px" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeLuxuryCharterCarousel;

const slides = [
  {
    id: "1",
    name: "El Gouna",
    details:
      "Explore Our Boat and Yacht Services: Rent, Buy, and List Welcome to our comprehensive boat and yacht section, Whether you’re looking to embark on a temporary adventure with a rental, find the perfect vessel to call your own, or list your boat or yacht for sale, we’ve got you covered.",
    city: "Hurgada",
    country: "Egypt",
    notes:
      "Hurghada is a seaside resort stretching for approximately 40 km along Egypt’s Red Sea coast. It is famous for scuba diving and has many diving shops and schools in its modern Sekalla district. ",
    images: [
      "https://swiperjs.com/demos/images/nature-1.jpg",
      "https://swiperjs.com/demos/images/nature-2.jpg",
    ],
  },
  {
    id: "2",
    name: "Hurgada",
    details:
      "Explore Our Boat and Yacht Services: Rent, Buy, and List Welcome to our comprehensive boat and yacht section, Whether you’re looking to embark on a temporary adventure with a rental, find the perfect vessel to call your own, or list your boat or yacht for sale, we’ve got you covered.",
    city: "Hurgada",
    country: "Egypt",
    notes:
      "Hurghada is a seaside resort stretching for approximately 40 km along Egypt’s Red Sea coast. It is famous for scuba diving and has many diving shops and schools in its modern Sekalla district. ",
    images: [
      "https://swiperjs.com/demos/images/nature-1.jpg",
      "https://swiperjs.com/demos/images/nature-2.jpg",
    ],
  },
  {
    id: "3",
    name: "Masa Alam",
    details:
      "Explore Our Boat and Yacht Services: Rent, Buy, and List Welcome to our comprehensive boat and yacht section, Whether you’re looking to embark on a temporary adventure with a rental, find the perfect vessel to call your own, or list your boat or yacht for sale, we’ve got you covered.",
    city: "Hurgada",
    country: "Egypt",
    notes:
      "Hurghada is a seaside resort stretching for approximately 40 km along Egypt’s Red Sea coast. It is famous for scuba diving and has many diving shops and schools in its modern Sekalla district. ",
    images: [
      "https://swiperjs.com/demos/images/nature-1.jpg",
      "https://swiperjs.com/demos/images/nature-2.jpg",
    ],
  },
];
