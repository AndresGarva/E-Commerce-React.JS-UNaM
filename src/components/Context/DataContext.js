import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) =>{
    //Creamos hocks
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        axios("data.json").then((res)=> setData(res.data));
    },[]);

    const clearCart = () => {
        setCart([]); // Limpia el carrito
    };

    return <dataContext.Provider value={{ data, cart, setCart, clearCart }}>{children}</dataContext.Provider>;

};

    
export default DataProvider;

