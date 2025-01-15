import React from "react";
import styles from "./yachtComment.module.css";
import Rating from "@/components/rating/Rating";
const YachtComment = ({ comment , ratingValue}) => {
  return (
    <div className={styles.comment}>
      <div className={styles.user}>
        <img
          src={process.env.NEXT_PUBLIC_IMAGE_PRE_URL + comment.client?.image}
          width="64px"
          height="64px"
          style={{ borderRadius: "50%" }}
        />
        <div>
          <Rating value={comment?.ratingValue} />
          <p>{comment.client?.name}</p>
          <span>{comment.client?.created_at}</span>
        </div>
      </div>
      <div className={styles.comment_content}>
        {/* <h6>{comment.comment}</h6> */}
        <p>{comment.comment}</p>
      </div>
    </div>
  );
};

export default YachtComment;
