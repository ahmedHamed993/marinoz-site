import SearchBar from "@/components/navbar/SearchBar/SearchBar";
import Link from "next/link";
import React from "react";
import styles from "./homeHeroSlide.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
const HomeHeroSlide = ({ slide, index, slideTo }) => {
  return (
    <div
      className={styles.slide}
      style={{
        backgroundImage: `url('/Images/094cf84dcbacd08a5df9f8e921a88cef.jpeg')`,
        backgroundSize: "cover",
      }}
    >
    <div className={styles.slideLayout}>
      <div className={styles.slide_content}>
        <div className={styles.slide_text}>
          <h6 style={{ color: slide.color }}>DIVE INTO MARINE</h6>
          <p>
            <span>Be Our Guest: </span>
            <span>Your Perfect Events Awaits!</span>
          </p>
          <div className={styles.tabs_container}>
            {tabs.map((item, tabIndex) => (
              <button
                onClick={() => slideTo(tabIndex)}
                key={tabIndex}
                style={{
                  backgroundColor: tabIndex === index ? slide.color : "",
                  color: tabIndex === index ? "#fff" : "#fff",
                  marginLeft: slide.color === "#034EA2" ? "1rem" : "0"
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <SearchBar home={slide} />
        <Link
          href={
            slide.color === "#034EA2" 
              ? "/rental" 
              : slide.color === "#9E0059" 
                ? "/tours" 
                : "/events"
          }
          style={{
            backgroundColor: slide.color,
            marginLeft: "1rem"
          }}
          className={styles.discover_link}
        >
          Discover <FaArrowRightLong />
        </Link>
      </div>
    </div>
    </div>
  );
};

export default HomeHeroSlide;

const tabs = ["Rentals", "Tours", "Events"];
