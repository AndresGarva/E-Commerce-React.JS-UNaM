import './Navbar.css'
import { Link } from 'react-router-dom';
//Importamos link desde react-router-dom para indicarle al Carrit que es un boton y que tenga su ruta correspondiente
import { dataContext } from '../Context/DataContext';
import { useContext, useState } from 'react';
import logo from '../Navbar/imag/logo.png';



const Navbar = () =>{

    const { cart } = useContext(dataContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const totalItemsInCart = cart.reduce((acc, product) => acc + product.quantity, 0);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    return (
        <div className="nav-conteiner">
            <nav className="navbar">
              <div className={`navbar-left ${isMenuOpen ? "open" : ""}`}>
                <Link className='Home' to={"/"}><img src={logo} alt='Misiotronica Logo' className='navbar-logo'></img></Link>
                
                <Link className='About' to={"/about"}> Sobre Mi</Link>
                <Link className='Contact' to={"/contact"}> Contacto</Link>
                

              </div>
              <div className='nav_toggle' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
    
                <Link className="Carrito" to={"/cart"}>🛒
                {totalItemsInCart > 0 && (
                    <span className="cart-items-total">{totalItemsInCart}</span>)}
                </Link>
            </nav>
        </div>        
    );
};

export default Navbar;




