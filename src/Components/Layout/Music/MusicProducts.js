import React from 'react';

import styles from './MusicProducts.module.css'


const productsArr = [
  {
    album: "Album 1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    album: "Album 2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    album: "Album 3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    album: "Album 4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const MusicProducts = () => {
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
                  <button className={styles.musicBtn}>ADD TO CART</button>

                </li>
              </ul>
          
        );
      })}
    </section>
  );
};

export default MusicProducts;
