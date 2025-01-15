'use client';
import React from "react";
import  {gql, useQuery} from "@apollo/client";
import { useParams } from "next/navigation";
import TourComment from "./TourComment";
const GET_TOUR_BY_ID =  gql`
  query MyQuery($id:bigint!) {
  tours_by_pk(id: $id) {
    tour_reviews {
      client {
        email
        id
        image
        name
        phone_number
      }
      comment
      id
      created_at
      stars
    }
    tour_reviews_aggregate {
      aggregate {
        count
        avg {
          stars
        }
      }
    }
  }
}
`

const YachtComments = () => {
  const {id} = useParams();

  const {data, loading, error} = useQuery(GET_TOUR_BY_ID,{
    variables:{
      id:id
    }
  })
  console.log(data?.tours_by_pk?.tour_reviews);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "64px",
        padding: "32px 0",
      }}
    >
      {data?.tours_by_pk?.tour_reviews?.map((comment) => (
        <TourComment key={comment.id} comment={comment} ratingValue = {comment?.stars} />
      ))}
    </div>
  );
};

export default YachtComments;
const comments = [
  {
    userImage:
      "https://images.pexels.com/photos/3779770/pexels-photo-3779770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userName: "John Doe",
    date: "2024-12-25",
    rate: 4.5,
    commentTitle: "Great Product!",
    commentBody:
      "I really enjoyed using this product. It exceeded my expectations in every way!, I really enjoyed using this product. It exceeded my expectations in every way!,I really enjoyed using this product. It exceeded my expectations in every way!, I really enjoyed using this product. It exceeded my expectations in every way!",
  },
  {
    userImage:
      "https://images.pexels.com/photos/3779770/pexels-photo-3779770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userName: "Jane Smith",
    date: "2024-12-24",
    rate: 3.0,
    commentTitle: "Average Experience",
    commentBody:
      "The product was okay but could use some improvements in usability and design., The product was okay but could use some improvements in usability and design.,The product was okay but could use some improvements in usability and design., The product was okay but could use some improvements in usability and design.",
  },
  {
    userImage:
      "https://images.pexels.com/photos/3779770/pexels-photo-3779770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userName: "Ahmed Ali",
    date: "2024-12-23",
    rate: 5.0,
    commentTitle: "Excellent Service",
    commentBody:
      "The customer service was outstanding, and the product quality was top-notch. Highly recommended!, The customer service was outstanding, and the product quality was top-notch. Highly recommended!,The customer service was outstanding, and the product quality was top-notch. Highly recommended!, The customer service was outstanding, and the product quality was top-notch. Highly recommended!",
  },
  {
    userImage:
      "https://images.pexels.com/photos/3779770/pexels-photo-3779770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userName: "Maria Lopez",
    date: "2024-12-22",
    rate: 2.0,
    commentTitle: "Not Satisfied",
    commentBody:
      "The product did not meet my expectations, and I faced some issues with delive, The product did not meet my expectations, and I faced some issues with delive,The product did not meet my expectations, and I faced some issues with delive, The product did not meet my expectations, and I faced some issues with delive",
  },
];
