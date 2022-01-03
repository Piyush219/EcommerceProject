import React , {useState} from "react";
import { createContext } from "react";


export const Cart = createContext();

const CartContext = (props) => {

    const [cart, setCart] = useState([])
    const [userId, setUserId] = useState('')
    const [price, setPrice] = useState(0)
    return (
        <Cart.Provider value = {{cart, setCart, userId , setUserId, price, setPrice}}>
            {props.children}
        </Cart.Provider>
    )
}

export default CartContext;