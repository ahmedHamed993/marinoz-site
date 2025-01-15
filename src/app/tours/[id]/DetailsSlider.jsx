"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/thumbs"; // Import thumbs style
import styles from "../tours.module.css";
import { Navigation, Thumbs, Autoplay } from "swiper/modules"; // Correct import of Swiper modules

// Activate the modules
import SwiperCore from "swiper";
SwiperCore.use([Navigation, Thumbs, Autoplay]); // Using the modules

const defaultImages = [
  "/Images/20010c170e3aee024c170e88efd5455d.jpg",
  "/Images/81763c76947e053768abd137d8927096.jpg",
  "/Images/649056b226708f9eea71b68b56312f16.jpg",
  "/Images/d9b2645bbabb9f67aa49ad566f451a2c.jpg",
  "/Images/039dd97b220f044712b85d174e49627d.jpg",
];
export default function DetailsSlider({images}) {
  const [sliderImages, setSliderImages] = useState(images?.length ? images : defaultImages)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div style={{ display: "flex", position: "relative", margin: "3rem auto" }}>
      {/* Main Gallery */}
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.mainGallery}
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className={styles.mainGalleryImg}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Thumbnail Gallery */}
      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical" // Set to vertical
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        watchSlidesProgress={true}
        className={styles.thumbGallery}
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={styles.thumbGalleryImg}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
