import React from "react";
import styles from "./homeShop.module.css";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
const HomeShop = () => {
  return (
    <div className="container">
      <div className={styles.shop}>
        <div className={styles.shop__header}>
          <h2>Shop</h2>
          <Link href="/shop">
            More <BsArrowRight size={32} />
          </Link>
        </div>
        <div className={styles.shop__categories}>
          {categories?.map((cat) => (
            <Link
              href={`/shop?category=${cat.id}`}
              key={cat.id}
              className={styles.shop__category}
              style={{
                backgroundImage: `linear-gradient(#00000060,#00000060),url(${cat.image}) `,
              }}
            >
              <span>{cat.name} </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeShop;

const categories = [
  {
    id: "1",
    name: "Boat Equipment",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7339PpV-gZxOwW1hpUhyKCe-PG3EAMlwrKz1AkA_Qe66pQs3kFK6LXCY5Eg_h5nkK0OZW&s",
  },
  {
    id: "2",
    name: "Sea Wear",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7339PpV-gZxOwW1hpUhyKCe-PG3EAMlwrKz1AkA_Qe66pQs3kFK6LXCY5Eg_h5nkK0OZW&s",
  },
  {
    id: "3",
    name: "Accessories",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7339PpV-gZxOwW1hpUhyKCe-PG3EAMlwrKz1AkA_Qe66pQs3kFK6LXCY5Eg_h5nkK0OZW&s",
  },
  {
    id: "4",
    name: "Water Sports Equipment",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7339PpV-gZxOwW1hpUhyKCe-PG3EAMlwrKz1AkA_Qe66pQs3kFK6LXCY5Eg_h5nkK0OZW&s",
  },
];
