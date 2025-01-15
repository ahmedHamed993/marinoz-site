import Link from "next/link";
import React from "react";
import styles from "./charterCard.module.css";
import FavouriteButton from "@/components/favourite-button/FavouriteButton";
const CharterCard = ({ charter }) => {
  return (
    <div className={styles.card}>
      <img src={charter.image} />
      <div>
        <Link href={`/luxury-charter/${charter.id}`}>{charter.name}</Link>
        <p>
          <span>{charter.city}</span>
          <span></span>
          <span>{charter.country}</span>
        </p>
        <span>{charter.price} / day</span>
      </div>
      <FavouriteButton apiEndpoint="" />
    </div>
  );
};

export default CharterCard;
