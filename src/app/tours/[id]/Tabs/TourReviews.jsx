"use client";
import React, { useState } from "react";
import styles from "../../tours.module.css";
import Image from "next/image";
import Img from "../../../../components/Assets/Images/Group 1000002629.png";

export default function TourReviews({ tour }) {
  console.log(tour);

  return (
    <div>
      <div className={styles.OverviewCard}>
        <div className="mt-3 mb-3">
          <h2>{tour?.name}</h2>
          {/* <span>2 guests / {tour.availabilities[0].program_days} days /  Hotel reservation/ 2 transportation/ 2 Pax</span> */}
        </div>
      </div>
    </div>
  );
}
