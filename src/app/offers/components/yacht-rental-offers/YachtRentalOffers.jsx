import React from "react";
import styles from "./yachtRentalOffers.module.css";
import OfferRentalCard from "../offer-rental-card/OfferRentalCard";
const YachtRentalOffers = () => {
  return (
    <div className={styles.rental_offers}>
      <div className={`${styles.rental_offers_container} container `}>
        <h6>Yacht Rental Deals</h6>
        <div className={`${styles.rental_offers_list} hide-scrollbar`}>
          {offers.map((item) => (
            <OfferRentalCard key={item.id} rental={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default YachtRentalOffers;

const offers = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
    city: "hurgada",
    country: "Egypt",
    discount: "20",
    name: "Submarine Water",
    price: "230",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
    city: "hurgada",
    country: "Egypt",
    discount: "20",
    name: "Submarine Water",
    price: "230",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
    city: "hurgada",
    country: "Egypt",
    discount: "20",
    name: "Submarine Water",
    price: "230",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
    city: "hurgada",
    country: "Egypt",
    discount: "20",
    name: "Submarine Water",
    price: "230",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww",
    city: "hurgada",
    country: "Egypt",
    discount: "20",
    name: "Submarine Water",
    price: "230",
  },
];
