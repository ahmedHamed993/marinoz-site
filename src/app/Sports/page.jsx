"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "../tours/tours.module.css";
import ContactForm from "../../components/Form/ContactForm";
import { useQuery, gql } from "@apollo/client";
import { GET_CITIES } from "@/queries/citiesQuery";
import LoadingCard from "@/components/LoadingCard/LoadingCard";
import CategorySlider from "../tours/CategorySlider";
import TourCard from "../tours/TourCard";

const Sports = () => {
  // const { loading, error, data } = useQuery(GET_CITIES);

  // if (loading) return <LoadingCard />;
  // if (error) return <div>Error: {error.message}</div>;
  // const city = data?.cities;

  const city = [
    {
      id: 1,
      image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
      Destination: "Hurghada",
      num: "20",
    },
    {
      id: 2,
      image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
      Destination: "Hurghada",
      num: "20",
    },
    {
      id: 3,
      image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
      Destination: "Hurghada",
      num: "20",
    },
    {
      id: 4,
      image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
      Destination: "Hurghada",
      num: "20",
    },
    {
      id: 5,
      image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
      Destination: "Hurghada",
      num: "20",
    },
    {
      id: 6,
      image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
      Destination: "Hurghada",
      num: "20",
    },
  ];
  const slidesData = [
    { id: 1, image: "/Images/image 18.png", text: "Marine Activities" },
    { id: 2, image: "/Images/image 18 (1).png", text: "Sightseeing Tours" },
    { id: 3, image: "/Images/image 18 (2).png", text: "Water Sports" },
  ];

  const tours = [
    {
      id: 1,
      image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
      text: "Submarine Underwater",
      Destination: "Hurghada",
      price: "2030$",
    },
    {
      id: 2,
      image: "/Images/81763c76947e053768abd137d8927096.jpg",
      text: "Submarine Underwater",
      Destination: "Hurghada",
      price: "2030$",
    },
    {
      id: 3,
      image: "/Images/649056b226708f9eea71b68b56312f16.jpg",
      text: "Submarine Underwater",
      Destination: "Hurghada",
      price: "2030$",
    },
    {
      id: 4,
      image: "/Images/d9b2645bbabb9f67aa49ad566f451a2c.jpg",
      text: "Submarine Underwater",
      Destination: "Hurghada",
      price: "2030$",
    },
    {
      id: 5,
      image: "/Images/039dd97b220f044712b85d174e49627d.jpg",
      text: "Submarine Underwater",
      Destination: "Hurghada",
      price: "2030$",
    },
    {
      id: 6,
      image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
      text: "Submarine Underwater",
      Destination: "Hurghada",
      price: "2030$",
    },
    {
      id: 7,
      image: "/Images/81763c76947e053768abd137d8927096.jpg",
      text: "Submarine Underwater",
      Destination: "Hurghada",
      price: "2030$",
    },
    {
      id: 8,
      image: "/Images/649056b226708f9eea71b68b56312f16.jpg",
      text: "Submarine Underwater",
      Destination: "Hurghada",
      price: "2030$",
    },
  ];

  return (
    <div>
      <div className="container ">
        <div className={styles.tourHub}>
          <div className="text-center">
            <h2>Water Sports</h2>
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
            <CategorySlider slides={city} num={6} />
          </div>
          <div className={styles.tourCard}>
            <div className="row">{/* <TourCard tours={tours} Sports /> */}</div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
export default Sports;
