import React from "react";
import styles from "./charterReviews.module.css";
// import SectionTitle from "../SectionTitle";
import Rating from "@/components/rating/Rating";
import ProgressBar from "@/components/progress-bar/ProgressBar";
// import YachtComments from "../yacht-comments/YachtComments";
import ItemSpecifications from "@/components/item-specifications/ItemSpecifications";
import ItemAmenities from "@/components/item-amenities/ItemAmenities";
const YachtReviews = ({ charter }) => {
  return (
    <div style={{ marginTop: "64px" }}>
      <div className={styles.reviews_details}>
        <div className={styles.review_value}>
          <h2
            style={{
              fontSize: "18px",
              color: "#034EA2",
              fontWeight: "400",
              marginBottom: "16px",
            }}
          >
            Recreation
          </h2>
          <h6>
            {charter.rating} <span>{charter.rating_count} reviews</span>
          </h6>
          <Rating value={charter.rating} />
        </div>
      </div>
      <div className="divider"></div>
      {/* <YachtComments /> */}
      <div className="divider"></div>
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

export default YachtReviews;
