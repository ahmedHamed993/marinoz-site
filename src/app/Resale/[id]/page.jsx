'use client'
import React from "react";
import styles from "./page.module.css";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoBedSharp } from "react-icons/io5";
import { GiPoliceOfficerHead } from "react-icons/gi";
import ResaleYachtImageModel from "../components/ResaleYachtImageModel";
import RelatedYachts from "@/app/rental/[id]/components/related-yacht/RelatedYachts";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import LoadingCard from "@/components/LoadingCard/LoadingCard";
const GET_RESALE_BY_ID = gql`
query MyQuery($id: bigint = "") {
  resales_by_pk(id: $id) {
    additional_info
    created_at
    engine_power
    fuel_consumption
    fuel_tank
    id
    images
    max_speed
    num_of_crew
    selling_price
    speed
    water_tank
    yacht {
      adults
      bathrooms
      bed
      bedrooms
      build_year
      cabins
      capacity
      children
      city {
        city_en
      }
      condition
      country {
        country_en
      }
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
      model
      name
      manufacturer
      note
      owner_id
      price
      property_type_id
      recent_upgrades
      renewal_date
      service_type
      status
      width
      yacht_type {
        yacht_type_en
        id
      }
    }
  }
}

`
const ResaleDetails = () => {
  const {id} = useParams();
  const {data,loading,error} = useQuery(GET_RESALE_BY_ID,{
    variables:{
      id:id,
    }
  });
  console.log(data);
  const resale = data?.resales_by_pk || null;
  if(loading) return <LoadingCard />
  if(error) return <p>{error?.message}</p>
  return (
    <div className={styles.resale_details}>
      <div className="container">
        <div className={styles.images}>
          <img src={process.env.NEXT_PUBLIC_IMAGE_PRE_URL + resale.images[0]} />
          <img src={process.env.NEXT_PUBLIC_IMAGE_PRE_URL + resale.images[1]} />
        </div>
        <div className={styles.content}>
          <div className={styles.content_content}>
            <h1>{resale?.yacht?.name}</h1>
            {/* <h2>{resale?.yacht?.name}</h2> */}
            <div className={styles.rooms_info}>
              <div className={styles.rooms_info_box}>
                <p>
                  <FaPeopleGroup />
                </p>
                <div>
                  <p>GUESTS</p>
                  <p>{resale?.yacht?.adults}</p>
                </div>
              </div>
              <div className={styles.rooms_info_box}>
                <p>
                  <IoBedSharp />
                </p>
                <div>
                  <p>CABINS</p>
                  <p>{resale?.yacht?.cabins}</p>
                </div>
              </div>
              <div className={styles.rooms_info_box}>
                <p>
                  <GiPoliceOfficerHead />
                </p>
                <div>
                  <p>CREW</p>
                  <p>{resale?.num_of_crew}</p>
                </div>
              </div>
            </div>
            <h6 className={styles.config_text}>ROOMS CONFIGURATION</h6>
            <p className={styles.extra_rooms_info}>
              <span>{resale?.yacht?.bedrooms} Bedroom</span>
              <span>{resale?.yacht?.bathrooms} Bathrooms</span>
              <span>{resale?.yacht?.bed} Bed</span>
            </p>
            <div className={styles.blue_divider}></div>
            <div className={styles.details}>
              <h6>{resale?.yacht?.name} Details</h6>
              <div dangerouslySetInnerHTML={{ __html: resale?.additional_info }} />
            </div>
            <div className={styles.blue_divider}></div>
            <div className={styles.specifications}>
              <h6>specifications</h6>
              <div>
                <div>
                  <p>Manufacturer: {resale?.yacht?.manufacturer}</p>
                  <p>Year: {resale?.yacht?.build_year}</p>
                  <p>Onboard capacity: {resale?.yacht?.capacity}</p>
                  <p>Number of Beds: {resale?.yacht?.bedrooms}</p>
                  <p>Engine Type: {resale?.yacht?.engine_type}</p>
                </div>
                <div>
                  <p>Model: {resale?.yacht?.model}</p>
                  <p>Length: {resale?.yacht?.length}</p>
                  <p>Number of cabins: {resale?.yacht?.cabins}</p>
                  <p>Number of bathrooms: {resale?.yacht?.bathrooms}</p>
                  <p>Fuel: {resale?.yacht?.fuel_type}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.booking_form}>booking form</div>
        </div>
        <div className={styles.blue_divider}></div>
        <div className={styles.layout}>
          <h6>Layout</h6>
          <div className={styles.layout_content}>
            <ResaleYachtImageModel />
            <div className={styles.layout_specifications}>
              <h6> additional information Specifications</h6>
              <ul>
                <li>Crusing Speed: {resale?.speed}</li>
                <li>Maximum Speed: {resale?.max_speed}</li>
                <li>Fuel Tank {resale?.fuel_tank} liter</li>
                <li>Cabins: {resale?.yacht?.cabins}</li>
              </ul>
              <h6>Hightlights</h6>
              <ul>
                <li>Engine Power: {resale?.engine_power}</li>
                <li>Fuel Consumption: {resale?.fuel_consumption}</li>
                <li>Water Tank: {resale?.water_tank} liter</li>
                <li>Number Of Crew: {resale?.num_of_crew}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.details_images}>
          <div className={styles?.details_info}>
            <h6>{resale?.yacht?.name}</h6>
            <p>{resale?.additional_info}</p>
            <p>{resale?.yacht?.description}</p>
          </div>
          <div className={styles.images_grid}>
            {resale?.yacht.images?.map((img) => {
              return <img src={process.env.NEXT_PUBLIC_IMAGE_PRE_URL + img} />;
            })}
          </div>
        </div>
        <div className={styles?.blue_divider} />
        <div className={styles.yacht_report}>
          <h6>{resale?.yacht?.name} Sales Report</h6>
          <p>{resale?.additional_info}</p>
          <div className={styles.yacht_report_images}>
            {resale?.yacht?.images?.slice(0,3).map(img => <img src={process.env.NEXT_PUBLIC_IMAGE_PRE_URL + img}/>)}
          </div>
        </div>
      </div>
      {/* <RelatedYachts /> */}
    </div>
  );
};

export default ResaleDetails;

const yacht = {
  images: [
    "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHlhY2h0fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eWFjaHR8ZW58MHx8MHx8fDA%3D",
  ],
  name: "East Mediterran",
  guests: "12",
  cabins: "4",
  crew: "30",
  master: "1",
  vip: "1",
  double: "2",
  twin: "6",
  description:
    "<ul><li>An Eastern Mediterranean luxury yacht charter promises to be a vacation which is unmatched in terms of the natural beauty and diverse cultures you'll experience.</li><li>What's more, a range of fascinating historical sites populate this region to make it one of the most scenic cruising grounds to escape to.</li><li>The warm Mediterranean waters are peppered with picturesque islands, with each location offering something new and equally enchanting.</li></ul>",
};
