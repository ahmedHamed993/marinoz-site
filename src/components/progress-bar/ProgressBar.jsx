import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "120px",
        height: "10px",
        borderRadius: "4px",
        backgroundColor: "#ddd",
        overflow: "hidden",
      }}
    >
      <div />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: `${percentage}%`,
          background: "#FFC633",
        }}
      />
    </div>
  );
};

export default ProgressBar;
