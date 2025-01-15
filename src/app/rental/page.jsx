import React from "react";
// styles
import styles from "./page.module.css";
// components
import Hero from "./components/hero/Hero";
import Amenities from "./components/amenities/Amenities";
import RentByDistination from "./components/rent-by-destination/RentByDistination";
import FeaturedBoats from "./components/featured-boats/FeaturedBoats";
import ContactForm from "@/components/Form/ContactForm";

const RentalPage = async () => {
  return (
    <div className={styles.page_wrapper}>
      <Hero />
      <Amenities />
      <FeaturedBoats />
      <RentByDistination />
      <div className="container">
        <ContactForm />
      </div>
    </div>
  );
};

export default RentalPage;
