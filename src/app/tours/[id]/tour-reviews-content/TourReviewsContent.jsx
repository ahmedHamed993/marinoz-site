"use client"
import React, { useState } from "react";
import styles from "./tourReviews.module.css";
import { useMutation } from "@apollo/client";
// import SectionTitle from "../SectionTitle";
import Rating from "@/components/rating/Rating";
import SectionTitle from "@/components/section-title/SectionTitle";
import TourComments from "../tour-comments/TourComments";
import { INSERT_TOURS_REVIEW } from "@/queries/toursRatting";
import { useAuth } from "@/hooks/useAuth";


const TourReviewsContent = ({ tour }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(5);
  const { id: client_id } = useAuth();
  const tour_id = tour?.id;

  const [insertReview] = useMutation(INSERT_TOURS_REVIEW);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting review with:", { client_id, comment, tour_id, stars });

    try {
      await insertReview({
        variables: { client_id, comment, tour_id, stars },
      });
      alert("Review submitted successfully!");
      closeModal();
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("An error occurred while submitting the review.");
    }
  };

  const handleStarClick = (rating) => {
    setStars(rating);
  };

  const ReviewModal = React.memo(({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;

    return (
      <div className={styles.modalOverlay} onClick={onClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <h2>Submit Your Review</h2>
          <form onSubmit={onSubmit}>
            <div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment"
                required
                className={styles.textarea}
              />
            </div>
            <div className={styles.starContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`${styles.star} ${star <= stars ? styles.activeStar : ""}`}
                  onClick={() => handleStarClick(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <div className={styles.buttonGroup}>
              <button type="submit" className={styles.saveButton}>
                Save
              </button>
              <button type="button" onClick={onClose} className={styles.closeButton}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  });


  return (
    <div style={{ marginTop: "64px" }}>
      <div className={styles.reviews_details}>
        <div className={styles.review_value}>
          <SectionTitle title="Customer Reviews" />
          <h6>
            {tour.rating} <span>{tour.tour_reviews_aggregate?.aggregate?.count} reviews</span>
          </h6>
          <Rating value={tour.tour_reviews_aggregate?.aggregate?.avg?.stars} />
        </div>
        
      </div>
      <div className="divider"></div>
      <TourComments />
      <button onClick={openModal} className={styles.addReviewButton}>
        Add Review
      </button>

      <ReviewModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} />
      <div className="divider"></div>
      {/* <YachtSpecifications yacht={yacht?.yacht} /> */}
    </div>
  );
};

export default TourReviewsContent;
