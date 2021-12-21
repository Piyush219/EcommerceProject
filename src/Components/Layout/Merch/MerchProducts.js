import React from "react";
import styles from "./MerchProducts.module.css";

const merchArr = [
  {
    title: "T-Shirt",
    price: 19.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
  },

  {
    title: "Black and white Colors",
    price: 6.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
  },
];

const MerchProducts = () => {
  return (
    <section className={styles.merchSection}>
      {merchArr.map((items) => {
        return (
          <ul key={items.title} className={styles.merchContainer}>
            <h3>{items.title}</h3>
            <li className={styles.merchImage}>
              <img src={items.imageUrl} alt="Merchandise Pictures" />
            </li>

            <li className={styles.merchDetail}>
              <span>${items.price}</span>
              <button className={styles.merchBtn}>ADD TO CART</button>
            </li>
          </ul>
        );
      })}
    </section>
  );
};

export default MerchProducts;
