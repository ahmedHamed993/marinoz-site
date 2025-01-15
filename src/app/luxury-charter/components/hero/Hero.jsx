import React from "react";
import styles from "./hero.module.css";
// icons
import {
  IoBusOutline,
  IoEarthOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { MdDirectionsCarFilled } from "react-icons/md";
import { PiBriefcase } from "react-icons/pi";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.text}>
          <h1>Luxury Charter</h1>
          <p>
            Boat Types Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.
          </p>
          <h6>Yacht Types</h6>
          <div className={styles.yacht_types}>
            {yachtTypes.map((item, index) => (
              <div
                key={index}
                className={styles.type_box}
                style={{ color: item.color }}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.image}>
          <img src="/images/luxury-charter-hero-img.png" width="550px" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

const yachtTypes = [
  {
    icon: <IoBusOutline />,
    color: "#0FB0C4",
    label: "Catarman Yachts",
  },
  {
    icon: <IoEarthOutline />,
    color: "#7BBCB0",
    label: "Day Sailers",
  },
  {
    icon: <MdDirectionsCarFilled />,
    color: "#CA852C",
    label: "Expedition Yachts",
  },
  {
    icon: <PiBriefcase />,
    color: "#34CA78",
    label: "Luxury Motor Yachts",
  },
  {
    icon: <IoLocationOutline />,
    color: "#9E0059",
    label: "Trawler Yachts",
  },
];
