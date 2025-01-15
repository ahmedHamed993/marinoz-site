import React from "react";
const styles = {
  fontSize: "32px",
  fontWeight: "700",
  color: "#034EA2",
  textAlign: "center",
  marginBottom: "64px",
  fontFamily: "Comfortaa",
};
const SectionTitle = ({ title }) => {
  return <h3 style={styles}>{title}</h3>;
};

export default SectionTitle;
