import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Store from "./Components/Pages/Store";
import HomePage from "./Components/Pages/HomePage";
import About from "./Components/Pages/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  

  const cartElements = [
    {
      title: "Colors",
  
      price: 100,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  
      quantity: 2,
    },
  
  ];



  const style = {
    'color': 'white',
    'backgroundColor': '#383e3e',
    'borderRadius': '5px',
    'border': 'none',
    'height': '34px',
    'width': '244px',
    'cursor': 'pointer',
    'alignItem': 'center',
    'marginLeft': '2%',
    'marginTop': '5%'
  }
  
  const[cartItems, setCartItems] = useState(false)
  const CartItems = () =>{
    setCartItems(true);
  }
  const cartItemsClose = () =>{
    setCartItems(false)
  }

  const [cart, setCart] = useState(cartElements)

  return (
    <>
      
      <Header showCartItem={CartItems} cartNumber = {cart}/>
      {cartItems && <Cart Close = {cartItemsClose} item={cart}/>}

      <Routes>
        <Route exact path="/" element={<Store cart = {cart} setCart = {setCart} />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/homepage" element={<HomePage/>} />
      </Routes>

      <button style={style}>See The Cart</button>
      
      <Footer/>
      
    </>
  );
}

export default App;
