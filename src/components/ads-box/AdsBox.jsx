import React from "react";

const AdsBox = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${ad.image}) no-repeat center center`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: "2rem",
      }}
    >
      <h6
        style={{
          color: "#fff",
          fontSize: "29px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {ad.name}
      </h6>
    </div>
  );
};

export default AdsBox;

const ad = {
  image:
    "https://images.unsplash.com/photo-1484507175567-a114f764f78b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25vcmtsaW5nfGVufDB8fDB8fHww1",
  name: "Ads",
};
