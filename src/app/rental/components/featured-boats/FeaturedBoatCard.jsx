import React from "react";
// styles
import styles from "./featured.module.css";
import Link from "next/link";
const FeaturedBoatCard = ({ boat }) => {
  return (
    <Link
      href={`/rental/${boat.id}`}
      className={styles?.featured__card}
      // style={{ backgroundImage: "url("""+ + boat.image }}
      style={{ backgroundImage: `url(https://app-marinoz.addictaco.website/storage/${boat.image})`}}
    >
      <div className={styles?.featured__card__Layout}>
        <p>${boat?.yacht?.price} / Day</p>
        <h3>{boat.name}</h3>
      </div>
    </Link>
  );
};

export default FeaturedBoatCard;
