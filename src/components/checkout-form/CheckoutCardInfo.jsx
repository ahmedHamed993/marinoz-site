import React from "react";
import styles from "./checkoutCardInfo.module.css";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
const CheckoutCardInfo = () => {
  return (
    <div className={styles.card_info}>
      <h6>Your Cart Overview</h6>
      <div className={styles?.info_image}>
        <img
          src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=600"
          width="180px"
          height="110px"
        />
        <div className={styles.item_info}>
          <h6>Conceptum trip</h6>
          <p>
            <MdOutlineDateRange color="#0FB0C4" />
            23 DEC 2022
          </p>
          <p>
            <IoMdTime color="#0FB0C4" />4 days
          </p>
        </div>
      </div>
      <div className="divider" />
      <div className={styles.guests_list}>
        <div>
          <div>
            <p>2</p> <h6>Adults(18+)</h6>
          </div>
          <h6>64.00</h6>
        </div>
        <div>
          <div>
            <p>1</p> <h6>Child(6-17)</h6>
          </div>
          <h6>22.00</h6>
        </div>
        <div>
          <div>
            <p>1</p> <h6>Infant(0-5)</h6>
          </div>
          <h6>00.00</h6>
        </div>
      </div>
      <div className="divider"></div>
      <h6>
        <span>Total Price</span>
        <span>133$</span>
      </h6>
    </div>
  );
};

export default CheckoutCardInfo;
