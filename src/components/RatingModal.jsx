import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import styles from "./yachtReviews.module.css";
import SectionTitle from "../SectionTitle";
import Rating from "@/components/rating/Rating";
import YachtComments from "../yacht-comments/YachtComments";
import YachtSpecifications from "../yacht-specifications/YachtSpecifications";
import { useAuth } from "@/hooks/useAuth";
import { INSERT_RENTAL_REVIEW } from "../queries/rentalRatting";

const ReviewModal = ({ isOpen, onClose, onSubmit, comment, setComment, stars, setStars }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>Submit Your Review</h2>
        <form onSubmit={onSubmit}>
          <div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment"
              required
            />
          </div>
          <div>
            <label>Stars:</label>
            <input
              type="number"
              value={stars}
              onChange={(e) => setStars(parseInt(e.target.value))}
              min={1}
              max={5}
              required
            />
          </div>
          <button type="submit">Submit Review</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
