import React from "react";
// styles
import styles from "./customEvent.module.css";
import CustomEventForm from "./CustomEventForm";

const CustomEvent = () => {
  return (
    <div className="container">
      <div className={styles.custom_event}>
        <div className={styles.title}>
          <h3>
            Customize <br />
            Your Event
          </h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className={styles.form_wrapper}>
          <CustomEventForm />
        </div>
      </div>
    </div>
  );
};

export default CustomEvent;
