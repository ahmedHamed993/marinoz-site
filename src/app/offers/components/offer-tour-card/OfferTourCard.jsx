import React from "react";
import styles from "./offerTourCard.module.css";
import Link from "next/link";
const OfferTourCard = ({ tour }) => {
  return (
    <div className={styles.offer_card}>
      <img src={tour.image} />
      <div>
        <p>{tour.city}</p>
        <h5>{tour.name}</h5>
        <h6>{tour.price}</h6>
        <Link href={`/tours/${tour?.id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default OfferTourCard;
