'use client';
import DetailsSlider from "@/app/tours/[id]/DetailsSlider";
import { useParams } from "next/navigation";
import TabsWithData from "@/app/tours/[id]/Tabs";
import React from "react";
import {gql, useQuery} from "@apollo/client";
import LoadingCard from "@/components/LoadingCard/LoadingCard";
import BookForm from "@/app/rental/[id]/components/book-form/BookForm";
const GET_SUITES_BY_ID = gql`
  query MyQuery($id: bigint!) {
  suites_by_pk(id: $id) {
    city {
      city_en
      id
      image
    }
    country {
      country_en
      id
      image
    }
    country_id
    description
    created_at
    id
    image
    images
    location
    name
    note
    offer_id
    status
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
      fuel_type
      features_id
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
      property_type_id
      recent_upgrades
      renewal_date
      service_type
      status
      width
    }
    suite_reviews {
      id
      stars
      comment
      client_id
      client {
        address
        date_of_birth
        email
        id
        image
        name
        phone_number
        status
      }
    }
    suite_reviews_aggregate {
      aggregate {
        avg {
          stars
        }
        count
      }
    }
    suite_availabilities {
      adult_price
      cancellation_policy
      capacity
      child_price
      excludes
      final_adult_price
      final_child_price
      from
      id
      includes
      off_days
      program_days
      status
      to
    }
  }
}

`
const SuitesDetails = () => {
  const {id} = useParams();
  const {data,loading,error} = useQuery(GET_SUITES_BY_ID,{
    variables:{
      id:id
    }
  });
  console.log(data?.suites_by_pk);
  return loading ? <LoadingCard /> : (
    <div>
      <div className="container">
        <DetailsSlider images={data?.suites_by_pk?.images?.map(img => process.env.NEXT_PUBLIC_IMAGE_PRE_URL + img)}/>
        <div className="row">
          <div className="col-md-8">
            <TabsWithData tour={data?.suites_by_pk} Suites />
          </div>
          <div className="col-md-4">
            <BookForm price={data?.suites_by_pk?.yacht?.price}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuitesDetails;
