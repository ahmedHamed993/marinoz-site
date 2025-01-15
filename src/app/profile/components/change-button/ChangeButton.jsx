import React from "react";

const ChangeButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        border: "1px solid #023A78",
        borderRadius: "8px",
        outline: "none",
        backgroundColor: "transparent",
        padding: "8px 8px",
        color: "#023a78",
        textTransform: "capitalize",
        fontWeight: "500",
      }}
    >
      change button
    </button>
  );
};

export default ChangeButton;
