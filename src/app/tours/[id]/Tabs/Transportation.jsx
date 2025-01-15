"use client";
import React, { useState } from "react";
import styles from "../../tours.module.css";
import Image from "next/image";
import Img from "../../../../components/Assets/Images/Group 1000002629.png";

export default function Transportation({ tour }) {
  return (
    <div>
      <div className={styles.OverviewCard}>
        <div className="mt-3 mb-3">
          <h2>{tour?.name}</h2>
          <span>{tour?.yacht?.adults} guests / {tour?.availabilities?.length && tour?.availabilities?.[0]?.program_days} days </span>
        </div>
        {/* gsgd */}
      </div>
    </div>
  );
}
