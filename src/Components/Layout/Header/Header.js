
import React, { useContext } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { Cart } from "../../StoreContext/CartContext";
import './Navlink.css'

const Header = (props) => {

  const {cart} = useContext(Cart)

  return (
      <div className={styles.headBody}>
        <div className={styles.innerHeader}>
          <div className={styles.logoContainer}>
            <span>EcomStore</span>
          </div>
          <ul className={styles.navigation}>
            <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/homepage"><li>HOME</li></NavLink>
            <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/"><li>STORE</li></NavLink>
            <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/about"><li>ABOUT</li></NavLink>
            <button className={styles.cartBtn} onClick={props.showCartItem}><li>Cart <span>{cart.length}</span></li></button>
          </ul>
          
        </div>
        <h1>The Generics</h1>
      </div>
  );
};

export default Header;
