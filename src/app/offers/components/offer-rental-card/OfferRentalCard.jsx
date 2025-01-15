import React from "react";
import Link from "next/link";
import styles from "./offerRentalCard.module.css";
const OfferRentalCard = ({ rental }) => {
  return (
    <div className={styles?.rental_card}>
      <img src={rental.image} />
      <Link href={`/rental/${rental.id}`} className={styles.rental_details}>
        <h5>{rental.name}</h5>
        <h6>
          <span>
            {rental.city} - {rental.country}
          </span>
        </h6>
        <p>{rental.price}</p>
      </Link>
    </div>
  );
};

export default OfferRentalCard;
