import React from "react";
import styles from "./tourServices.module.css";
import YachtSpecifications from "@/app/rental/[id]/components/yacht-specifications/YachtSpecifications";
import { usePathname } from "next/navigation";
const TourServices = ({ tour,  }) => {
  const pathName = usePathname();

  const activities = tour?.tour_activities?.length ? tour?.tour_activities : [];
  const foods = tour?.tour_food_beverages?.length ? tour?.tour_food_beverages : [];
  const availabilities = tour && (tour.suite_availabilities || tour.availabilities);
  console.log(availabilities)
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
                <span key={index}>{act?.activity?.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="divider" />
      {/* specifications  */}
      <YachtSpecifications yacht={tour?.yacht} />
      <div className={"divider"} />
      <div className={styles.OverviewDis}>
        <h3>What is included & excluded</h3>
        <div className={styles.included}>
          <div>
            <h3>Included</h3>
            <ul>
              <li>
                {/* <i className="fa fa-check"></i> */}
                {availabilities?.length &&
                  availabilities[0].includes }
              </li>
            </ul>
          </div>
          <div>
            <h3>Excluded</h3>
            <ul className={styles.excluded}>
              <li>
                {/* <i className="fa fa-x"></i> */}
                {availabilities?.length &&
                  availabilities[0].excludes }
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.OverviewDis}>
        <div className={styles.included}>
          <div>
            <h3>Language</h3>
            <ul>
              <li>English</li>
            </ul>
          </div>
          <div>
            <h3>Duration</h3>
            <ul>
              <li>
                {availabilities?.length &&
                  availabilities[0].program_days }{" "}
                Days
              </li>
            </ul>
          </div>
          <div>
            <h3>Number of people</h3>
            <ul>
              <li>
                {tour?.yacht?.adults &&
                  tour?.yacht?.adults}{" "}
                People
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.OverviewDis}>
        <h3>Cancellation Policy</h3>
        <h5>
          <i className="fa fa-x"></i>
          {availabilities[0]?.cancellation_policy}
        </h5>
      </div>
      {/* <YachtAmenities yacht={yacht} /> */}
    </div>
   
  );
};

export default TourServices;
