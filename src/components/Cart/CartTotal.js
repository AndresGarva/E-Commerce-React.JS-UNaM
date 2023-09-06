import { useContext } from "react";
import { dataContext } from "../Context/DataContext";


const CartTotal = () => {
    const { cart, clearCart } = useContext(dataContext);

    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    const priceTotal = total.toLocaleString();
    const handlePay = () => {

        alert(`Pagando total: $${priceTotal}`);
        clearCart();
      };
    return (
    <div className='cartTotal'>
        <h3>Total a pagar: {total} $</h3> 
        <button onClick={handlePay}>Pagar</button>
    </div>
    );
};

export default CartTotal;

