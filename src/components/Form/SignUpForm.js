"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { register as registerUser } from "@/actions/auth-actions/register";
import callApi from "@/helpers/callApi";
import Swal from "sweetalert2";
import { fireToastAlert } from "@/helpers/fireToastAlert";
import { signIn } from "next-auth/react";

function SignUpForm() {
  const router = useRouter();
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   const apiKey =
  //     "0TWpNy02pUvLx6NL27FP8S2uUvvt4Lx23rWfH2f3pxlgfKUnHoPic9U8NDqRgV2n";
  //   const apiUrl =
  //     "https://app-marinoz.addictaco.website/api/v1/clients/auth/register";

  //   try {
  //     // Create FormData object to send both JSON and image data
  //     const payload = {
  //       ...data,
  //       // address: "21 jump street",
  //       status: "inactive",
  //     };

  //     // If there's an image, add it to the payload
  //     if (image) {
  //       const formData = new FormData();
  //       formData.append("image", image);
  //       Object.keys(payload).forEach((key) => {
  //         formData.append(key, payload[key]);
  //       });

  //       // Send the payload with the image as a FormData object
  //       const response = await axios.post(apiUrl, formData, {
  //         headers: {
  //           "api-key": apiKey,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       });

  //       const { otp, token } = response.data.data;
  //       router.push(`/OTP?otp=${otp}&token=${token}`);
  //     } else {
  //       alert("Please upload an image.");
  //     }
  //   } catch (error) {
  //     console.error("API call failed:", error);
  //     if (error.response) {
  //       console.error("Error Response:", error.response.data);
  //     }
  //     alert("Failed to sign up. Please try again.");
  //   }
  // };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("status", "inactive");
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    registerUser(
      formData,
      (data) => {
        router.push(`/OTP?otp=${data?.data?.data?.otp}`);
      },
      (title) => {
        fireToastAlert("error", title);
      },
    );
  };
  return (
    <div className={styles.loginCard}>
      <div className="text-center">
        <Image
          src="/Images/Marinoz logo and branding colors-03.png"
          className={styles.LoginImage}
          width={100}
          height={100}
          alt="Logo"
        />
      </div>
      <div className="mb-3 text-start mt-3 w-100">
        <h1>Sign Up</h1>
        <p>Your journey starts here</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className={`${styles.formGroup}`}>
              <label>Email</label>
              <input
                type="email"
                className={styles.fromControl}
                placeholder="E-mail"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${styles.formGroup}`}>
              <label>Name</label>
              <input
                type="text"
                className={styles.fromControl}
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />
              {errors.name && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${styles.formGroup}`}>
              <label>Phone</label>
              <input
                type="tel"
                className={styles.fromControl}
                placeholder="Phone"
                {...register("phone_number", {
                  required: "Phone is required",
                  minLength: {
                    value: 6,
                    message: "Phone must be at least 6 characters",
                  },
                })}
              />
              {errors.phone_number && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.phone_number.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${styles.formGroup}`}>
              <label>Password</label>
              <input
                type="password"
                className={styles.fromControl}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className={`${styles.formGroup}`}>
              <label>Date of Birth</label>
              <input
                type="date"
                className={styles.fromControl}
                {...register("date_of_birth", {
                  required: "Date of Birth is required",
                  validate: (value) => {
                    const selectedDate = new Date(value);
                    const currentDate = new Date();
                    const age =
                      currentDate.getFullYear() - selectedDate.getFullYear();
                    return age >= 18 || "You must be at least 18 years old";
                  },
                })}
              />
              {errors.dateOfBirth && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.date_of_birth.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className={`${styles.formGroup}`}>
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className={styles.fromControl}
                {...register("address", {
                  required: "Address is required",
                })}
              />
              {errors.address && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className={`${styles.formGroup}`}>
              <label>Profile Image</label>
              <input
                type="file"
                accept="image/*"
                className={styles.fromControl}
                onChange={handleImageChange} // Capture file input
              />
              {errors.image && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {errors.image.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <button className={styles.submit} type="submit">
          Sign Up
        </button>
        <div className="text-center mb-3 mt-3">
          <p>
            Already have an account? <Link href="/Login">Login</Link>
          </p>
        </div>
        {/* <div className={styles.or}>
          <div className={styles.or_div}></div>
          <span>Or</span>
          <div className={styles.or_div}></div>
        </div>
        <div className={styles.social_login}>
          <button>
            <Image
              src="/Images/facebooklogo 1.png"
              width={30}
              height={30}
              alt="Facebook"
            />
          </button>
          <button>
            <Image
              src="/Images/image 36.png"
              width={30}
              height={30}
              alt="Google"
            />
          </button>
          <button>
            <Image
              src="/Images/apple.png"
              width={30}
              height={30}
              alt="Apple"
            />
          </button>
        </div> */}
      </form>
    </div>
  );
}

export default SignUpForm;
