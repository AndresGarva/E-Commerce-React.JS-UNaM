
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
  <div className="product-container">
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
  </div>
    </>
  );
};

export default Products;
