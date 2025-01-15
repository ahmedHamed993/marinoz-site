import React from "react";
import styles from "./shopFilter.module.css";
import { gql, useQuery } from "@apollo/client";
const GET_PRODUCT_CATEGORIES = gql`
query MyQuery {
  product_categories {
    id
    image
    category_en
  }
}
`
const ShopFilters = () => {
  const {data,loading,error}=useQuery(GET_PRODUCT_CATEGORIES);
  return (
    <div className={styles.filters}>
      <div className={styles.categories_filters}>
        <h6>Category</h6>
        <div className={styles.categories_wrapper}>
          {data?.product_categories?.map((cat) => (
            <button key={cat?.id}>{cat?.category_en}</button>
          ))}
        </div>
      </div>
      <div className={styles.price_filters}>
        <h6>Price</h6>
        <div className={styles.prices_wrapper}>
          <div className={styles.price_check}>
            <input name="price-filters" type="radio" id="500-999" />
            <label htmlFor="500-999">500-999</label>
          </div>
          <div className={styles.price_check}>
            <input name="price-filters" type="radio" id="1000-1999" />
            <label htmlFor="1000-1999">1000-1999</label>
          </div>
          <div className={styles.price_check}>
            <input name="price-filters" type="radio" id="2000-4000" />
            <label htmlFor="2000-4000">2000-4000</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFilters;

const categories = [
  {
    id: 1,
    name_en: "Boat Equipment",
  },
  {
    id: 2,
    name_en: "Sea Water",
  },
  {
    id: 3,
    name_en: "Water Sports Equipment",
  },
];
