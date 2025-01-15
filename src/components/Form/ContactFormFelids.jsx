"use client";
import React from "react";
import styles from "./contact.module.css";
import { useForm } from "react-hook-form";

export default function ContactFormFelids() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        {/* Name Field */}
        <div className="col-md-6">
          {/* <label htmlFor="name">Name</label> */}
          <input
            id="name"
            placeholder="Name"
            className={styles.FormControl}
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        {/* Email Field */}
        <div className="col-md-6">
          {/* <label htmlFor="email">Email</label> */}
          <input
            id="email"
            type="email"
            placeholder="Email"
            className={styles.FormControl}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>

        {/* Phone Field */}
        <div className="col-md-6">
          {/* <label htmlFor="phone">Phone</label> */}
          <input
            id="phone"
            type="text"
            placeholder="Phone"
            className={styles.FormControl}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}
        </div>

        {/* Country Select Field */}
        <div className="col-md-6">
          {/* <label htmlFor="country">Country</label> */}
          <select
            id="country"
            className={styles.FormControl}
            {...register("country", { required: "Country is required" })}
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
          </select>
          {errors.country && (
            <span className={styles.error}>{errors.country.message}</span>
          )}
        </div>

        {/* Message Field */}
        <div className="col-md-12">
          {/* <label htmlFor="message">Message</label> */}
          <textarea
            id="message"
            placeholder="Message"
            className={styles.FormControl}
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <span className={styles.error}>{errors.message.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className={styles.submit}>
            Submit Booking Request
          </button>
        </div>
      </div>
    </form>
  );
}
