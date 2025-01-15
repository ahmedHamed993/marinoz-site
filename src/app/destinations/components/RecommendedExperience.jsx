"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./recommendedExperience.module.css";
import { useParams } from "next/navigation";
import Link from "next/link";
const RecommendedExperience = () => {
  const { params } = useParams();
  return (
    <div className={styles.wrapper}>
      <h2>Recommended Experience</h2>
      <div>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // draggable={true}
          modules={[Autoplay, Navigation]}
          className={styles.slider}
        >
          {yachts.map((yacht, index) => (
            <SwiperSlide key={index} style={{ width: "300px", minWidth:'300px' }}>
              <div className={styles.slide_content}>
                <img src={yacht.image} />
                <div>
                  <Link href={`/rental/${yacht?.id}`}>
                    <h6>{yacht.name}</h6>
                  </Link>
                  <p>
                    {yacht.country} . <span>{yacht.city}</span>
                  </p>
                  <span>{yacht.price}$ / Day</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendedExperience;

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
