import React from "react";
import styles from "./Cart.module.css";
import { Container, Row, Col, Button } from "reactstrap";


const Cart = (props) => {

  const styleBtn = {
    'marginLeft': '72%',
    'height': '40px',
    'marginTop' : '2%',
  }
  return (
    <section className={styles.cartBody}>
      <Button style={styleBtn} onClick={props.Close}>X</Button>
      <h2 className={styles.cartHeading}>CART</h2>
      
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
      {props.item.map((items) => {
        return (
          <Container style={{ marginTop: "20px" }}>
            <Row>
              <Col xs="4">
                <Col xs="6">
                  <img className={styles.cartImages} src={items.imageUrl} />
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

export default Cart;
