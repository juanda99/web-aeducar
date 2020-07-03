import React from 'react';
import { Link } from 'gatsby'

export default function Footer() {
  return (
    <footer style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'black', justifyContent: 'space-between', alignItems: 'center  ' }}>
      <div>
        <Link to="/politica-privacidad" style={{ color: 'white', marginLeft: '10px' }}>Política de privacidad</Link>
      </div>
      <div></div>
      <p style={{ color: 'white', marginRight: '20px' }}>© Gobierno de Aragón. Todos los derechos reservados.</p>
    </footer >
  );
}





