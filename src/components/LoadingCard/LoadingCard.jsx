import React from "react";
import styles from "./LoadingCard.module.css";
import Logo from "../Assets/Images/Marinoz logo and branding colors-03.png";
import Image from "next/image";

const LoadingCard = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <Image src={Logo} alt="Logo" className={styles.logoImage} />
        </div>
        <div className={styles.text}>Loading, please wait...</div>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
};

export default LoadingCard;
