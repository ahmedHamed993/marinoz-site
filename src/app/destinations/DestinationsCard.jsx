import React from "react";
import styles from "./destinations.module.css";
import Link from "next/link";

const DestinationsCard = ({ data }) => {
  return (
    <Link href={`/destinations/${data.id}`} className={styles.destinationsCard} style={{background:data?.image ? `url(${process.env.NEXT_PUBLIC_IMAGE_PRE_URL + data.image})`:  `url("../../components/Assets/Images/image\ 18.png")`}}>
      <div className={styles.destinationsCardLayout}>
        <h2>{data?.city_en}</h2>
        <h3>{data?.country?.country_en}</h3>
        {/* <span>{data.id} Trips</span> */}
      </div>
    </Link>
  );
};

export default DestinationsCard;
