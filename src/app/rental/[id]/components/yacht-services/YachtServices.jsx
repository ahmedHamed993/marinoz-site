import React from "react";
import styles from "./yachtServices.module.css";
import SectionTitle from "../SectionTitle";
import YachtSpecifications from "../yacht-specifications/YachtSpecifications";
import YachtAmenities from "../yacht-amenities/YachtAmenities";
import ToursDetails from "@/app/tours/[id]/page";
const YachtServices = ({ yacht }) => {
  console.log("rental food beverages",yacht?.rental_activities);
  const activities = yacht?.rental_activities?.length ? yacht?.rental_activities[0]?.activities : [];
  const foods = yacht?.rental_food_beverages?.length ? yacht?.rental_food_beverages : [];
    console.log("foods",yacht?.rental_food_beverages)
  return (
    <div>
      {/* food and activies  */}
      <div className={styles.extra_features}>
        <div>
          <div className={styles.title}>Food & Beverages</div>
          <div className="divider" />
          <div className={styles.items_list}>
            {foods?.map((food, index) => (
              <div key={index}>
                <div className={styles.dot}></div>
                <span key={index}>{food?.food_beverage?.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.title}>Activites</div>
          <div className="divider" />
          <div className={styles.items_list}>
            {activities?.map((act, index) => (
              <div>
                <div className={styles.dot}></div>
                <span key={index}>{act?.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="divider" />
      {/* specifications  */}
      <YachtSpecifications yacht={yacht?.yacht} />
      <div className={"divider"} />
      {/* <YachtAmenities yacht={yacht} /> */}
    </div>
  );
};

export default YachtServices;
