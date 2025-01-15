import React from "react";
import SectionTitle from "../SectionTitle";
import styles from "./yachtAmenities.module.css";
const YachtAmenities = ({ yacht }) => {
  return (
    <div className={styles.amenities}>
      <SectionTitle title="Amenities" />
      <div>
        {yacht.amenities.map((item) => (
          <div key={item.id}>
            <img src={item.img} width="32px" height="32px" alt="" />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YachtAmenities;
