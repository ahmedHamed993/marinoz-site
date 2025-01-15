"use client";
import React from "react";
import styles from "./destinations.module.css";
import DestinationsCard from "./DestinationsCard";
import { useQuery, gql } from "@apollo/client";
import { GET_CITIES } from "@/queries/citiesQuery";
import LoadingCard from "@/components/LoadingCard/LoadingCard";

const Destinations = () => {
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
  console.log(city);

  const tours = [
    {
      id: 1,
      image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
      Destination: "Hurghada",
      num: "20",
    },
    {
      id: 2,
      image: "/Images/81763c76947e053768abd137d8927096.jpg",
      Destination: "Hurghada",
      num: "20",
    },
    {
      id: 3,
      image: "/Images/649056b226708f9eea71b68b56312f16.jpg",
      Destination: "Hurghada",
      num: "20",
    },
    {
      id: 4,
      image: "/Images/d9b2645bbabb9f67aa49ad566f451a2c.jpg",
      Destination: "Hurghada",
      num: "20",
    },
    {
      id: 5,
      image: "/Images/039dd97b220f044712b85d174e49627d.jpg",
      Destination: "Hurghada",
      num: "20",
    },
    {
      id: 6,
      image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
      Destination: "Hurghada",
      num: "20",
    },
    {
      id: 7,
      image: "/Images/81763c76947e053768abd137d8927096.jpg",
      Destination: "Hurghada",
      num: "20",
    },
    {
      id: 8,
      image: "/Images/649056b226708f9eea71b68b56312f16.jpg",
      Destination: "Hurghada",
      num: "20",
    },
  ];

  return (
    <div className={styles.destinations}>
      <div className="container">
        <div className="row">
          {city.map((destination, index) => {
            let columnClass = "";
            if (index === 0 || index === 1) {
              columnClass = "col-md-6";
            } else if (index === city.length - 1 || index === city.length - 2) {
              columnClass = "col-md-6";
            } else {
              columnClass = index % 3 === 2 ? "col-md-8" : "col-md-4";
            }
            return (
              <div key={destination.id || index} className={columnClass}>
                <DestinationsCard data={destination} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
