import Rating from "@/components/rating/Rating";
import React from "react";
import dayjs from "dayjs";
import styles from "./reviewRow.module.css";
const ReviewRow = ({ review }) => {
  console.log(review);
  return (
    <div className={styles.row}>
      <div>
        <Rating value={review.stars} />
        <p>{dayjs(review?.created_at).format("YYYY/MM/DD")}</p>
      </div>
      <p>
        {review.comment ??
          "random text because the comment value is null. random text because the comment value is null. random text because the comment value is null. random text because the comment value is null. random text because the comment value is null.random text because the comment value is null."}
      </p>
    </div>
  );
};

export default ReviewRow;
