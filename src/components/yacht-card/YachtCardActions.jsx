"use client";
import React, { useState } from "react";
import styles from "./yachtCard.module.css";
// icons
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { GoShareAndroid } from "react-icons/go";
import FavouriteButton from "../favourite-button/FavouriteButton";
const YachtCardActions = ({ containerStyles = {} }) => {
  const [loved, setLoved] = useState(false);
  const copyURLToClipboard = async () => {
    try {
      const currentURL = window.location.href;
      await navigator.clipboard.writeText(currentURL);
    } catch (error) {
      console.error("Failed to copy URL: ", error);
    }
  };
  return (
    <div className={styles.card__actions} style={{ ...containerStyles }}>
      {/* <button
        onClick={(e) => {
          setLoved((prev) => !prev);
        }}
      >
        {loved ? <IoMdHeart color="tomato" /> : <IoIosHeartEmpty />}
      </button> */}
      {/* <button onClick={copyURLToClipboard}>{<GoShareAndroid />}</button> */}
      <FavouriteButton />
    </div>
  );
};

export default YachtCardActions;
