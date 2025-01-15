"use client";
import { useState } from "react";
import styles from "./charterCreationTenders.module.css";
import CharterRecreation from "../charter-recreation/CharterRecreation";
import CharterTenders from "../charter-tenders/CharterTenders";
const CharterCreationTenders = ({ charter }) => {
  const [activeTab, setActiveTab] = useState("recreation");
  return (
    <div className={styles.recreation_tenders}>
      <div className={styles.tabs}>
        <button
          onClick={() => setActiveTab("recreation")}
          className={activeTab === "recreation" ? styles.active : ""}
        >
          Recreation
        </button>
        <button
          onClick={() => setActiveTab("tenders")}
          className={activeTab === "tenders" ? styles.active : ""}
        >
          Tenders
        </button>
      </div>
      {activeTab === "recreation" && <CharterRecreation charter={charter} />}
      {activeTab === "tenders" && <CharterTenders tenders={charter?.tenders} />}
    </div>
  );
};

export default CharterCreationTenders;
