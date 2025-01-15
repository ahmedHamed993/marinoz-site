import React from "react";
import styles from "./rating.module.css";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
const Rating = ({ value }) => {
  // Generate an array representing stars
  // const stars = Array.from({ length: 5 }, (_, index) => value - index);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (value - i >= 1) {
      stars.push(1);
    } else if (Math.abs(value - i) == 0.5) {
      stars.push(0.5);
    } else {
      stars.push(0);
    }
  }
  return (
    <div className={styles.rating}>
      {stars.map((val, index) =>
        stars[index] == 1 ? (
          <TiStarFullOutline size={24} color="#FFC633" key={index} />
        ) : stars[index] == 0.5 ? (
          <TiStarHalfOutline size={24} color="#FFC633" key={index} />
        ) : (
          <TiStarOutline size={24} color="#FFC633" key={index} />
        ),
      )}
    </div>
  );
};

export default Rating;
