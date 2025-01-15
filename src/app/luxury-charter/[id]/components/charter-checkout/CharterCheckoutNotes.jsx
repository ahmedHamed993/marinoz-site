import React from "react";
import styles from "./charterCheckoutNotes.module.css";
const CharterCheckoutNotes = () => {
  return (
    <div className={styles.notes}>
      <h6>Please Note & Additional Info</h6>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharterCheckoutNotes;

const notes = [
  "Lorem ipsum dolor sit amet, consectetur ",
  "Lorem ipsum dolor sit amet, consectetur ",
  "Lorem ipsum dolor sit amet, consectetur ",
  "Lorem ipsum dolor sit amet, consectetur ",
  "Lorem ipsum dolor sit amet, consectetur ",
];
