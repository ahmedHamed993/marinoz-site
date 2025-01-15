"use client";
import React from "react";
import Image from "next/image";
import styles from "./tours.module.css";
import "swiper/css";

export default function Customize() {
  return (
    <div className={styles.CustomizeCard}>
      <div className={styles.CustomizeCardLayout}>
        <h2>Customize your tour with Marinoz</h2>
        <p>
          Plan your adventure effortlessly with our intuitive trip planner,
          designed to <br />
          help you organize every detail and ensure a smooth journey from start
          to finish.
        </p>
        <button>Customize Trip</button>
      </div>
    </div>
  );
}
