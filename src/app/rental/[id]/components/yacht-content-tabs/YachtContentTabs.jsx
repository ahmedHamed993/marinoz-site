"use client";
import { useState } from "react";
// styls
import styles from "./yachtContentTabs.module.css";
import YachtOverview from "../yacht-overview/YachtOverview";
import YachtServices from "../yacht-services/YachtServices";
import YachtReviews from "../yacht-reviews/YachtReviews";

const YachtContentTabs = ({ yacht }) => {
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
          <h1>{yacht?.yacht?.name}</h1>
          <p>
            {yacht?.yacht?.cabins} Cabin / {yacht?.yacht?.adults} Guests / {yacht?.yacht?.bedrooms}{" "}
            Bedrooms / {yacht?.yacht?.bathrooms} Bathrooms / {yacht?.yacht?.capacity}M{" "}
          </p>
        </div>
        {activeTab === "overview" && <YachtOverview yacht={yacht} />}
        {activeTab === "services" && <YachtServices yacht={yacht} />}
        {activeTab === "reviews" && <YachtReviews yacht={yacht} />}
      </div>
    </div>
  );
};

export default YachtContentTabs;
