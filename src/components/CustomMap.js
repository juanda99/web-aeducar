import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import ReactLeafletKml from 'react-leaflet-kml';
import kmlData from '../data/aragonKML.js'
import cifes from '../data/cifes.json'

const DOMParser = require('xmldom').DOMParser;

const parser = new DOMParser();
const kml = parser.parseFromString(kmlData, 'text/xml');

export default class CustomMap extends Component {
  render() {
    const { position, zoom } = this.props
    if (typeof window !== 'undefined') {
      return (
        <Map center={[41.6516859, -0.9300003]} zoom={8} style={{ height: '600px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {cifes.map((cife) => (
            <Marker position={cife.position}>
              <Popup>
                <strong>{cife.name}</strong><br />
                {cife.address} <br />
                <a href={`tel:${cife.tel}`}>{cife.tel}</a>
              </Popup>
            </Marker>
          ))}
          <ReactLeafletKml kml={kml} />
        </Map >
      )
    }
    return null
  }
}