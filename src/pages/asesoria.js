import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import CustomMap from '../components/CustomMap'
import SearchAsesor from '../components/SearchAsesor'


export default function Asesoria({ }) {
  const position = [51.505, -0.09]
  return (
    <div>
      <h1>Asesoría</h1>
      <p>El gestor de aeducar de cada centro dispone de un servicio de asesoría sobre el uso de la plataforma aeducar.
      La forma habitual de resolución de consultas e incidencias es el envío de un ticket de soporte mediante la <a href="https://soportearagon.catedu.es/">plataforma de
      soporte de Catedu</a>. En el video siguiente te mostramos como iniciar una consulta:</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/i5_T2la123g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>Selecciona tu centro educativo para ver tu centro de profesores de referencia y la persona de contacto. </p>
      <SearchAsesor />
      <p>Consulta en el mapa los datos del centro de profesorado.</p>
      <CustomMap center={position} zoom={8} markerText={"Hello, this is a marker"} />
    </div>

  );
}
