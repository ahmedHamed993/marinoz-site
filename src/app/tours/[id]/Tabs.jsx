"use client";
import React, { useState } from "react";
import Overview from "./Tabs/Overview";
import Transportation from "./Tabs/Transportation";
import TourReviews from "./Tabs/TourReviews";
import Details from "./TourDetails";
import TourServices from "./tour-services/TourServices";
import TourReviewsContent from "./tour-reviews-content/TourReviewsContent";

export default function TabsWithData({ tour, Suites, Sports }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Overview",
      content: (
        <>
          <Overview Suites={Suites} Sports={Sports} tour={tour} />
          <Details Suites={Suites} Sports={Sports} tour={tour} />
        </>
      ),
    },
    {
      label: "Services",
      content: (
        <>
          <Transportation Suites={Suites} Sports={Sports} tour={tour} />
          {/* <Details Suites={Suites} Sports={Sports} tour={tour} /> */}
          <TourServices tour={tour}  Suites Sports/>
        </>
      ),
    },
    // {
    //   label: "Guest Reviews",
    //   content: (
    //     <>
    //       {/* <TourReviews Suites={Suites} Sports={Sports} tour={tour} /> */}
    //       {/* <Overview Suites={Suites} Sports={Sports} tour={tour} /> */}
    //       {/* <Details Suites={Suites} Sports={Sports} tour={tour} /> */}
    //       {/* <TourReviews tour={tour} /> */}
    //       {/* <TourReviewsContent tour={tour} /> */}
    //     </>
    //   ),
    // },
  ];

  return (
    <div>
      {/* Tab Headers */}
      <div style={styles.tabHeader}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            style={{
              ...styles.tabButton,
              ...(activeTab === index ? styles.activeTabButton : {}),
            }}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={styles.tabContent}>{tabs[activeTab].content}</div>
    </div>
  );
}

const styles = {
  tabHeader: {
    display: "flex",
    borderBottom: "2px solid #ccc",
    width: "100%",
    marginBottom: "1rem",
  },
  tabButton: {
    flex: 1,
    padding: "10px 20px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: "16px",
    color: "#555",
    borderBottom: "2px solid transparent",
    marginBottom: "1rem",
    transition: "border-color 0.3s, color 0.3s",
  },
  activeTabButton: {
    color: "#000",
    borderBottom: "3px solid #226699",
  },
};
