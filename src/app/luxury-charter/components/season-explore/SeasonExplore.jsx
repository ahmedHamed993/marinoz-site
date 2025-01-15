"use client";
import React, { useState } from "react";
import styles from "./seasonExplore.module.css";
import CharterCard from "../charter-card/CharterCard";
const SeasonExplore = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <div className="container">
      <div className={styles.explore}>
        <div className={styles.tabs}>
          {seasonTabs.map((item, index) => (
            <button
              key={index}
              className={`${styles.tab} ${item.value === activeTab ? styles.active : ""}`}
              onClick={() => setActiveTab(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className={styles.title_info}>
          <h2>Seasons of explorations</h2>
          <p>
            Navigate through the seasons with our expertly curated regional
            trips! Enjoy vibrant summer escapes or cozy winter voyages as you
            explore breathtaking destinations. Use our filters to find the
            perfect boat rental for your seasonal adventure today!
          </p>
        </div>
        <div className={styles.regions}>
          <h5>Regions</h5>
          <div className={styles.region_cards_wrapper}>
            <div className={styles.region_card}>
              <img src="/images/event-hero-3.png" alt="region 1" />
              <div>
                <h6>Europe</h6>
                <p>196 place</p>
              </div>
            </div>
            <div className={styles.region_card}>
              <img src="/images/event-hero-3.png" alt="region 1" />
              <div>
                <h6>Europe</h6>
                <p>196 place</p>
              </div>
            </div>
            <div className={styles.region_card}>
              <img src="/images/event-hero-3.png" alt="region 1" />
              <div>
                <h6>Europe</h6>
                <p>196 place</p>
              </div>
            </div>
            <div className={styles.region_card}>
              <img src="/images/event-hero-3.png" alt="region 1" />
              <div>
                <h6>Europe</h6>
                <p>196 place</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.charters_wrapper}>
          {charters.map((item, index) => (
            <CharterCard key={index} charter={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonExplore;
const charters = [
  {
    id: "1",
    image:
      "https://plus.unsplash.com/premium_photo-1733317328038-4aa0269ac803?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIweWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Luxury yacht",
    city: "hurgada",
    country: "Egypt",
    price: 2040,
  },
  {
    id: "2",
    image:
      "https://plus.unsplash.com/premium_photo-1733317328038-4aa0269ac803?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIweWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Luxury yacht",
    city: "hurgada",
    country: "Egypt",
    price: 2040,
  },
];
const seasonTabs = [
  {
    label: "all",
    value: "all",
  },
  {
    label: "Summer",
    value: "summer",
  },
  {
    label: "Winter",
    value: "winter",
  },
];
