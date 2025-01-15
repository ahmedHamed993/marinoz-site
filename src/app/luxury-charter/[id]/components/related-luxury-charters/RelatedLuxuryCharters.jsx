import React from "react";
import styles from "./relatedLuxuryCharters.module.css";
import CharterCard from "@/app/luxury-charter/components/charter-card/CharterCard";
const RelatedLuxuryCharters = () => {
  return (
    <div className={styles.related}>
      <div className="container">
        <div className={styles.content}>
          <h2>Related Luxury Charters</h2>
          <div className={styles.charters_wrapper}>
            {charters.map((item, index) => (
              <CharterCard key={index} charter={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedLuxuryCharters;

const charters = [
  {
    id: "1",
    image:
      "https://plus.unsplash.com/premium_photo-1733317328038-4aa0269ac803?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIweWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Luxury yacht",
    city: "hurgada",
    country: "Egypt",
    price: 2040,
  },
  {
    id: "2",
    image:
      "https://plus.unsplash.com/premium_photo-1733317328038-4aa0269ac803?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIweWFjaHR8ZW58MHx8MHx8fDA%3D",
    name: "Luxury yacht",
    city: "hurgada",
    country: "Egypt",
    price: 2040,
  },
];
