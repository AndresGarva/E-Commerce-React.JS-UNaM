/* import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import './Carrito.css';
import Navbar from "../Navbar/Navbar";

const Carrito = () =>{
    const { cart } = useContext(dataContext);
    
    return cart.length > 0 ? (
        <>
        <Navbar />
        <CartElements />
        <CartTotal />
        </>
    ) : (
    
        <h2 className='cart-message-center'>El carrito esta vacío</h2>
    )
}

export default Carrito; */
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import './Carrito.css';
import Navbar from "../Navbar/Navbar";

const Carrito = () => {
    const { cart } = useContext(dataContext);

    return (
        <>
            <Navbar /> {/* Mueve el Navbar fuera de la condición ternaria */}
            {cart.length > 0 ? (
                <>
                    <CartElements />
                    <CartTotal />
                </>
            ) : (
                <h2 className='cart-message-center'>El carrito está vacío</h2>
            )}
        </>
    );
}

export default Carrito;
