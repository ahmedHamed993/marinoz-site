"use client";
import React, { useState } from "react";
import styles from "../../tours.module.css";
import Image from "next/image";
import Img from "../../../../components/Assets/Images/Group 1000002629.png";

export default function Overview({ tour, Suites, Sports }) {
  console.log(tour);
  // const stars = tour['tour_reviews_aggregate' || 'suite_reviews_aggregate'].aggregate?.avg?.stars;
  const stars = tour?.tour_reviews_aggregate?.aggregate?.avg?.stars || tour?.suite_reviews_aggregate?.aggregate?.avg?.stars;
  const  count = tour?.tour_reviews?.length || tour?.suite_reviews?.length || 0;
  return (
    <div>
      <div className={styles.OverviewCard}>
        <div className="mt-3 mb-3">
          <h2>{tour?.name}</h2>
          {/* <span>2 guests / {tour.availabilities[0].program_days} days /  Hotel reservation/ 2 transportation/ 2 Pax</span> */}
        </div>
        <div className={styles.OverviewStar}>
          <div className="d-flex align-items-center mb-2">
            <i className="fa fa-star"></i>
            <span>
              {Math.ceil(stars) || "2"} (
              {count} Reviews)
            </span>
          </div>
          <p>
            <i className="fa fa-location-dot"></i>
            {tour?.city?.city_en ?? "Hurgada"}
          </p>
        </div>
        <div className={styles.OverviewDis}>
          <h3>Overview</h3>
          <p>{tour?.description}</p>
        </div>
      </div>
    </div>
  );
}
