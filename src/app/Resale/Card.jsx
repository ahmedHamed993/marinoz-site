"use client";

import React from "react";
import Styles from "./Resale.module.css";

const CardComponent = ({cards}) => {
  const defaultCards = [
    {
      id: 1,
      title: "Submarine Underwater",
      subtitle: "Hurghada",
      description: "2012",
      bgImage: "/Images/5d4a59a6c3ce90ada4f07abdb7626237.jpg",
    },
    {
      id: 2,
      title: "Submarine Underwater",
      subtitle: "Hurghada",
      description: "2012",
      bgImage: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
    },
    {
      id: 3,
      title: "Submarine Underwater",
      subtitle: "Hurghada",
      description: "2012",
      bgImage: "/Images/d9b2645bbabb9f67aa49ad566f451a2c.jpg",
    },
    {
      id: 4,
      title: "Submarine Underwater",
      subtitle: "Hurghada",
      description: "2012",
      bgImage: "/Images/20010c170e3aee024c170e88efd5455d.jpg",
    },
  ];

  return (
    <div className={Styles.cardContainer}>
      {(cards || defaultCards).map((card) => (
        <div
          key={card.id}
          className={Styles.card}
          style={{ backgroundImage: `url(${card.bgImage})` }}
        >
          <div className={Styles.cardContent}>
            <h3>{card.title}</h3>
            <span>{card.subtitle}</span>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
