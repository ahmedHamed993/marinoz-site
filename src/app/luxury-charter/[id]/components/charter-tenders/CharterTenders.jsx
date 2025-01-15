import React from "react";

const CharterTenders = ({ tenders }) => {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {tenders.map((tender, index) => (
        <li key={index} style={{ color: "#333333" }}>
          {tender}
        </li>
      ))}
    </ul>
  );
};

export default CharterTenders;
