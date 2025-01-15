import React from "react";
import styles from "./yachtReviews.module.css";
import SectionTitle from "../SectionTitle";
import Rating from "@/components/rating/Rating";
import ProgressBar from "@/components/progress-bar/ProgressBar";
import YachtComments from "../tour-comments/TourComments";
import YachtSpecifications from "../yacht-specifications/YachtSpecifications";
import YachtAmenities from "../yacht-amenities/YachtAmenities";
const YachtReviews = ({ yacht }) => {
  return (
    <div style={{ marginTop: "64px" }}>
      <div className={styles.reviews_details}>
        <div className={styles.review_value}>
          <SectionTitle title="Customer Reviews" />
          <h6>
            {yacht.rating} <span>{yacht.rental_reviews_aggregate?.aggregate?.count} reviews</span>
          </h6>
          <Rating value={yacht.rental_reviews_aggregate?.aggregate?.avg?.stars} />
        </div>
        {/* <div className={styles.reviews_list}>
          <div>
            <p>Guid</p>
            <ProgressBar percentage={80} />
            <p>4.5</p>
          </div>
          <div>
            <p>Transporation</p>
            <ProgressBar percentage={90} />
            <p>3</p>
          </div>
          <div>
            <p>Value For Money</p>
            <ProgressBar percentage={70} />
            <p>3</p>
          </div>
          <div>
            <p>Safety</p>
            <ProgressBar percentage={70} />
            <p>3</p>
          </div>
        </div> */}
      </div>
      <div className="divider"></div>
      <YachtComments />
      <div className="divider"></div>
      <YachtSpecifications yacht={yacht?.yacht} />
      {/* <div className="divider"></div> */}
      {/* <YachtAmenities yacht={yacht} /> */}
    </div>
  );
};

export default YachtReviews;
