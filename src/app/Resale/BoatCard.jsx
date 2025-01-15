"use client";
import React from "react";
import Image from "next/image";
import styles from "../tours/tours.module.css";
import "swiper/css";
import Img from "../../components/Assets/Images/image 18 (2).png";
import Link from "next/link";

export default function BoatCard({ tours, Suites, Sports }) {
  const isCreatedWithinLast7Days = (dateString) => {
    const createdAt = new Date(dateString);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return createdAt >= sevenDaysAgo;
  };

  return tours.map((x, index) => (
    <div className="col-md-3" key={index}>
      <Link href={`/Resale/${x.id}`}>
        <div className={`${styles.TourCard} ${styles.BoatCard}`}>
          <div className={styles.ribbon_wrapper_red}>
            <div
              className={
                x.yacht.condition == "new"
                  ? styles.ribbon_red
                  : styles.ribbon_blue
              }
            >
              {x.yacht.condition}
            </div>
          </div>
          <div className={styles.priceText}>{x.yacht.price}$</div>
          <a className={styles.TourCardFav}>
            <i className="far fa-heart"></i>
          </a>
          <Image
            src={Img || x.image}
            alt="Logo"
            width={100}
            height={250}
            objectFit="cover"
          />
          <div className={styles.Tour_card_body}>
            <h3>{x.yacht.name}</h3>
            <span>
              <div className={styles.DestinationDiv}></div>
              {x.yacht.city.city_en}
            </span>
            <p>
              <strong>{x.yacht.build_year}</strong>
            </p>
          </div>
        </div>
      </Link>
    </div>
  ));
}
