import React from "react";
import styles from "./charterGallery.module.css";
import GalleryImage from "./GalleryImage";
const YachtGallery = () => {
  return (
    <div className={styles.gallery}>
      {images.map((img, index) => (
        <GalleryImage img={img} key={index} />
      ))}
    </div>
  );
};

export default YachtGallery;
const images = [
  "https://images.unsplash.com/photo-1562281302-809108fd533c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8eWFjaHR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHlhY2h0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHlhY2h0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1562281302-809108fd533c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8eWFjaHR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHlhY2h0fGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHlhY2h0fGVufDB8fDB8fHww",
];
