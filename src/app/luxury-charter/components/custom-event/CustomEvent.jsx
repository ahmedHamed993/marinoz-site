import React from "react";
import styles from "./customEvent.module.css";
const CustomEvent = () => {
  return (
    <div className="container">
      <div className={styles.custom_event}>
        <h1>Customize Your Tour With Marinoz</h1>
        <p>
          Plan your adventure effortlessly with our intuitive trip planner,
          designed to help you organize every detail and ensure a smooth journey
          from start to finish.
        </p>
        <button>Customize Tour</button>
      </div>
    </div>
  );
};

export default CustomEvent;
