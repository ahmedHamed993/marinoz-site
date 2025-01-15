import React from "react";
import styles from "./yachtGallery.module.css";
const GalleryImage = ({ img }) => {
  return (
    <div className={styles.img_wrapper}>
      <img
        src={img}
        width={"100%"}
        height={"400"}
        style={{ objectFit: "cover" }}
      />
      <img
        className={styles.img_overlay}
        src={img}
        width={"100%"}
        height={"400"}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default GalleryImage;
