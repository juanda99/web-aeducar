import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import CustomMap from '../components/CustomMap'


export default function Asesoria({ }) {
  const position = [51.505, -0.09]
  return (
    <div>
      <p>ñafj añdfj ñlka dfñadj fñladkf ñafkj ñadfjk </p>
      <CustomMap center={position} zoom={8} markerText={"Hello, this is a marker"} />
      <p>adfadfh aldjf aldfj aslfjhadfl </p>
    </div>

  );
}
