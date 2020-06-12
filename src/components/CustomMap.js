import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export default class CustomMap extends Component {
  render() {
    const { position, zoom } = this.props
    const cifes = [
      {
        name: "Centro Profesorado Ángel Sanz Briz",
        address: "Calle Atarazana, 11, 44003 Teruel",
        tel: "+34978618460",
        position: [40.3531126, -1.1152296]
      },
      {
        name: "Centro Profesorado María de Ávila",
        address: "Paseo Reyes de Aragón, 20, 50012 Zaragoza",
        tel: "+34976563646",
        position: [41.6255131, -0.9087582]
      },
      {
        name: "Centro Profesorado Juan de Lanuza",
        address: "Calle Buen Pastor, 4, 50003 Zaragoza",
        tel: "+34976395550",
        position: [41.6560102, -0.8844851]
      },

    ]
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
          {/* <>
            <Marker position={[40.3531126, -1.1152296]}>
              <Popup>
                <strong>Centro Profesorado Ángel Sanz Briz</strong><br />
                Calle Atarazana, 11, 44003 Teruel
            </Popup>
            </Marker>
            <Marker position={[41.6255131, -0.9087582]}>
              <Popup>
                <strong>Centro Profesorado María de Ávila</strong><br />
                Paseo Reyes de Aragón, 20, 50012 Zaragoza <br />
                <a href="tel:+34976563646">+34976563646</a>
              </Popup>
            </Marker>
            <Marker position={[41.6560102, -0.8844851]}>
              <Popup>
                <strong>Centro Profesorado Juan de Lanuza</strong><br />
                Calle Buen Pastor, 4, 50003 Zaragoza <br />
                <a href="tel:+34976395550">+34976395550</a>
              </Popup>
            </Marker>
          </> */}
        </Map >
      )
    }
    return null
  }
}