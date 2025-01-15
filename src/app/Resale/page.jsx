"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CardComponent from "./Card";
import Styles from "./Resale.module.css";
import {
  IoBusOutline,
  IoEarthOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { MdDirectionsCarFilled } from "react-icons/md";
import { PiBriefcase } from "react-icons/pi";
import ImageGrid from "./ImageGrid";
import ContactForm from "@/components/Form/ContactForm";
import BrandCard from "./BarendCard";
import BoatCard from "./BoatCard";
import { useQuery, gql } from "@apollo/client";
import { GET_RESALE } from "@/queries/resale";
import LoadingCard from "@/components/LoadingCard/LoadingCard";
const GET_YACHT_TYPES = gql`
query MyQuery {
  yacht_types {
    id
    yacht_type_en
  }
}

`
const Resale = () => {
  const { loading, error, data } = useQuery(GET_RESALE);
  const {loading:loadingTypes, error:errorTypes, data:typesData} = useQuery(GET_YACHT_TYPES);
  if (loading) return <LoadingCard />;
  if (error) return <div>Error: {error.message}</div>;
  const tours = data.resales;
  console.log(tours);

  // const tours = [
  //   {
  //     id: 1,
  //     image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
  //     text: "Submarine Underwater",
  //     Destination: "Hurghada",
  //     price: "2012",
  //     yacht: {
  //       condition: "like-new",
  //       price: 2000,
  //       name: "Submarine underwater",
  //       build_year: "2020",
  //       city: { city_en: "Hurgada" },
  //     },
  //   },
  //   {
  //     id: 2,
  //     image: "/Images/81763c76947e053768abd137d8927096.jpg",
  //     text: "Submarine Underwater",
  //     Destination: "Hurghada",
  //     price: "2012",
  //     yacht: {
  //       condition: "like-new",
  //       price: 2000,
  //       name: "Submarine underwater",
  //       build_year: "2020",
  //       city: { city_en: "Hurgada" },
  //     },
  //   },
  //   {
  //     id: 3,
  //     image: "/Images/649056b226708f9eea71b68b56312f16.jpg",
  //     text: "Submarine Underwater",
  //     Destination: "Hurghada",
  //     price: "2012",
  //     yacht: {
  //       condition: "like-new",
  //       price: 2000,
  //       name: "Submarine underwater",
  //       build_year: "2020",
  //       city: { city_en: "Hurgada" },
  //     },
  //   },
  //   {
  //     id: 4,
  //     image: "/Images/d9b2645bbabb9f67aa49ad566f451a2c.jpg",
  //     text: "Submarine Underwater",
  //     Destination: "Hurghada",
  //     price: "2012",
  //     yacht: {
  //       condition: "like-new",
  //       price: 2000,
  //       name: "Submarine underwater",
  //       build_year: "2020",
  //       city: { city_en: "Hurgada" },
  //     },
  //   },
  //   {
  //     id: 5,
  //     image: "/Images/039dd97b220f044712b85d174e49627d.jpg",
  //     text: "Submarine Underwater",
  //     Destination: "Hurghada",
  //     price: "2012",
  //     yacht: {
  //       condition: "like-new",
  //       price: 2000,
  //       name: "Submarine underwater",
  //       build_year: "2020",
  //       city: { city_en: "Hurgada" },
  //     },
  //   },
  //   {
  //     id: 6,
  //     image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
  //     text: "Submarine Underwater",
  //     Destination: "Hurghada",
  //     price: "2012",
  //     yacht: {
  //       condition: "like-new",
  //       price: 2000,
  //       name: "Submarine underwater",
  //       build_year: "2020",
  //       city: { city_en: "Hurgada" },
  //     },
  //   },
  //   {
  //     id: 7,
  //     image: "/Images/81763c76947e053768abd137d8927096.jpg",
  //     text: "Submarine Underwater",
  //     Destination: "Hurghada",
  //     price: "2012",
  //     yacht: {
  //       condition: "like-new",
  //       price: 2000,
  //       name: "Submarine underwater",
  //       build_year: "2020",
  //       city: { city_en: "Hurgada" },
  //     },
  //   },
  //   {
  //     id: 8,
  //     image: "/Images/649056b226708f9eea71b68b56312f16.jpg",
  //     text: "Submarine Underwater",
  //     Destination: "Hurghada",
  //     price: "2012",
  //     yacht: {
  //       condition: "like-new",
  //       price: 2000,
  //       name: "Submarine underwater",
  //       build_year: "2020",
  //       city: { city_en: "Hurgada" },
  //     },
  //   },
  // ];

  return (
    <div>
      <CardComponent cards={tours.map(tour => ({title:tour?.yacht?.name, subtitle:tour?.yacht?.city?.city_en, bgImage:process.env.NEXT_PUBLIC_IMAGE_PRE_URL + tour?.yacht?.images[0]}))} />
      <div className={Styles.Resale}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Resale</h2>
              <p>
                Boat Types Amet minim mollit non deserunt ullamco est sit aliqua
                dolor do amet sint. Velit officia consequat duis enim velit
                mollit. Exercitation veniam consequat sunt nostrud amet. Boat
                Types Amet minim mollit non deserunt ullamco est sit aliqua
                dolor do amet sint. Velit officia consequat duis enim velit
                mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
              <h3>Yacht Types</h3>
              <div className={Styles.amenities_wrapper}>
                {typesData?.yacht_types?.map((item, index) => (
                  <div
                    key={index}
                    className={Styles.amenities_box}
                    style={{ color: item?.color || "#0FB0C4" }}
                  >
                    {item?.icon ? item?.icon : <IoEarthOutline />}
                    <span>{item.yacht_type_en}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <ImageGrid />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={Styles.BrandCard}>
          <h2>Brands for you</h2>
          <BrandCard />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <BoatCard tours={tours} />
        </div>
      </div>
      <div className="container">
        <ContactForm />
      </div>
    </div>
  );
};

export default Resale;

const amenitiesOptions = [
  {
    icon: <IoBusOutline />,
    color: "#0FB0C4",
    label: "Public Transportation",
  },
  {
    icon: <IoEarthOutline />,
    color: "#7BBCB0",
    label: "Nature & Adventure",
  },
  {
    icon: <MdDirectionsCarFilled />,
    color: "#CA852C",
    label: "Private Transportation",
  },
  {
    icon: <PiBriefcase />,
    color: "#34CA78",
    label: "Business Tours",
  },
  {
    icon: <IoLocationOutline />,
    color: "#9E0059",
    label: "Local Visit",
  },
];
