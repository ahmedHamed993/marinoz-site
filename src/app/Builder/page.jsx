"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "../tours/tours.module.css";
import CategorySlider from "../tours/CategorySlider";
import ContactForm from "@/components/Form/ContactForm";
import RecentNews from "@/components/recent-news/RecentNews";
import CustomEvent from "../events/components/custom-event/CustomEvent";
import BuilderCard from "./BuilderCard";

const Builder = () => {
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

  return (
    <div>
      <div className="container">
        <div className={styles.tourHub}>
          <div>
            <CustomEvent />
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-6">
                  <BuilderCard />
                </div>
                <div className="col-md-6">
                  <BuilderCard />
                </div>
                <div className="col-md-6">
                  <BuilderCard />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className={styles.builderContent}>
                <span>DISCOVER</span>
                <h3>Best Trips Recommended on 2024</h3>
                <p>
                  Explore our curated list of the best trips to visit in 2024
                  and discover incredible destinations waiting to be explored
                </p>
              </div>
            </div>
          </div>
          <div className={styles.tourCategory}>
            <h3>Offers</h3>
            <CategorySlider slides={Packages} num={3} Packages />
          </div>
          <ContactForm />
          <RecentNews />
        </div>
      </div>
    </div>
  );
};
export default Builder;
