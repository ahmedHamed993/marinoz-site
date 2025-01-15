import React from "react";
import CharterCheckoutNotes from "./CharterCheckoutNotes";
import CharterCheckoutForm from "./CharterCheckoutForm";

const CharterCheckout = ({ price, charterId }) => {
  return (
    <div style={{ margin: "32px 0" }}>
      <CharterCheckoutForm price={price} />
      <CharterCheckoutNotes />
    </div>
  );
};

export default CharterCheckout;
