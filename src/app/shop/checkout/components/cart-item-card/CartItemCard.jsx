"use client";
import React, { useState } from "react";
import styles from "./cartItemCard.module.css";
import { FaClosedCaptioning } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
const CartItemCard = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity ?? 1);
  return (
    <div key={item?.id} className={styles?.cart_item}>
      <img src={item?.item_image} width="140px" height="150px" alt="" />
      <div>
        <h6>{item?.item_name}</h6>
        <p>Size : {item?.item_size}</p>
        <div className={styles?.card_footer}>
          <div>
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <h6>{item?.price}</h6>
        </div>
      </div>
      <button className={styles?.remove_item}>
        <IoClose />
      </button>
    </div>
  );
};

export default CartItemCard;
