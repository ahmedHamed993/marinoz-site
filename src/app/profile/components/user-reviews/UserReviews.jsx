"use client";
import React, { useState } from "react";
import ChangeButton from "../change-button/ChangeButton";
import styles from "./userReviews.module.css";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "@/queries/profileQuery";
import ReviewRow from "../review-row/ReviewRow";
import LoadingCard from "@/components/LoadingCard/LoadingCard";
import { useAuth } from "@/hooks/useAuth";
// import { GET_USER_REVIEWS } from '@/queries/reviewsQuery';
// import { useQuery } from '@apollo/client';
const UserReviews = () => {
  const { id } = useAuth();
  const { loading, data, error } = useQuery(GET_PROFILE, {
    variables: {
      id: id,
    },
  });
  console.log("data", error);
  return loading ? (
    <LoadingCard />
  ) : (
    <div className={styles.user_reviews}>
      <h5>My Reviews</h5>
      <div className={styles?.my_reviews_avg}>
        <h3>
          {data?.clients_by_pk?.tour_reviews_aggregate?.aggregate?.avg?.stars ||
            2}
        </h3>
        <p>{data?.clients_by_pk?.tour_reviews?.length} Reviews</p>
      </div>
      <div className="divider"></div>
      <div>
        {data?.clients_by_pk?.tour_reviews.map((review) => {
          return <ReviewRow review={review} />;
        })}
      </div>
    </div>
  );
};

export default UserReviews;
