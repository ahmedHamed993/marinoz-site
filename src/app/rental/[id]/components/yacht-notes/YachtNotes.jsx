import React from "react";
import styles from "./yachtNotes.module.css";
const YachtNotes = ({ note}) => {
  return note ? (
    <div className={styles.notes}>
      {/* <h6>Please Note & Additional Info</h6>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul> */}
      {note}
    </div>
  ): <></>
};

export default YachtNotes;
