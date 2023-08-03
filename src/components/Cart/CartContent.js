import Navbar from "../Navbar/Navbar";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

const CartContent = () => {
  return ( 
    <>
        <CartElements />
        <CartTotal />
    </> 
  );
};
export default CartContent;