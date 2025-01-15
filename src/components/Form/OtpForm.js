"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from "./page.module.css";
import Swal from "sweetalert2";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { verifyByOtp } from "@/actions/auth-actions/verifyByOtp";
import { fireToastAlert } from "@/helpers/fireToastAlert";
function OtpForm() {
  // const router = useRouter();
  const searchParams = useSearchParams();
  // const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm();
  // const [otp, setOtp] = useState(["", "", "", ""]);
  const [token, setToken] = useState("");

  useEffect(() => {
    //   // Extract token and OTP from the URL query parameters
    const queryToken = searchParams.get("token");
    //   const queryOtp = searchParams.get("otp");

    if (queryToken) setToken(queryToken);

    //   if (queryOtp) {
    //     const otpArray = queryOtp.split("");
    //     setOtp(otpArray);
    //     otpArray.forEach((digit, index) => setValue(`otp[${index}]`, digit));
    //   }
  }, [searchParams]);

  // const onSubmit = async (data) => {
  //   const otpValue = otp.join(""); // Combine OTP digits into a string
  //   const apiKey = "0TWpNy02pUvLx6NL27FP8S2uUvvt4Lx23rWfH2f3pxlgfKUnHoPic9U8NDqRgV2n";
  //   const apiUrl = "https://app-marinoz.addictaco.website/api/v1/clients/auth/otp/verify";
  //   const expectedOtpLength = 4;

  //   console.log("Entered OTP:", otpValue); // Debugging line

  //   if (otpValue.length !== expectedOtpLength) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Error",
  //       text: "Please enter all 4 digits of the OTP.",
  //     });
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       apiUrl,
  //       { otp: parseInt(otpValue, 10) }, // Send OTP as a number
  //       {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           "api-key": apiKey,
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     Swal.fire({
  //       icon: "success",
  //       title: "Success",
  //       text: response.data.message || "OTP Verified Successfully!",
  //     });

  //     router.push("/Login"); // Navigate to the login page
  //   } catch (error) {
  //     console.error("API call failed:", error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Error",
  //       text: error.response?.data?.message || "Failed to verify OTP. Please try again.",
  //     });
  //   }
  // };

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const otp = Array(4).fill("");

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      // Only allow numeric input
      const currentOtp = getValues("otp") || [];
      currentOtp[index] = value;
      setValue("otp", currentOtp);
      if (value && index < otp.length - 1) {
        // Focus next input
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleBackspace = (index) => {
    const currentOtp = getValues("otp") || [];
    if (!currentOtp[index] && index > 0) {
      // Focus previous input
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  // const onSubmit = async (data) => {
  //   const apiKey =
  //     "0TWpNy02pUvLx6NL27FP8S2uUvvt4Lx23rWfH2f3pxlgfKUnHoPic9U8NDqRgV2n";
  //   const apiUrl =
  //     "https://app-marinoz.addictaco.website/api/v1/clients/auth/otp/verify";
  //   const otpValue = (data.otp || []).join(""); // Combine OTP fields into a single string
  //   try {
  //     const response = await axios.post(
  //       apiUrl, // Replace with your endpoint
  //       { otp: otpValue },
  //       {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           "api-key": apiKey,
  //           Authorization: `Bearer ${token}`,
  //         },
  //       },
  //     );

  //     if (response.status === 200) {
  //       router.push("/Login"); // Replace with your target page
  //     }
  //   } catch (error) {
  //     console.error("OTP verification failed", error);
  //     alert("Failed to verify OTP. Please try again.");
  //   }
  // };

  // const handleOtpChange = (index, value) => {
  //   if (isNaN(value)) return; // Only allow numbers
  //   const newOtp = [...otp];
  //   newOtp[index] = value;
  //   setOtp(newOtp);
  //   setValue(`otp[${index}]`, value); // Sync with react-hook-form

  //   // Auto-focus next field
  //   if (value && index < otp.length - 1) {
  //     const nextInput = document.getElementById(`otp-input-${index + 1}`);
  //     nextInput?.focus();
  //   }
  // };

  // const handleBackspace = (index, value) => {
  //   if (!value && index > 0) {
  //     const prevInput = document.getElementById(`otp-input-${index - 1}`);
  //     prevInput?.focus();
  //   }
  // };

  const onSubmit = async (data) => {
    verifyByOtp(
      data.otp.join(""),
      () => {
        router.push("/");
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
          src={"/Images/Marinoz logo and branding colors-03.png"}
          className={styles.LoginImage}
          width={100}
          height={100}
          alt="Logo"
        />
      </div>
      <div className="mb-3 text-center mt-3 w-100">
        <h1>Verify OTP</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <div className={styles.otpContainer}>
            {otp.map((_, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                className={styles.otpInput}
                {...register(`otp.${index}`, {
                  required: "OTP is required",
                })}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace") {
                    handleBackspace(index);
                  }
                }}
              />
            ))}
          </div>
          {errors.otp && (
            <p style={{ color: "red", fontSize: "12px" }}>
              Please fill all OTP fields
            </p>
          )}
        </div>
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default OtpForm;
