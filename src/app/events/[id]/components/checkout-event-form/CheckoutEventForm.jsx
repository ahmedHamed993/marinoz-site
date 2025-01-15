import React from "react";
import styles from "./form.module.css";
import { IoIosTime } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import InputField from "@/components/input-field/InputField";
const CheckoutEventForm = () => {
  return (
    <form action="." className={styles.form}>
      <div className={styles.book_info}>
        <h3>
          3000$ <span> subtotal </span>{" "}
        </h3>
        <p>3000/night</p>
      </div>
      <div className={styles.book_location}>
        <div>
          <IoIosTime size={20} color="#CA852C" />
          <p>10 Days</p>
        </div>
        <div>
          <IoLocationSharp size={20} color="#CA852C" />
          <p>Hurgada, Red Sea</p>
        </div>
      </div>
      <div className={styles.form_fields}>
        <InputField placeholder="From" type="date" />
        <InputField placeholder="To" type="date" />
        <InputField placeholder="No. of Children" type="number" />
        <InputField placeholder="No. of Guests" type="number" />
        <InputField placeholder="Single Room" type="number" />
        <InputField placeholder="Twin Room" type="number" />
        <InputField placeholder="Yacht Type" type="text" />
        <InputField placeholder="No. of Tickets" type="number" />
      </div>
      <button type="submit">Checkout</button>
    </form>
  );
};

export default CheckoutEventForm;
