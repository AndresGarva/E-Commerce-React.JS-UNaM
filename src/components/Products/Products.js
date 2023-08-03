/* import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css";

const Products = () =>{
const { data, cart, setCart } = useContext(dataContext);

const buyProducts = (product) =>{
   
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        // Si ya está en el carrito, actualiza su cantidad sumándole 1
        const updatedCart = cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
      } else {
        // Si no está en el carrito, agrégalo con cantidad inicial de 1
        setCart([...cart, { ...product, quantity: 1 }]);
      }
}
    return ( 
        <div className='product-card-container'>

        {data.map((product)=> {
        const productPrice = product.price.toLocaleString();
        return(
            //le pasamos el evento onClick
            <div className='card' key={product.id}>
                <img src={product.img} alt='img-product.card' />
                <h3>{product.name}</h3>
                <h4>{productPrice}$</h4>
                <button onClick={() => buyProducts(product)}>Buy</button>
                
            </div>
            )
        })}
        </div>
    );
    
};

export default Products */

import React, { useContext, useState } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css";

const Products = () => {
  const { data, cart, setCart } = useContext(dataContext);
  /* Aqui se utiliza el useState para ocupar la funcion de la busqueda */
  const [searchTerm, setSearchTerm] = useState("");

  const buyProducts = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  /* Aca se realiza la funcion de filtrar el producto */
  const filteredData = data.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    {/* Aca se coloca el contenido del input para la busqueda */}
    <div className="search-bar-container">
        <input
          type="text"
          placeholder="Buscar producto..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
    <div className="product-card-container">
      {filteredData.map((product) => {
        const productPrice = product.price.toLocaleString();
        return (
          <div className="card" key={product.id}>
            <img src={product.img} alt="img-product.card" />
            <h3>{product.name}</h3>
            <h4>{productPrice}$</h4>
            <button onClick={() => buyProducts(product)}>Buy</button>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Products;
