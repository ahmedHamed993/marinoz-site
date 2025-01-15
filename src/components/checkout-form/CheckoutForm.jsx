"use client";
import React, { useState } from "react";
// styles
import styles from "./checkoutForm.module.css";
// components
import FormSteps from "./FormSteps";
import InputField from "../input-field/InputField";
import CheckoutFormNumberField from "./CheckoutFormNumberField";
import CheckoutCardInfo from "./CheckoutCardInfo";
// react-hook-form
import { useForm } from "react-hook-form";

const CheckoutForm = ({ guests, children, from, to }) => {
  const [activeStep, setActiveStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      country_id: "",
      city_id: "",
      transportation: "",
      special_requests: "",
      adult: "",
      children: "",
      total_number: "",
      guests: guests,
      children: children,
      from: from,
      to: to,
    },
  });
  return (
    <div className="container">
      <div className={styles.checkout_form_container}>
        <FormSteps activeStep={activeStep} setActiveStep={setActiveStep} />
        <div className={styles.form_info_container}>
          <form>
            {activeStep === 1 && (
              <div className={styles.first_step}>
                <InputField type="date" label="date" />
                <CheckoutFormNumberField label="Adult(+18)" hint="120$" />
                <CheckoutFormNumberField label="Child(6-17)" hint="50$" />
                <CheckoutFormNumberField label="Total Number" />
              </div>
            )}
            {activeStep === 2 && (
              <div classsName={styles.second_step}>
                <h6>Your Personal Details</h6>
                <div className={styles.fields_container}>
                  <InputField label="First Name" palceholder="enter you name" />
                  <InputField label="Last Name" palceholder="enter you name" />
                  <InputField
                    label="Phone Number"
                    palceholder="enter you phone number"
                    type="tel"
                  />
                  <InputField
                    label="Email Address"
                    palceholder="enter you email"
                    type="email"
                  />
                  <InputField label="Country" palceholder="enter you country" />
                </div>
              </div>
            )}
            {activeStep === 3 && (
              <div classsName={styles.second_step}>
                <InputField
                  label="Transportation"
                  palceholder="Transportation"
                />
                <InputField
                  label="Add Special Requests"
                  palceholder="Special Request"
                />
              </div>
            )}
            {activeStep !== 3 ? (
              <button
                type="button"
                className={styles.next_button}
                onClick={() => {
                  if (activeStep < 3) {
                    setActiveStep((prev) => prev + 1);
                  }
                }}
              >
                go to next step
              </button>
            ) : (
              <></>
            )}
            {activeStep == 3 && (
              <button type="submit" className={styles.next_button}>
                send
              </button>
            )}
          </form>
          <CheckoutCardInfo />
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
