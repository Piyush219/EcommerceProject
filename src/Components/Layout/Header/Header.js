
import React, { useContext } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { Cart } from "../../StoreContext/CartContext";

const Header = (props) => {

  const {cart} = useContext(Cart)

  return (
      <div className={styles.headBody}>
        <div className={styles.innerHeader}>
          <div className={styles.logoContainer}>
            <span>EcomStore</span>
          </div>
          <ul className={styles.navigation}>
            <a href="/homepage"><li>HOME</li></a>
            <Link to="/"><li>STORE</li></Link>
            <Link to="/about"><li>ABOUT</li></Link>
            <button className={styles.cartBtn} onClick={props.showCartItem}><li>Cart <span>{cart.length}</span></li></button>
          </ul>
          
        </div>
        <h1>The Generics</h1>
      </div>
  );
};

export default Header;
