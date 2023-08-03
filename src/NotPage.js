import React from 'react';
import "./NotPage.css";
const NotPage = () => {
  return (
    <div className='not-found'>
      <div className='title'>
        <h1>404 - Página no encontrada</h1>

      </div>
      <div className="paragraph" > 
        <p>Le recomendamos que verifique la direccion de navegacion.</p>
      </div>

    </div>
  );
}

export default NotPage;