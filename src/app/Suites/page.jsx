"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../tours/tours.module.css";
import CategorySlider from "../tours/CategorySlider";
import TourCard from "../tours/TourCard";
import ContactForm from "@/components/Form/ContactForm";
import { useQuery, gql } from "@apollo/client";
import { GET_CITIES } from "@/queries/citiesQuery";
import Amenities from "../rental/components/amenities/Amenities";
import Hero from "../rental/components/hero/Hero";
import LoadingCard from "@/components/LoadingCard/LoadingCard";
import { useAuth } from "@/hooks/useAuth";

const GET_SUITES = gql`
query MyQuery {
  suites(where: {status: {_eq: "approved"}}) {
    city {
      city_en
      id
    }
    country {
      country_en
      id
    }
    image
    id
    description
    images
    location
    name
    note
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
      owner_id
      price
      property_type_id
      recent_upgrades
      renewal_date
      service_type
      status
      width
    }
    
  }
}
`
const GET_SUITES_FOR_CLIENT = gql`
query MyQuery($clientId:uuid!)  {
  suites(where: {status: {_eq: "approved"}}) {
    city {
      city_en
      id
    }
    country {
      country_en
      id
    }
    favorite_suites(where: {client_id: {_eq: $clientId}}) {
      id
    }
    image
    id
    description
    images
    location
    name
    note
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
      owner_id
      price
      property_type_id
      recent_upgrades
      renewal_date
      service_type
      status
      width
    }
    
  }
}
`
const Suites = () => {
  const {id, token} = useAuth();
  const { loading, error, data } = useQuery(GET_CITIES);
  const {loading:loadingSuites, error:errorSuites, data:suites} = useQuery(id?GET_SUITES_FOR_CLIENT:GET_SUITES,{
    variables:{
      clientId:id,
    }
  });
  if (loading) return <LoadingCard />;
  if (error) return <div>Error: {error.message}</div>;
  const city = data?.cities;
  // console.log(city);
  // const city = [
  //   {
  //     id: 1,
  //     image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
  //     Destination: "Hurghada",
  //     num: "20",
  //   },
  //   {
  //     id: 2,
  //     image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
  //     Destination: "Hurghada",
  //     num: "20",
  //   },
  //   {
  //     id: 3,
  //     image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
  //     Destination: "Hurghada",
  //     num: "20",
  //   },
  //   {
  //     id: 4,
  //     image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
  //     Destination: "Hurghada",
  //     num: "20",
  //   },
  //   {
  //     id: 5,
  //     image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
  //     Destination: "Hurghada",
  //     num: "20",
  //   },
  //   {
  //     id: 6,
  //     image: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
  //     Destination: "Hurghada",
  //     num: "20",
  //   },
  // ];

  const Packages = [
    {
      id: 1,
      image: "/Images/039dd97b220f044712b85d174e49627d.jpg",
      text: "Enjoy up to 20% off on diving safari",
      Destination: "Destination",
      price: "230$",
    },
    {
      id: 2,
      image: "/Images/039dd97b220f044712b85d174e49627d.jpg",
      text: "Enjoy up to 20% off on diving safari",
      Destination: "Destination",
      price: "230$",
    },
    {
      id: 3,
      image: "/Images/039dd97b220f044712b85d174e49627d.jpg",
      text: "Enjoy up to 20% off on diving safari",
      Destination: "Destination",
      price: "230$",
    },
    {
      id: 4,
      image: "/Images/039dd97b220f044712b85d174e49627d.jpg",
      text: "Enjoy up to 20% off on diving safari",
      Destination: "Destination",
      price: "230$",
    },
    {
      id: 5,
      image: "/Images/039dd97b220f044712b85d174e49627d.jpg",
      text: "Enjoy up to 20% off on diving safari",
      Destination: "Destination",
      price: "230$",
    },
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

  console.log("data suites",suites?.suites)

  return loading || loadingSuites ? <LoadingCard /> : (
    <div>
      <div className={`${styles.tourHub} p-0`}>
        <Hero Suites text={"Marinoz Suites"} />
        <Amenities />
        <div className="container">
          <div className={styles.tourCategory}>
            <h3>Destinations</h3>
            <CategorySlider slides={city} num={6} />
          </div>
          <div className={styles.tourCategory}>
            <h3>Best Offers</h3>
            <CategorySlider slides={Packages} num={3} Packages />
          </div>
          <div className={styles.tourCard}>
            <div className="text-center mb-5 mt-5">
              <h2>Marine Suites</h2>
            </div>
            <div className="row">
              <TourCard tours={suites?.suites} Suites />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Suites;
