"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./Careers.module.css";
import Image from "next/image";
import ApplyForm from "./components/apply-form/ApplyForm";

const CareerCard = () => {
  const [showApplyForm, setShowApplyForm] = useState(false);
  return (
    <div className={styles.CareerCard}>
      <h2>Accountant</h2>
      <h3>Job Description</h3>
      <p>
        Experience needed between 1 year up to 3 years. Full time. Available
        accommodation.
      </p>
      <div className={styles.CareerCardLocation}>
        <h4>
          Location <span>Hurghada</span>
        </h4>
        <h4>
          Deadline <span> 26/07/2019</span>
        </h4>
      </div>
      <span> 15 hours ago</span>
      <button onClick={ ()=>setShowApplyForm(true) }>Apply</button>
      <ApplyForm career={career} open={showApplyForm} setOpen={setShowApplyForm} />
    </div>
  );
};
export default CareerCard;

const career = {
  title:"Accontant",
  description:"Experience needed between 1 year up to 3 years. Full time. Available accommodation.",
  location:"Hurgada",
  deadline:"26/07/2019",
  date:"15 hours ago"
}
