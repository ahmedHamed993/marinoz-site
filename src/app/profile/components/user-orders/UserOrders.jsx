import React from "react";
import styles from "./userOrders.module.css";
import { IoCalendarOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
const UserOrders = () => {
  return (
    <div className={styles.booking_history}>
      <div className={styles.row}>
        <div className={styles?.row__service_name}>
          <img src="/images/profile-bg.png" width="160px" height="100px" />
          <div>
            <h6>Orange Bay Island</h6>
            <p>
              <IoCalendarOutline /> 1 Dec, 2020
            </p>
            <p>
              <MdAccessTime /> 2 Days
            </p>
          </div>
        </div>
        <div className={styles?.payment_method}>
          <p>Credit Card</p>
        </div>
        <div className={styles?.price}>
          <p>200</p>
        </div>
        <div className={styles?.status}>
          <p>upcomming</p>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
