import React from "react";
import styles from "./yachtOverview.module.css";
import SectionTitle from "../SectionTitle";
import Rating from "@/components/rating/Rating";
import { GrLocation } from "react-icons/gr";
import YachtSpecifications from "../yacht-specifications/YachtSpecifications";
import YachtAmenities from "../yacht-amenities/YachtAmenities";
const YachtOverview = ({ yacht }) => {
  return (
    <div className={styles.overview}>
      {/* raing  */}
      <div className={styles.rating}>
        <Rating value={yacht?.rating} />
        <p>
          {yacht?.rental_reviews_aggregate?.aggregate?.avg?.stars} ({yacht?.rental_reviews_aggregate?.aggregate?.count} Reviews)
        </p>
      </div>
      {/* locatoin  */}
      <p className={styles.city}>
        {" "}
        <GrLocation color="#226699" fontSize={20} /> {yacht?.city?.city_en}
      </p>
      {/* over view  */}
      <div>
        <SectionTitle title={"Overview"} />
        <p className={styles.description}>{yacht?.description}</p>
      </div>
      <div className={styles.divider} />
      <YachtSpecifications yacht={yacht?.yacht} />
      <div className={styles.divider} />
      {/* <YachtAmenities yacht={yacht} /> */}
      {/* {JSON.stringify(yacht?.yacht?.features_id)} */}
    </div>
  );
};

export default YachtOverview;
