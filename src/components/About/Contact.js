import React from 'react'
import "./About.css";
import Navbar from '../Navbar/Navbar';

function Contact() {
  return (
    <>
    <Navbar />
    <div className='conteiner'>
        <p className='parr'> Contactos
          <ul className='items-p'>
            <li>Teléfono: XXXXXXX235</li>
            <li>Correo: andres********@gmail.com</li>
            <li>Dirección Postal: 3300</li>
            <li>Fax: </li>
          </ul>
        </p>
    </div>
    </>
  )
}

export default Contact