import React from "react";
import styles from "./offerMarineSuites.module.css";
import OfferSuitesCard from "../offer-suites-card/OfferSuitesCard";

const OfferMarineSuites = () => {
  return (
    <div className={styles?.offer_marine}>
      <div className={`${styles?.offer_marine} container`}>
        <h6>Marine Suites Deals</h6>
        <div className={`${styles?.offer_marine_list} hide-scrollbar`}>
          {suites.map((suite) => (
            <OfferSuitesCard suite={suite} key={suite?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferMarineSuites;

const suites = [
  {
    id: "1",
    name: "paradise beach, ",
    city: "Red sea",
    country: "Egypt",
    rate: "4.8",
    price: "550",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
  },
  {
    id: "2",
    name: "paradise beach, ",
    city: "Red sea",
    country: "Egypt",
    rate: "4.8",
    price: "550",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
  },
  {
    id: "3",
    name: "paradise beach, ",
    city: "Red sea",
    country: "Egypt",
    rate: "4.8",
    price: "550",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
  },
  {
    id: "4",
    name: "paradise beach, ",
    city: "Red sea",
    country: "Egypt",
    rate: "4.8",
    price: "550",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
  },
  {
    id: "5",
    name: "paradise beach, ",
    city: "Red sea",
    country: "Egypt",
    rate: "4.8",
    price: "550",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
  },
  {
    id: "6",
    name: "paradise beach, ",
    city: "Red sea",
    country: "Egypt",
    rate: "4.8",
    price: "550",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
  },
];
