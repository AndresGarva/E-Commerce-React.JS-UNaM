import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartElements = () =>{
    const { cart, setCart } = useContext(dataContext);

    const removeProduct = (productId) => {
        // Filtrar el producto del carrito según su id
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
      };


      const incrementQuantity = (productId) => {
        // Incrementar la cantidad del producto en el carrito según su id
        const updatedCart = cart.map((product) =>
          product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        );
        setCart(updatedCart);
      };
    
      const decrementQuantity = (productId) => {
        // Decrementar la cantidad del producto en el carrito según su id
        const updatedCart = cart.map((product) =>
          product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
        );
        setCart(updatedCart.filter((product) => product.quantity > 0));
      };



    return cart.map((product) =>{
        const productPrice = product.price.toLocaleString();
        return(
            /* Aca voy a recorrer lo que sea que este en el carrito */
            
            <div className='cartContent' key={product.id}>
                <img src={product.img} alt='product-card' />
                <h3 className='name'>{product.name}</h3>
                <h4 className='price'>{productPrice}$</h4>
                <div className="quantityControls">
                    <button onClick={() => decrementQuantity(product.id)}>-</button>
                        <span>{product.quantity}</span>
                    <button onClick={() => incrementQuantity(product.id)}>+</button>
                </div>
                <div className="quantityDelete">
                    <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>
            </div>
        );
    });
};

export default CartElements;