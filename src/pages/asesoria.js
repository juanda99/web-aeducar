import React from 'react'
import CustomMap from '../components/CustomMap'
import SearchAsesor from '../components/SearchAsesor'


export default function Asesoria({ }) {
  const position = [51.505, -0.09]
  return (
    <div>
      <h1>Asesoría</h1>
      <p>Los profesores y el gestor de la plataforma educativa Aeducar, disponen de un servicio de asesoría sobre el uso de la herramienta.</p>
      <p>Selecciona tu centro educativo para ver los datos de contacto de tu asesor: </p>
      <SearchAsesor />

      <p>Para los gestores de Aeducar, la forma habitual de resolución de consultas e incidencias es el envío de un ticket de soporte mediante la <a href="https://soportearagon.catedu.es/">plataforma de
      soporte de Catedu</a>.</p>

      <p>Consulta en el mapa los datos de tu centro de profesorado.</p>
      <CustomMap center={position} zoom={8} markerText={"Hello, this is a marker"} />
    </div>

  );
}
