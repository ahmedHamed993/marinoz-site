"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Rating from "@/components/rating/Rating";
import { useParams } from "next/navigation";
import {gql, useQuery} from "@apollo/client";
import LoadingCard from "@/components/LoadingCard/LoadingCard";

const GET_PRODUCT_DETAILS = gql`
query MyQuery($id: bigint = "") {
  products_by_pk(id: $id) {
    color_variants
    description
    discount
    id
    images
    material
    name
    price
    size
    updated_at
  }
}
`
const ShopItemDetails = () => {
  const {id} = useParams();
  const {data, loading, error} = useQuery(GET_PRODUCT_DETAILS,{
    variables:{
      id:id,
    }
  })
  const product = data?.products_by_pk;
  console.log("product",product)
  const [activeColor, setActiveColor] = useState(product?.color_variants?.[0]?.split(",")[0] || null);
  const [currentImage, setCurrentImage] = useState();
  return loading ? <LoadingCard /> : (
    <div className="container">
      <div className={styles.item_details}>
        <div className={styles?.images}>
          <div className={`${styles?.images_column} hide-scrollbar`}>
            {product?.images?.map((img) => (
              <img
                onClick={() => setCurrentImage(img)}
                src={`${process.env.NEXT_PUBLIC_IMAGE_PRE_URL + img}`}
                width="64px"
                height="64px"
              />
            ))}
          </div>
          <div className={styles?.image_preview}>
            <img src={currentImage ?  process.env.NEXT_PUBLIC_IMAGE_PRE_URL + currentImage : process.env.NEXT_PUBLIC_IMAGE_PRE_URL + product?.images[0]} />
          </div>
        </div>
        <div className={styles?.item_content} style={{width:'100%'}}>
          <div className={styles?.item_content_heading}>
            <h3>{product?.name}</h3>
            <h4>${product.price}</h4>
          </div>
          <div style={{display:"flex",gap:"12px"}}>
            {product?.color_variants?.[0]?.split(",").map(color => <div style={{width:"32px", height:"32px", borderRadius:"50%", backgroundColor:color, outline:"3px solid #dddddd00", outlineColor:activeColor == color ? "#000":"#fff", padding:"1rem"}} onClick={()=>setActiveColor(color)} />)}
          </div>
          <p>{product.description}</p>
          <select>
            {/* <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option> */}
            {product?.size?.[0]?.split(",")?.map(sz => <option value={sz}>{sz}</option>)}
          </select>
          <button className={styles.checkout_btn}>Go Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShopItemDetails;

const item = {
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlINTOEv2FBkFrWYv-0Ky3gwjBi-lXHzR8ZmMUP4n6gYLrcRbr6FspMs&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXncDgArDejTrgnkCP1_h0KosxOqV-buYrb--OVc&usqp=CAE&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlINTOEv2FBkFrWYv-0Ky3gwjBi-lXHzR8ZmMUP4n6gYLrcRbr6FspMs&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXncDgArDejTrgnkCP1_h0KosxOqV-buYrb--OVc&usqp=CAE&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlINTOEv2FBkFrWYv-0Ky3gwjBi-lXHzR8ZmMUP4n6gYLrcRbr6FspMs&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXncDgArDejTrgnkCP1_h0KosxOqV-buYrb--OVc&usqp=CAE&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlINTOEv2FBkFrWYv-0Ky3gwjBi-lXHzR8ZmMUP4n6gYLrcRbr6FspMs&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXncDgArDejTrgnkCP1_h0KosxOqV-buYrb--OVc&usqp=CAE&s",
  ],
  name: "One Life tshirt",
  price: "260",
  rate: 3.5,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
};
