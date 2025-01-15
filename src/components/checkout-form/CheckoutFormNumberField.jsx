"use client";
import React, { useState } from "react";
import styles from "./formNumber.module.css";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
const CheckoutFormNumberField = ({ label, hint }) => {
  const [value, setValue] = useState(1);
  return (
    <div className={styles.field_container}>
      <div>
        <h6>{label}</h6>
        {hint && <p>{hint}</p>}
      </div>
      <div className={styles.field_input_container}>
        <button type="button" onClick={() => setValue((prev) => --prev)}>
          <FiMinus />
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="button" onClick={() => setValue((prev) => ++prev)}>
          <GoPlus />
        </button>
      </div>
    </div>
  );
};

export default CheckoutFormNumberField;
