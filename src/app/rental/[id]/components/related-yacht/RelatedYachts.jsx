'use client'
import React from "react";
import YachtCard from "@/components/yacht-card/YachtCard";
import SectionTitle from "@/components/section-title/SectionTitle";
import {gql, useQuery} from "@apollo/client";
import { useParams } from "next/navigation";
const GET_RENTALS_BY_CITY = gql`
query MyQuery($id:bigint) {
  rentals(where: {city_id: {_eq: $id}}) {
    id
    city_id
    image
    name
    location
    status
    city {
      city_en
    }
    yacht {
      price
      cabins
      bathrooms
      bedrooms
      adults
      capacity
      length
    }
  }
}
`
const RelatedYachts = ({cityId}) => {
  const {id} = useParams();
  const {data,loading,error} = useQuery(GET_RENTALS_BY_CITY,{
    variables:{
      id:cityId,
    }
  })
  console.log("related yacht", data?.rentals)
  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        padding: "80px 0",
      }}
    >
      <SectionTitle title="Related & Recommended Yachts" />
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(288px, 1fr))",
          gap: "32px",
        }}
      >
        {data?.rentals?.slice(0, 4).map((item, index) => (
          <YachtCard rental={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RelatedYachts;
const boats = [
  {
    id: "1",
    price: "1300$/day",
    name: "Conceptum Luxurious Yach",
    img: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    price: "1700$/day",
    name: "Conceptum Luxurious Yach",
    img: "https://images.pexels.com/photos/1819631/pexels-photo-1819631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "3",
    price: "1400$/day",
    name: "Conceptum Luxurious Yach",
    img: "https://images.pexels.com/photos/28573434/pexels-photo-28573434/free-photo-of-scenic-boat-cruise-on-tranquil-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "4",
    price: "100$/day",
    name: "Conceptum Luxurious Yach",
    img: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "5",
    price: "1700$/day",
    name: "Conceptum Luxurious Yach",
    img: "https://images.pexels.com/photos/1819631/pexels-photo-1819631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "6",
    price: "1400$/day",
    name: "Conceptum Luxurious Yach",
    img: "https://images.pexels.com/photos/28573434/pexels-photo-28573434/free-photo-of-scenic-boat-cruise-on-tranquil-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
