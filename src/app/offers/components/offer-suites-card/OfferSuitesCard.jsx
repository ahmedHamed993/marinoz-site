import Link from "next/link";
import React from "react";
import styles from "./offerSuitesCard.module.css";
import { TiStarFullOutline } from "react-icons/ti";
const OfferSuitesCard = ({ suite }) => {
  return (
    <div className={styles.offer_card}>
      <img src={suite.image} />
      <Link href={`/Suites/${suite.id}`}>{suite.name}</Link>
      <p>
        <span>
          {suite.city}, {suite.country}
        </span>
        <span>
          {suite.rate} <TiStarFullOutline />
        </span>
      </p>
      <h6>{suite.price}$</h6>
    </div>
  );
};

export default OfferSuitesCard;
