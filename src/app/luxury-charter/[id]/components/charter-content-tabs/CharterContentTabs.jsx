"use client";
import { useState } from "react";
// styls
import styles from "./charterContentTabs.module.css";
import CharterOverview from "../charter-overview/CharterOverview";
import CharterReviews from "../charter-reviews/CharterReviews";
import CharterServices from "../charter-services/CharterServices";
const CharterContentTabs = ({ charter }) => {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <div className={styles.content}>
      <div className={styles.content__tabs}>
        <button
          onClick={() => setActiveTab("overview")}
          className={activeTab === "overview" ? styles.active : ""}
        >
          overview
        </button>
        <button
          onClick={() => setActiveTab("services")}
          className={activeTab === "services" ? styles.active : ""}
        >
          services
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={activeTab === "reviews" ? styles.active : ""}
        >
          guest reviews
        </button>
      </div>
      <div className={styles.content__line}></div>
      <div>
        <div className={styles.title}>
          <h1>Conceptum Luxurious Yacht</h1>
          <p>3 Cabin / 4 Guests / 6 Bedrooms / 9 Bathrooms / 200m</p>
        </div>
        {activeTab === "overview" && <CharterOverview charter={charter} />}
        {activeTab === "services" && <CharterServices charter={charter} />}
        {activeTab === "reviews" && <CharterReviews charter={charter} />}
      </div>
    </div>
  );
};

export default CharterContentTabs;
