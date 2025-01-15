"use client";
// swipert
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// styles
import styles from "./hero.module.css";
import "swiper/css";

const Hero = ({ Suites, text }) => {
  return (
    <div className={styles.hero}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          height: "100vh",
          position: "relative",
          zIndex: "-1",
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img src="/images/hero-1.png" className={styles.slide_img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/hero-1.png" className={styles.slide_img} />
        </SwiperSlide>
      </Swiper>
      <div className={styles.text}>
        {Suites ? <h1>{text}</h1> : <h1>Yachts & Boats Rental</h1>}
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit
        </p>
      </div>
    </div>
  );
};

export default Hero;
