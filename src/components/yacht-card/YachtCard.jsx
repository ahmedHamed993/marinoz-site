import React from "react";
import styles from "./yachtCard.module.css";
import YachtCardActions from "./YachtCardActions";
import Link from "next/link";
import FavouriteButton from "../favourite-button/FavouriteButton";
const YachtCard = ({ rental }) => {
  const isFavourite = rental.favorite_rentals?.length ? true : false;
  return (
    <div className={styles.card} style={{position:"relative"}}>
      <img src={process.env.NEXT_PUBLIC_IMAGE_PRE_URL + rental?.image} alt="" />
      <div href={`/rental/${rental?.id}`} className={styles.card__info}>
        <Link href={`/rental/${rental?.id}`}>{rental?.name}</Link>
        <div style={{textTransform:'capitalize'}}>
          <div className={styles.dot}></div>
          <span>{rental?.city?.city_en}</span>
          <div className={styles.dot}></div>
          <span>{rental?.yacht?.adults} guests</span>
          <div className={styles.dot}></div>
          <span>{rental?.yacht?.cabins} Cabins</span>
          <div className={styles.dot}></div>
          <span>{rental?.yacht?.capacity} m</span>
        </div>
        <p>starts from {rental?.yacht?.price}$ / Day</p>
        <YachtCardActions />
        <FavouriteButton 
          defaultValue={isFavourite} 
          type='rental' 
          typeId={rental?.id} 
          defaultFavId={rental?.favorite_rentals?.length ? rental.favorite_rentals[0]?.id : null} 
        />
      </div>
    </div>
  );
};

export default YachtCard;
