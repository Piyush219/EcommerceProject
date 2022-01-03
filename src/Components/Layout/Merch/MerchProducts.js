import React, {useContext}from "react";
import { Cart } from '../../StoreContext/CartContext';
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

  const {cart, setCart, userId,setUderId,price,setPrice} = useContext(Cart)

  function addItemHandler(product) {
    
      setCart((prevState)=> {
        return [...prevState, product]
      })
      setPrice(price+product.price)
  }

  const removeItemHandler = (items)=>{
    setCart(cart.filter((c) => c.title !==items.title))
    setPrice(price-items.price)
  }



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
              {cart.includes(items) ? (
                    <button className={styles.merchBtn} onClick={() => removeItemHandler(items)}
                    >Remove From Cart</button>
                  ): <button className={styles.merchBtn} onClick={() => addItemHandler(items)}
                  >ADD TO CART</button>}
            </li>
          </ul>
        );
      })}
    </section>
  );
};

export default MerchProducts;
