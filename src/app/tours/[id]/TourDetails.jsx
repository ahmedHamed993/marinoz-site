"use client";
import React, { useState } from "react";
import styles from "../tours.module.css";
import Image from "next/image";
import Img from "../../../components/Assets/Images/Group 1000002629.png";

export default function Details({ tour, Suites, Sports }) {
  const availabilities = Suites ? tour?.suite_availabilities : tour?.availabilities;
  return (
    <div>

      {Suites || Sports ? (
        ""
      ) : (
        <div className={styles.OverviewDis}>
          <h3>Duration</h3>
          <h4>
            <i className="far fa-calendar"></i>
            {availabilities?.length &&
              availabilities[0]?.from} -{" "}
            {availabilities?.length && tour?.availabilities[0]?.to}
          </h4>
          <h4>
            <i className="far fa-clock"></i>
            {availabilities?.length &&
              availabilities[0]?.program_days}{" "}
            days
          </h4>
        </div>
      )}
      <div className={styles.OverviewDis}>
        <h3>What is included & excluded</h3>
        <div className={styles.included}>
          <div>
            <h3>Included</h3>
            <ul>
              <li>
                {/* <i className="fa fa-check"></i> */}
                {availabilities?.length &&
                  availabilities[0].includes}
              </li>
            </ul>
          </div>
          <div>
            <h3>Excluded</h3>
            <ul className={styles.excluded}>
              <li>
                {/* <i className="fa fa-x"></i> */}
                {availabilities?.length &&
                  availabilities[0].excludes}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.OverviewDis}>
        <div className={styles.included}>
          <div>
            <h3>Language</h3>
            <ul>
              <li>English</li>
            </ul>
          </div>
          <div>
            <h3>Duration</h3>
            <ul>
              <li>
                {availabilities?.length &&
                  availabilities[0].program_days}{" "}
                Days
              </li>
            </ul>
          </div>
          <div>
            <h3>Number of people</h3>
            <ul>
              <li>
                {tour?.yacht?.adults &&
                  tour?.yacht?.adults}{" "}
                People
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.OverviewDis}>
        <h3>Cancellation Policy</h3>
        <h5>
          <i className="fa fa-x"></i>
          {availabilities[0]?.cancellation_policy}
        </h5>
      </div>
      {Suites || Sports ? (
        ""
      ) : (
        <div className={styles.OverviewDis}>
          <h3>Trip Itinerary</h3>
          <Image src={tour?.destination_image || Img} alt="Img" />
        </div>
      )}
      
      {Suites ? (
        <div className={styles.OverviewDis}>
          <h3>Meeting point address</h3>
          <div>{availabilities[0]?.note || "No Notes"}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
