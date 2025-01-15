'use client';
import React from "react";
// styles
import styles from "./page.module.css";
import YachtImagesSlider from "./components/yacht-images-slider/YachtImagesSlider";
import YachtContentTabs from "./components/yacht-content-tabs/YachtContentTabs";
import BookForm from "./components/book-form/BookForm";
import YachtLocation from "./components/yacht-location/YachtLocation";
import YachtNotes from "./components/yacht-notes/YachtNotes";
import YachtGallery from "./components/yacht-gallery/YachtGallery";
import RelatedYachts from "./components/related-yacht/RelatedYachts";
import {gql, useQuery} from "@apollo/client";
import LoadingCard from "@/components/LoadingCard/LoadingCard";
import { useParams } from "next/navigation";
const GET_RENTAL_BY_ID =  gql`
  query MyQuery($id:bigint!) {
  rentals_by_pk(id: $id) {
    city {
      city_en
      id
    }
    country {
      country_en
      id
    }
    created_at
    description
    id
    image
    images
    location
    name
    note
    offer_id
    owner_id
    owner {
      address
      created_at
      email
      id
      image
      name
      phone_number
      status
    }
    yacht {
      adults
      bathrooms
      bed
      bedrooms
      build_year
      cabins
      capacity
      children
      condition
      created_at
      depth
      description
      engine_type
      features_id
      fuel_type
      id
      images
      infants
      length
      location
      manufacturer
      model
      name
      note
      price
    }
    rental_reviews_aggregate {
      aggregate {
        count
        avg {
          stars
        }
      }
    }
    rental_food_beverages {
      food_beverage {
        price
        title
      }
    }
    rental_activities {
      activities {
        price
        id
        title
      }
    }
    rental_reviews {
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
    rental_reviews_aggregate {
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
const RentalDetails = () => {
  const {id} = useParams();

  const {data, loading, error} = useQuery(GET_RENTAL_BY_ID,{
    variables:{
      id:id
    }
  });
  console.log('data',data)
  return loading ? <LoadingCard /> : (
    <div className={styles.page_wrapper}>
      <div className="container">
        <YachtImagesSlider images={data?.rentals_by_pk?.images ?? []} />
      </div>
      {/* details  */}
      <div className="container">
        <div className={styles.yacht__details}>
          <YachtContentTabs yacht={data?.rentals_by_pk} />
          <div
            style={{
              width: "100%",
              marginTop: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <BookForm yachtId={data.id} price={data?.rentals_by_pk?.yacht?.price} />
            {/* <YachtLocation /> */}
            <YachtNotes notes={data?.rentals_by_pk?.note} />
          </div>
        </div>
      </div>
      <div className="container">
        <YachtGallery images={data?.rentals_by_pk?.yacht?.images} />
      </div>
      <RelatedYachts cityId={data?.rentals_by_pk?.city?.id}/>
    </div>
  );
};

export default RentalDetails;


