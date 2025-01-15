import React from "react";
import styles from "./itemAmenities.module.css";

const ItemAmenities = ({ amenities }) => {
  return (
    <div className={styles.amenities}>
      <h2
        style={{
          fontSize: "18px",
          color: "#034EA2",
          fontWeight: "400",
          marginBottom: "16px",
        }}
      >
        Amenities
      </h2>
      <div>
        {amenities.map((item) => (
          <div key={item.id}>
            <img src={item.img} width="32px" height="32px" alt="" />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemAmenities;
