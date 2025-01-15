"use client";
import React, { useState } from "react";
import styles from "./userContentTabs.module.css";
import UserAccount from "../user-account/UserAccount";
import UserBookingHistory from "../user-booking-history/UserBookingHistory";
import UserOrders from "../user-orders/UserOrders";
import UserReviews from "../user-reviews/UserReviews";
const UserContentTabs = () => {
  const tabs = ["account", "booking history", "orders", "reviews"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className={styles.tabs_content}>
      <div className={styles?.tabs}>
        {tabs.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            style={{
              borderBottom: activeTab === item ? "4px solid #033975" : "",
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div style={{ margin: "64px 0" }}>
        {activeTab === "account" && <UserAccount />}
        {activeTab === "booking history" && <UserBookingHistory />}
        {activeTab === "orders" && <UserOrders />}
        {activeTab === "reviews" && <UserReviews />}
      </div>
    </div>
  );
};

export default UserContentTabs;
