"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./tours.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CategorySlider from "./CategorySlider";
import TourCard from "./TourCard";
import Customize from "./Customize";
import ContactForm from "../../components/Form/ContactForm";
import { useQuery, gql } from "@apollo/client";
import { GET_CITIES } from "@/queries/citiesQuery";
import { GET_TOURS, GET_TOURS_FOR_CLIENT } from "@/queries/tours";
import LoadingCard from "@/components/LoadingCard/LoadingCard";
import { useAuth } from "@/hooks/useAuth";

const Tours = () => {
  const {id, token} = useAuth();
  const { loading, error, data } = useQuery(GET_CITIES);
  const { loading: loadingTours, error: errorTours, data: toursData } = useQuery(id? GET_TOURS_FOR_CLIENT : GET_TOURS,{
    variables:{
      clientId:id ?? null,
    }
  });

  if (loading || loadingTours) return <LoadingCard />;
  if (error) return <div>Error: {error.message}</div>;
  if (errorTours) return <div>Error: {errorTours.message}</div>;

  const cities = data?.cities;
  const tours = toursData?.tours;

  // console.log(tours); // Should now correctly log the tours data
  const slidesData = [
    { id: 1, image: "/Images/image 18.png", text: "Marine Activities" },
    { id: 2, image: "/Images/image 18.png", text: "Marine Water Sports" },
    { id: 3, image: "/Images/image 18.png", text: "Marine Attractions" },
  ];

  // const Destinations = [
  //   { id: 1, image: "/Images/image 18 (3).png", text: "Bali, Indonesia" },
  //   { id: 2, image: "/Images/image 18 (4).png", text: "Kerry, Ireland" },
  //   { id: 3, image: "/Images/image 18 (5).png", text: "Sydney, Australia" },
  //   { id: 4, image: "/Images/image 18 (6).png", text: "Paris, France" },
  //   { id: 5, image: "/Images/image 18 (7).png", text: "UAE, Abu Dhabi" },
  //   { id: 6, image: "/Images/image 18 (2).png", text: "UAE, Abu Dhabi" },
  //   { id: 7, image: "/Images/image 18 (3).png", text: "Sydney, Australia" },
  //   { id: 8, image: "/Images/image 18 (2).png", text: "Paris, France" },
  //   { id: 8, image: "/Images/image 18 (4).png", text: "Paris, France" },
  //   { id: 8, image: "/Images/image 18 (7).png", text: "Paris, France" },
  // ];

  // const Packages = [
  //   {
  //     id: 1,
  //     image: "/Images/039dd97b220f044712b85d174e49627d.jpg",
  //     text: "Enjoy up to 20% off on diving safari",
  //     Destination: "Destination",
  //     price: "230$",
  //   },
  //   {
  //     id: 2,
  //     image: "/Images/039dd97b220f044712b85d174e49627d.jpg",
  //     text: "Enjoy up to 20% off on diving safari",
  //     Destination: "Destination",
  //     price: "230$",
  //   },
  //   {
  //     id: 3,
  //     image: "/Images/039dd97b220f044712b85d174e49627d.jpg",
  //     text: "Enjoy up to 20% off on diving safari",
  //     Destination: "Destination",
  //     price: "230$",
  //   },
  //   {
  //     id: 4,
  //     image: "/Images/039dd97b220f044712b85d174e49627d.jpg",
  //     text: "Enjoy up to 20% off on diving safari",
  //     Destination: "Destination",
  //     price: "230$",
  //   },
  //   {
  //     id: 5,
  //     image: "/Images/039dd97b220f044712b85d174e49627d.jpg",
  //     text: "Enjoy up to 20% off on diving safari",
  //     Destination: "Destination",
  //     price: "230$",
  //   },
  // ];

  // const tours = [
  //   { id: 1, image: "/Images/20010c170e3aee024c170e88efd5455d.jpg", text: "Submarine Underwater", Destination: "Hurghada", price: "2030$" },
  //   { id: 2, image: "/Images/81763c76947e053768abd137d8927096.jpg", text: "Submarine Underwater", Destination: "Hurghada", price: "2030$" },
  //   { id: 3, image: "/Images/649056b226708f9eea71b68b56312f16.jpg", text: "Submarine Underwater", Destination: "Hurghada", price: "2030$" },
  //   { id: 4, image: "/Images/d9b2645bbabb9f67aa49ad566f451a2c.jpg", text: "Submarine Underwater", Destination: "Hurghada", price: "2030$" },
  //   { id: 5, image: "/Images/039dd97b220f044712b85d174e49627d.jpg", text: "Submarine Underwater", Destination: "Hurghada", price: "2030$" },
  //   { id: 6, image: "/Images/20010c170e3aee024c170e88efd5455d.jpg", text: "Submarine Underwater", Destination: "Hurghada", price: "2030$" },
  //   { id: 7, image: "/Images/81763c76947e053768abd137d8927096.jpg", text: "Submarine Underwater", Destination: "Hurghada", price: "2030$" },
  //   { id: 8, image: "/Images/649056b226708f9eea71b68b56312f16.jpg", text: "Submarine Underwater", Destination: "Hurghada", price: "2030$" },
  // ];

  return (
    <div>
      <div className="container">
        <div className={styles.tourHub}>
          <div className="text-center">
            <h2>Tours Hub</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className={styles.tourCategory}>
            <h3>Select Tour Category</h3>
            <CategorySlider slides={slidesData} num={4} />
          </div>
          <div className={styles.tourCategory}>
            <h3>Select Destinations</h3>
            <CategorySlider slides={cities} num={6} />
          </div>
          <div className={styles.tourCategory}>
            <h3>Special Packages</h3>
            {/* <CategorySlider slides={Packages} num={3} Packages /> */}
          </div>
          <div className={styles.tourCard}>
            <div>
              <h2>Tours</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
                <br /> Velit officia consequat duis enim velit mollit
              </p>
            </div>
            <div className="row">
              <TourCard tours={tours ?? []} />
            </div>
          </div>
          {/* <Customize /> */}
          {/* <ContactForm /> */}
        </div>
      </div>
    </div>
  );
};
export default Tours;

const tours = [
  {
    id: 1,
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
  },
  {
    id: 2,
    image: "/Images/81763c76947e053768abd137d8927096.jpg",
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
  },
  {
    id: 3,
    image: "/Images/649056b226708f9eea71b68b56312f16.jpg",
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
  },
  {
    id: 4,
    image: "/Images/d9b2645bbabb9f67aa49ad566f451a2c.jpg",
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
  },
  {
    id: 5,
    image: "/Images/039dd97b220f044712b85d174e49627d.jpg",
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
  },
  {
    id: 6,
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
  },
  {
    id: 7,
    image: "/Images/81763c76947e053768abd137d8927096.jpg",
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
  },
  {
    id: 8,
    image: "/Images/649056b226708f9eea71b68b56312f16.jpg",
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
  },
];
