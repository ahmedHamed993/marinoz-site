import React from "react";
import styles from "./charterRecreation.module.css";
const CharterRecreation = ({ charter }) => {
  return (
    <div className={styles.creations}>
      <div>
        {charter.recreations?.map((item) => (
          <div key={item.id}>
            <img src={item.img} width="32px" height="32px" alt="" />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharterRecreation;
