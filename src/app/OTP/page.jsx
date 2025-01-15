"use client";
import LoginForm from "@/components/Form/LoginForm";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import OtpForm from "@/components/Form/OtpForm";

function Otp() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("sdgfs");
  };

  return (
    <>
      <div className={styles.login}>
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <OtpForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp;
