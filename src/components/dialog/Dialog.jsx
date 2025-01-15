import React from "react";

const Dialog = ({ open, setOpen, children }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "#000000aa",
        display: open ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        zIndex:"999",
      }}
    >
      <button
        onClick={() => setOpen(false)}
        style={{
          outline: "none",
          border: "none",
          backgroundColor: "transparent",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "-1",
        }}
      ></button>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "32px",
          overflowY:"auto",
          maxHeight:"100vh",
          // minWidth:"300px"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;
