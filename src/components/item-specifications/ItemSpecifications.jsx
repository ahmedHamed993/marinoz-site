import React from "react";

import styles from "./itemSpecifications.module.css";
const ItemSpecifications = ({ specifications }) => {
  return (
    <div className={styles.specifications}>
      <h2
        style={{
          fontSize: "18px",
          color: "#034EA2",
          fontWeight: "400",
          marginBottom: "16px",
        }}
      >
        Specification
      </h2>
      <div>
        <p>
          Manufacturer: <span>{specifications?.manufacturer}</span>
        </p>
        <p>
          year: <span>{specifications?.year}</span>
        </p>
        <p>
          On board capacity: <span>{specifications?.onboard_capacity}</span>
        </p>
        <p>
          Number Of Berths: <span>{specifications?.number_of_berths}</span>
        </p>
        <p>
          Engine Power: <span>{specifications?.engine_power}</span>
        </p>
        <p>
          model:<span> {specifications?.model}</span>
        </p>
        <p>
          length: <span>{specifications?.lenght}</span>
        </p>
        <p>
          Number of cabins: <span>{specifications?.cabins}</span>
        </p>
        <p>
          Number of Bathrooms: <span>{specifications?.bathrooms}</span>
        </p>
        <p>
          Fuel: <span>{specifications?.fuel}</span>
        </p>
      </div>
    </div>
  );
};

export default ItemSpecifications;
