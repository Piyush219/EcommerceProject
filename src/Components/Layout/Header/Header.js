
import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {

  const cartLength = props.cartNumber.length

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
            <button className={styles.cartBtn} onClick={props.showCartItem}><li>Cart <span>{cartLength}</span></li></button>
          </ul>
          
        </div>
        <h1>The Generics</h1>
      </div>
  );
};

export default Header;
