"use client";
import React, { useRef } from "react";
import styles from "./resaleYachhtImageModel.module.css";

const ResaleYachtImageModel = () => {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position inside the element
    const y = e.clientY - rect.top; // Y position inside the element

    // Calculate rotation based on cursor position
    const rotateX = (y / rect.height - 0.5) * 70; // Adjust sensitivity
    const rotateY = (x / rect.width - 0.5) * -70; // Adjust sensitivity

    imageRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    // Reset rotation when the mouse leaves
    imageRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      className={styles.yacht_image_container}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img ref={imageRef} src={"/images/yacht-model.png"} alt="Yacht Model" />
    </div>
  );
};

export default ResaleYachtImageModel;
