"use client";
import React, { useState } from "react";
import FormSteps from "@/components/checkout-form/FormSteps";
import styles from "./page.module.css";
import CartItemCard from "./components/cart-item-card/CartItemCard";
import { useForm } from "react-hook-form";
import InputField from "@/components/input-field/InputField";
const Checkout = () => {
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
      full_name: "",
      contact_email: "",
      contact_phone_number: "",
      country_id: "",
      city_id: "",
      address: "",
    },
  });
  return (
    <div className="container">
      <div style={{ padding: "80px 0" }}>
        <FormSteps activeStep={activeStep} setActiveStep={setActiveStep} />
        <div className={styles?.content}>
          <div className={styles?.steps}>
            {activeStep === 1 && (
              <div className={`${styles?.steps_content} ${styles?.step_one}`}>
                <h6>Delivery Options</h6>
                <div className={styles?.divider} />
                <div className={styles?.shipping_info}>
                  <p>
                    <span>Express Courier</span>
                    <span>free</span>
                  </p>
                  <span>3 to 4 Business Days</span>
                </div>
                <div className={styles?.divider} />
                <div className={styles?.expected_dates}>
                  <p>Exptected Dates: </p>
                  <div className={styles?.expected_dates_radios}>
                    <div className={styles?.expected_date_radio}>
                      <input
                        id="first-date"
                        type="radio"
                        name="expected-date"
                      />
                      <label htmlFor="first-date">First Date</label>
                    </div>
                    <div className={styles?.expected_date_radio}>
                      <input
                        id="second-date"
                        type="radio"
                        name="expected-date"
                      />
                      <label htmlFor="second-date">second Date</label>
                    </div>
                    <div className={styles?.expected_date_radio}>
                      <input
                        id="third-date"
                        type="radio"
                        name="expected-date"
                      />
                      <label htmlFor="third-date">third Date</label>
                    </div>
                    <div className={styles?.expected_date_radio}>
                      <input
                        id="fourth-date"
                        type="radio"
                        name="expected-date"
                      />
                      <label htmlFor="fourth-date">fourth Date</label>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeStep === 2 && (
              <div className={`${styles?.steps_content} ${styles?.step_two}`}>
                <h6>Your Personal Details</h6>
                <div className={styles?.inputs_grid}>
                  <InputField
                    label="First Name"
                    type="text"
                    register={{ ...register("first_name") }}
                  />
                  <InputField
                    label="Last Name"
                    type="text"
                    register={{ ...register("last_name") }}
                  />
                  <InputField
                    label="phone number"
                    type="tel"
                    register={{ ...register("phone_number") }}
                  />
                  <InputField
                    label="Email"
                    type="email"
                    register={{ ...register("email") }}
                  />
                </div>
                <p>Contact</p>
                <div className={styles?.divider} />
                <div className={styles?.inputs_grid}>
                  <InputField
                    label="Full Name"
                    type="text"
                    register={{ ...register("full_name") }}
                  />
                  <InputField
                    label="phone number"
                    type="tel"
                    register={{ ...register("phone_number") }}
                  />
                  <InputField
                    label="Email"
                    type="email"
                    register={{ ...register("email") }}
                  />
                </div>
                <p>Address</p>
                <div className={styles?.divider} />
                <div className={styles?.inputs_grid}>
                  <InputField
                    label="Country"
                    type="text"
                    register={{ ...register("country") }}
                  />
                  <InputField
                    label="City"
                    type="text"
                    register={{ ...register("city") }}
                  />
                  <InputField
                    label="Address"
                    type="text"
                    register={{ ...register("address") }}
                  />
                </div>
              </div>
            )}
            {activeStep === 3 && (
              <div className={styles?.steps_content}>payment iframe</div>
            )}
          </div>
          <div className={styles?.cart}>
            <h3>Your Cart Overview</h3>
            <div className={styles?.cart_items}>
              {cartItems.map((item) => (
                <CartItemCard key={item?.id} item={item} />
              ))}
            </div>
            <div className={styles.divider} />
            <div className={styles?.cart_summary}>
              <div>
                <div>
                  <p>2</p>
                  <p>Subtotal</p>
                </div>
                <p>64</p>
              </div>
              <div>
                <div>
                  <p>1</p>
                  <p>Tax</p>
                </div>
                <p>22</p>
              </div>
              <div>
                <div>
                  <p>2</p>
                  <p>Shipping</p>
                </div>
                <p>0</p>
              </div>
              <div className={styles?.total}>
                <h6>Total Price</h6>
                <p>170</p>
              </div>
            </div>
            <div className={styles.divider} />
            <button
              onClick={() => setActiveStep((prev) => prev + 1)}
              className={styles?.go_next_btn}
            >
              Go To Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
const cartItems = [
  {
    id: "1",
    item_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8UTjcX0Y4Jg6pA6V6RqnO5oGY4Fb53ap6-8DKzWRAkeV3V6JnGYgzjo&s",
    item_name: "Wrap Top",
    item_size: "S",
    quantity: 1,
    price: 200,
  },
];
