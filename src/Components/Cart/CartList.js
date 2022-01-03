import React from "react";
import styles from "./Cart.module.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Cart } from "../StoreContext/CartContext";
import { useContext } from "react";


const CartList = (props) => {
const {cart,setCart, userId, setUserId, price} = useContext(Cart)
  

  const styleBtn = {
    'marginLeft': '72%',
    'height': '40px',
    'marginTop' : '2%',
  }
  return (
    <section className={styles.cartBody}>
      <Button style={styleBtn} onClick={props.Close}>X</Button>
      <h2 className={styles.cartHeading}>CART</h2>
      <h4>Total Price: ${price.toFixed(2)}</h4>
      
      <Row>
        <Col xs="4">
          <span className={styles.headText}>Item</span>
          <hr />
        </Col>
        <Col xs="4">
          <span className={styles.headText}>Price</span>
          <hr/>
        </Col>
        <Col xs="4">
          <span className={styles.headText}>Quantity</span>
          <hr />
        </Col>
      </Row>
      {cart.map((items) => {
        return (
          <Container style={{ marginTop: "20px" }}>
            <Row>
              <Col xs="4">
                <Col xs="6">
                  <img className={styles.cartImages} src={items.imageUrl} alt={items.title}/>
                </Col>
                <Col xs='6' className={styles.cartTitle} xs="6">{items.title}</Col>
              </Col>

              <Col xs="4">${items.price}</Col>
              <Col xs="4">{items.quantity}</Col>
            </Row>
            
          </Container>
          
          // <ul className={styles.cartList}>
          //     <li><img className={styles.cartImages} src={items.imageUrl}/></li>
          //     <li className={styles.cartTitle}>{items.title}</li>
          //     <li className={styles.cartPrice}>{items.price}</li>
          //     <li className={styles.cartQuantity}>{items.quantity}</li>
          // </ul>
        );
      })}
    </section>
  );
};

export default CartList;
