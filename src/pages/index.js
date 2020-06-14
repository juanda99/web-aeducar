import React from 'react';
import SearchSchool from '../components/SearchSchool'
import logo from '../images/logo-aeducar.svg'


export default function Index({ data }) {
  return (
    <div>
      <img src={logo} style={{ width: 357, height: 40 }} />
      <h2>¿Qué es aeducar?</h2>
      <p>Es la plataforma de docencia online del Departamento de Educación, Cultura y Deporte del Gobierno de Aragón.
      Ha sido creada por docentes para toda la comunidad educativa.
        Pretende ser una herramienta segura que dote de continuidad a la docencia online en todas las etapas educativas.</p>

      <h2>Acceder a aeducar</h2>
      <SearchSchool />
    </div>
  );
}
