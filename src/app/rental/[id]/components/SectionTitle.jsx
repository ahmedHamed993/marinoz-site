import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h6
      style={{
        fontSize: "18px",
        color: "#034EA2",
        fontWeight: "400",
        marginBottom: "16px",
      }}
    >
      {title}
    </h6>
  );
};

export default SectionTitle;
