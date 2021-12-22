
import React from "react";
import styles from "./Header.module.css";
import Cart from "../../Cart/Cart";


const Header = (props) => {

  

  return (
      <div className={styles.headBody}>
        <div className={styles.innerHeader}>
          <div className={styles.logoContainer}>
            <span>EcomStore</span>
          </div>
          <ul className={styles.navigation}>
            <a href="#"><li>HOME</li></a>
            <a href="#"><li>STORE</li></a>
            <a href="#"><li>ABOUT</li></a>
            <button className={styles.cartBtn} onClick={props.showCartItem}><li>Cart <span>3</span></li></button>
          </ul>
          
        </div>
        <h1>The Generics</h1>
      </div>
  );
};

export default Header;
