import Navbar from "../Navbar/Navbar";
//Se importa Navbar a Home para que este despues importe todos los componentes que esten dentro
import Banner from "../Banner/Banner"
import Products from "../Products/Products";
import Footer from "../Footer/Footer";


const Home = ()=> {
    return (
        <>
            <Navbar/>
            
            <Banner/>
            <div className='product-card-container'>
            <Products/>
            </div>

            <Footer />
            
        </>
    );
}


export default Home;