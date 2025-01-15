"use client";

import React from "react";
import dynamic from "next/dynamic";
import styles from "./Careers.module.css";
import Image from "next/image";
import CareerCard from "./CereerCard";

const Careers = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.Careers}>
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Explore Careers</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit
              </p>
            </div>
            <div className="col-md-4">
              <CareerCard />
            </div>
            <div className="col-md-4">
              <CareerCard />
            </div>
            <div className="col-md-4">
              <CareerCard />
            </div>
            <div className="col-md-4">
              <CareerCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Careers;
