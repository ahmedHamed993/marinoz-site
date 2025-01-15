import React from "react";
import styles from "./charterOverview.module.css";
import Rating from "@/components/rating/Rating";
import { GrLocation } from "react-icons/gr";
import ItemSpecifications from "@/components/item-specifications/ItemSpecifications";
import ItemAmenities from "@/components/item-amenities/ItemAmenities";
import CharterRecreation from "../charter-recreation/CharterRecreation";
import CharterTenders from "../charter-tenders/CharterTenders";
import CharterCreationTenders from "../charter-creation-tenders/CharterCreationTenders";
const CharterOverview = ({ charter }) => {
  return (
    <div className={styles.overview}>
      {/* raing  */}
      <div className={styles.rating}>
        <Rating value={charter?.rating} />
        <p>
          {charter.rating} ({charter.rating_count} Reviews)
        </p>
      </div>
      {/* locatoin  */}
      <p className={styles.city}>
        {" "}
        <GrLocation color="#226699" fontSize={20} /> {charter.city}
      </p>
      {/* over view  */}
      <div>
        <h2>Overview</h2>
        <p className={styles.description}>{charter?.description}</p>
      </div>
      <div className={styles.divider} />
      <CharterCreationTenders charter={charter} />
      <div className={styles.divider} />
      <ItemSpecifications
        specifications={{
          manufacturer: charter?.manufacturer,
          year: charter?.year,
          onboard_capacity: charter?.onboard_capacity,
          number_of_berths: charter?.number_of_berths,
          engine_power: charter?.engine_power,
          model: charter?.model,
          length: charter?.length,
          cabins: charter?.cabins,
          bathrooms: charter?.bathrooms,
          fuel: charter.fuel,
        }}
      />
      <div className={styles.divider} />
      <ItemAmenities amenities={charter?.amenities} />
    </div>
  );
};

export default CharterOverview;
