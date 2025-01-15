"use client";
import React, { useRef } from "react";
// wiper
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// styles
import styles from "./amazin.module.css";
// icons
import { FaQuoteLeft } from "react-icons/fa";

const AmazingExperienceCarousel = () => {
  const swiperRef = useRef(null);

  const goToSlideById = (id) => {
    const index = options.findIndex((slide) => slide.id === id);
    if (index !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };
  return (
    <div className={`${styles.slider_container} container`}>
      <div className={styles.slider}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Attach the Swiper instance to the ref
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          draggable={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {options.map((opt, index) => (
            <SwiperSlide key={index} id={opt.id} className={styles.slide}>
              <div className={styles.slide_box}>
                <div className={styles.icon}>
                  <FaQuoteLeft />
                </div>
                <div className={styles.slide_box_header}>
                  <img src={opt.user_image} height="64px" width="64px" />
                  <div>
                    <h6>{opt.username}</h6>
                    <p>{opt.profession}</p>
                  </div>
                </div>
                <p>{opt.comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.users_images}>
        {options.map((o, i) => {
          return (
            <button
              onClick={() => {
                goToSlideById(o.id);
              }}
            >
              <img src={o.user_image} width="48px" height="48px" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AmazingExperienceCarousel;
const options = [
  {
    id: "1",
    username: "Ahmed Ali",
    profession: "Marketing Manager",
    comment:
      "Mention what product or service the customers have ordered. Be specific about the offerings related to electrical industrial solutions.",
    user_image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    username: "ziad Ali",
    profession: "Marketing Manager",
    comment:
      "Mention what product or service the customers have ordered. Be specific about the offerings related to electrical industrial solutions.",
    user_image:
      "https://images.pexels.com/photos/9072375/pexels-photo-9072375.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "3",
    username: "mohamme Ali",
    profession: "Marketing Manager",
    comment:
      "Mention what product or service the customers have ordered. Be specific about the offerings related to electrical industrial solutions.",
    user_image:
      "https://images.pexels.com/photos/7915359/pexels-photo-7915359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "4",
    username: "khalid Ali",
    profession: "Marketing Manager",
    comment:
      "Mention what product or service the customers have ordered. Be specific about the offerings related to electrical industrial solutions.",
    user_image:
      "https://images.pexels.com/photos/5155322/pexels-photo-5155322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "5",
    username: "zenhom Ali",
    profession: "Marketing Manager",
    comment:
      "Mention what product or service the customers have ordered. Be specific about the offerings related to electrical industrial solutions.",
    user_image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
