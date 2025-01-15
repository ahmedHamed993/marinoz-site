import React from "react";
// styles
import styles from "./amenities.module.css";
// icons
import {
  IoBusOutline,
  IoEarthOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { MdDirectionsCarFilled } from "react-icons/md";
import { PiBriefcase } from "react-icons/pi";
const Amenities = () => {
  return (
    <div className={styles.amenities}>
      <div>
        <h2>Amenities</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className={styles.amenities_wrapper}>
        {amenitiesOptions.map((item, index) => (
          <div
            key={index}
            className={styles.amenities_box}
            style={{ color: item.color }}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;

const amenitiesOptions = [
  {
    icon: <IoBusOutline />,
    color: "#0FB0C4",
    label: "Public Transportation",
  },
  {
    icon: <IoEarthOutline />,
    color: "#7BBCB0",
    label: "Nature & Adventure",
  },
  {
    icon: <MdDirectionsCarFilled />,
    color: "#CA852C",
    label: "Private Transportation",
  },
  {
    icon: <PiBriefcase />,
    color: "#34CA78",
    label: "Business Tours",
  },
  {
    icon: <IoLocationOutline />,
    color: "#9E0059",
    label: "Local Visit",
  },
];
