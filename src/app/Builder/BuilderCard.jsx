"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "../tours/tours.module.css";
import Link from "next/link";
const BuilderCard = () => {
  return (
    <div className={styles.builderTripCard}>
      <Link href={`/tours`} className={styles.builderTripCardLayout}>
        <h2>Trip Name</h2>
        <p>Duration\ Price</p>
      </Link>
    </div>
  );
};
export default BuilderCard;
