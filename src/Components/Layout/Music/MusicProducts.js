import React, { useContext } from 'react';
import { Cart } from '../../StoreContext/CartContext';
import axios from 'axios';

import styles from './MusicProducts.module.css'


const productsArr = [
  {
    album: "Album 1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },

  {
    album: "Album 2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },

  {
    album: "Album 3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },

  {
    album: "Album 4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const MusicProducts = () => {

  const {cart, setCart, userId, setUserId, price, setPrice} = useContext(Cart)
  

  function addItemHandler(product) {
    
      setCart([...cart, product])
      
      
      setPrice(price+product.price)
      
      console.log(`Id: ${userId}`)
      axios.post(`https://crudcrud.com/api/27949d8a177340c38605ce21b6db1ffa/cart${userId}`, product)
      .then((response) => {
        console.log(`Axios: ${response}`)
      }).catch((err) => {
        console.log(`err: ${err}`)
      })
  }

  const removeItemHandler = (items)=>{
    setCart(cart.filter((c) => c.album !==items.album))
    setPrice(price-items.price)
  }

  return (
    <section className={styles.musicSection}>
      {productsArr.map((items) => {
        return (
            
              <ul key={items.album} className={styles.musicContainer}>
                <h3>{items.album}</h3>
                <li className={styles.musicImage}>
                  <img src={items.imageUrl} alt='Music Pictures'/>
                </li>
                <li className={styles.musicDetail}>
                  <span>
                    {items.title} : 
                    ${items.price}
                  </span>
                  {cart.includes(items) ? (
                    <button className={styles.musicBtn} onClick={() => removeItemHandler(items)}
                    >Remove From Cart</button>
                  ): <button className={styles.musicBtn} onClick={() => addItemHandler(items)}
                  >ADD TO CART</button>}
                  
                </li>
              </ul>
              
        );
      })}
      {console.log(`props.cartMusic ${cart}`)}
    </section>
  );
};

export default MusicProducts;
