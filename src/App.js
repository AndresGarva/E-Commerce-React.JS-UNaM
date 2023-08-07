import Home from './components/Home/Home';
//Importamos el componente Home desde la carpeta Home
import Carrito from './components/Cart/Carrito';
//Importamos el componente Carrito desde la carpeta Carrito
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DataProvider from './components/Context/DataContext';
import About from './components/About/About';
import Contact from './components/About/Contact'
import NotPage from './NotPage';
//import Footer from './components/Footer/Footer';
//Importamos desde react-router-dom el BrowserRouter, Routes, Route para establecer correspondientemente las rutas

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Se utiliza path para definir el nombre que va a tener la ruta en la barra de navegacion */}
          <Route path="/cart" element={ <Carrito />} />
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={ <NotPage />}/>
          
        </Routes>    
      </BrowserRouter>
    </DataProvider>
  )
  
}

export default App;
