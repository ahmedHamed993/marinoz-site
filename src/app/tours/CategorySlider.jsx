"use client";
import React from "react";
import Image from "next/image";
import styles from "./tours.module.css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../components/Assets/Images/image 18.png";
import "swiper/css";
import Link from "next/link";

export default function CategorySlider({ slides, num, Packages }) {
  return (
    <Swiper
      slidesPerView={num}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      className={styles.swiper}
    >
      {Packages?.length
        ? Packages.map((x, index) => (
            <SwiperSlide className={styles.Package_swiper_slide} key={index}>
              <Link
                href={`/tours/${x.id}`}
                className={styles.PackageSliderCard}
                style={{
                  minWidth:"250px",
                  maxWidth:"250px",
                  width:"250px",
                }}
              >
                <Image
                  src={x.image}
                  alt="Logo"
                  width={100}
                  height={150}
                  objectFit="cover"
                />
                <div className={styles.Package_card_body}>
                  <span>{x.Destination}</span>
                  <h2>{x.text}</h2>
                  <p>
                    <strong>{x.price}</strong>Per Night
                  </p>
                  <button className={styles.book}>Book Now</button>
                </div>
              </Link>
            </SwiperSlide>
          ))
        : slides?.map((x, index) => (
            <SwiperSlide className={styles.Category_swiper_slide} key={index}>
              <div className={styles.CategorySliderCard}>
                <Image
                  src={image}
                  alt="Logo"
                  width={100}
                  height={200}
                  objectFit="cover"
                />
                <p>{x?.city_en || x?.text || ""}</p>
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
  );
}
