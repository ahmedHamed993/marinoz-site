import React from "react";
// styles
import styles from "./toursOffers.module.css";
import OfferTourCard from "../offer-tour-card/OfferTourCard";

const ToursOffers = () => {
  return (
    <div className={styles.tours_offers}>
      <div
        className={`${styles.tours_offers_container} container hide-scrollbar`}
      >
        <h6>Tours Offers</h6>
        <div className={`${styles.tours_offers_list} hide-scrollbar`}>
          {tours.map((item) => (
            <OfferTourCard key={item.id} tour={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToursOffers;

const tours = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
    city: "hurgada",
    name: "Enjoy up to 20% off on Orange Bay island",
    price: "230",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
    city: "hurgada",
    name: "Enjoy up to 20% off on Orange Bay island",
    price: "230",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
    city: "hurgada",
    name: "Enjoy up to 20% off on Orange Bay island",
    price: "230",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
    city: "hurgada",
    name: "Enjoy up to 20% off on Orange Bay island",
    price: "230",
  },
];
