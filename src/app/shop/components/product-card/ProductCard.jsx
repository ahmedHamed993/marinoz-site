import React from "react";
import styles from "./productCard.module.css";
import Link from "next/link";
const ProductCard = ({ product }) => {
  return (
    <div className={styles.product_card}>
      <img src={process.env.NEXT_PUBLIC_IMAGE_PRE_URL + product.images[0]} />
      <div className={styles.product_info}>
        <Link href={`/shop/${product.id}`}>{product.name}</Link>
        <p>
          {product.material || ""}
        </p>
        <h6>{product.price}</h6>
      </div>
    </div>
  );
};

export default ProductCard;
