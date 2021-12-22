import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Merch from "./Components/Layout/Merch/Merch";
import Music from "./Components/Layout/Music/Music";

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
    <div>
      
      <Header showCartItem={CartItems}/>
      {cartItems && <Cart Close = {cartItemsClose}/>}
      <Music/>
      <Merch/>
      <button style={style}>See The Cart</button>
      
      <Footer/>
    </div>
  );
}

export default App;
