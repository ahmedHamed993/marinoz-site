"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import SignUpForm from "@/components/Form/SignUpForm";

function SignUp() {
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
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
