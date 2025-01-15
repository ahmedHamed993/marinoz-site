"use client";

import React from "react";
import DetailsSlider from "./DetailsSlider";
import TabsWithData from "./Tabs";
import { useQuery, gql } from "@apollo/client";
import { GET_TOUR_BY_ID } from "@/queries/tours";
import LoadingCard from "@/components/LoadingCard/LoadingCard";
import { useParams } from "next/navigation";
import CheckoutForm from "@/components/checkout-form/CheckoutForm";
import BookForm from "@/app/rental/[id]/components/book-form/BookForm";

const ToursDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_TOUR_BY_ID, {
    variables: { ids: id },
  });

  if (loading) return <LoadingCard />;
  if (error) return <div>Error: {error.message}</div>;

  const tour = data?.tours_by_pk;

  if(loading) return <LoadingCard />
  if(error) return <p>{error?.meesage}</p>
  return (
    <div>
      <div className="container">
        <DetailsSlider images={tour?.images?.map(img => process.env.NEXT_PUBLIC_IMAGE_PRE_URL + img)}/>
        <div className="row">
          <div className="col-md-8">
            <TabsWithData tour={tour} />
          </div>
          <div className="col-md-4">
            <BookForm />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ToursDetails;
const tour = {
  id: 1,
  tour_reviews_aggregate: 1,
  image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
  text: "Submarine Underwater",
  Destination: "Hurghada",
  price: "2012",
  yacht: {
    condition: "like-new",
    price: 2000,
    name: "Submarine underwater",
    build_year: "2020",
    city: { city_en: "Hurgada" },
  },
};
