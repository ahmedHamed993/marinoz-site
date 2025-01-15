"use client";
import YachtCardActions from "@/components/yacht-card/YachtCardActions";
import styles from "./charterCheckoutForm.module.css";
import InputField from "@/components/input-field/InputField";
import { MdOutlineCalendarToday } from "react-icons/md";
import { TbUserSquareRounded } from "react-icons/tb";

const CharterCheckoutForm = ({ price, charterId }) => {
  return (
    <div className={styles.form_info}>
      <div className={styles.form_container}>
        <div className={styles.section_header}>
          <h3>
            {price} <span>per day</span>
          </h3>
          <YachtCardActions
            containerStyles={{
              top: 0,
              right: 0,
              position: "relative !important",
              flexDirection: "row",
              color: "#19B7DB",
              gap: "16px",
            }}
          />
        </div>
        <div className={styles.divider}></div>
        <form className={styles.form} action=".">
          <h4>Availability</h4>
          <div className={styles.two_cols}>
            <InputField
              label="from"
              icon={<MdOutlineCalendarToday />}
              type="date"
            />
            <InputField
              label="to"
              icon={<MdOutlineCalendarToday />}
              type="date"
            />
          </div>
          <InputField
            label="Number Of Guests"
            icon={<TbUserSquareRounded size={24} />}
            type="number"
          />
          <InputField
            label="Number Of Children"
            icon={<TbUserSquareRounded size={24} />}
            type="number"
          />
          <button type="submit" className={styles.submit_btn}>
            Send Inquiry
          </button>
        </form>
      </div>
      <div className={styles.seasons_price}>
        <h5>Seasonal Charter Rates</h5>
        <div>
          <div>
            <h6>Summer</h6>
            <span>From</span>
            <h6>$900,000</h6>
            <span>p/week + expense</span>
            <p>Approx $1,000,500</p>
          </div>
          <div>
            <h6>Winter</h6>
            <span>From</span>
            <h6>$900,000</h6>
            <span>p/week + expense</span>
            <p>Approx $1,000,500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharterCheckoutForm;
