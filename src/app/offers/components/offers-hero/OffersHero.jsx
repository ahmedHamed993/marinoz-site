"use client";
import React, { useState } from "react";
// styles
import styles from "./offersHero.module.css";
const OffersHero = () => {
  const [currentCity, setCurrentCity] = useState("all");
  return (
    <div className={styles.hero}>
      <div className={`${styles.hero_container} container`}>
        <div className={styles.hero_text}>
          <h1>
            Hot<span>Offers best destinations</span>
          </h1>
          <p>
            Explore our latest offers and exclusive deals on boats and yachts to
            make your next adventure unforgettable. Find the perfect option at a
            great price today!
          </p>
          <div className={styles.hero_destinations}>
            <button className={styles.active_btn}>all</button>
            {cities.map((city, index) => (
              <button>{city?.name}</button>
            ))}
          </div>
        </div>
        <div className={styles.hero_images}>
          <div>
            <img src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww" />
            <img src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersHero;

const cities = [
  {
    id: "1",
    name: "Gound",
  },
  {
    id: "2",
    name: "Hurgada",
  },
  {
    id: "3",
    name: "Sharm El Sheikh",
  },
  {
    id: "4",
    name: "Maadi",
  },
];
