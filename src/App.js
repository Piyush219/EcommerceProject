import { useState } from "react";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Store from "./Components/Pages/Store";
import HomePage from "./Components/Pages/HomePage";
import About from "./Components/Pages/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CartContext from "./Components/StoreContext/CartContext";
import CartList from "./Components/Cart/CartList";

function App() {
  

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


  return (
    <CartContext>
      
      <Header showCartItem={CartItems} />
      {cartItems && <CartList Close = {cartItemsClose}/>}

      <Routes>
        <Route exact path="/" element={<Store/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/homepage" element={<HomePage/>} />
      </Routes>

      <button style={style}>See The Cart</button>
      
      <Footer/>
      
    </CartContext>
  );
}

export default App;
