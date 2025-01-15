"use client";
const SubmitButton = ({ label }) => {
  return (
    <button
      type="submit"
      style={{
        backgroundColor: "#023A78",
        color: "#fff",
        width: "100%",
        borderRadius: "8px",
        outline: "none",
        border: "none",
        padding: "8px",
      }}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
