import React from "react";
import styles from "./charterServices.module.css";
import ItemSpecifications from "@/components/item-specifications/ItemSpecifications";
import ItemAmenities from "@/components/item-amenities/ItemAmenities";
const CharterServices = ({ charter }) => {
  return (
    <div>
      {/* food and activies  */}
      <div className={styles.extra_features}>
        <div>
          <div className={styles.title}>Food & Beverages</div>
          <div className="divider" />
          <div className={styles.items_list}>
            {charter.foods.map((food, index) => (
              <div key={index}>
                <div className={styles.dot}></div>
                <p key={index}>{food}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.title}>Activites</div>
          <div className="divider" />
          <div className={styles.items_list}>
            {charter.activities.map((act, index) => (
              <div>
                <div className={styles.dot}></div>
                <p key={index}>{act}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="divider" />
      {/* specifications  */}
      <ItemSpecifications
        specifications={{
          manufacturer: charter?.manufacturer,
          year: charter?.year,
          onboard_capacity: charter?.onboard_capacity,
          number_of_berths: charter?.number_of_berths,
          engine_power: charter?.engine_power,
          model: charter?.model,
          length: charter?.length,
          cabins: charter?.cabins,
          bathrooms: charter?.bathrooms,
          fuel: charter.fuel,
        }}
      />
      <div className={"divider"} />
      <ItemAmenities amenities={charter.amenities} />
    </div>
  );
};

export default CharterServices;
