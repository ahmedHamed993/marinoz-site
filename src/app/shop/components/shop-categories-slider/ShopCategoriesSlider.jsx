import React from "react";
import styles from "./shopCategoriesSlider.module.css";
import {gql, useQuery} from '@apollo/client'
import Drawer from "react-modern-drawer"
const GET_PRODUCT_CATEGORIES = gql`
query MyQuery {
  product_categories {
    id
    image
    category_en
  }
}
`
const ShopCategoriesSlider = () => {
  const {data,loading,error}=useQuery(GET_PRODUCT_CATEGORIES);
  console.log('data',data?.product_categories)
  return (
    <div className={styles.categories_slider}>
      <h2>Browse by Category</h2>
      <div className={`${styles.categories_wrapper} hide-scrollbar`}>
        {data?.product_categories?.map((cat) => (
          <button
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)),url(${process.env.NEXT_PUBLIC_IMAGE_PRE_URL+cat.image})`,
            }}
          >
            <span>{cat.category_en}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShopCategoriesSlider;

const categories = [
  {
    id: "1",
    name_en: "Water Sports Equipment",
    image:
      "https://images.unsplash.com/photo-1542246908-9757f6fa7eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdhdGVyJTIwZXF1aXBtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "2",
    name_en: "Boat Equipment",
    image:
      "https://images.unsplash.com/photo-1542246908-9757f6fa7eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdhdGVyJTIwZXF1aXBtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "3",
    name_en: "Accessories",
    image:
      "https://images.unsplash.com/photo-1542246908-9757f6fa7eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdhdGVyJTIwZXF1aXBtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "4",
    name_en: "Sea Water",
    image:
      "https://images.unsplash.com/photo-1542246908-9757f6fa7eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdhdGVyJTIwZXF1aXBtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "5",
    name_en: "Another categories",
    image:
      "https://images.unsplash.com/photo-1542246908-9757f6fa7eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdhdGVyJTIwZXF1aXBtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
  },
];
