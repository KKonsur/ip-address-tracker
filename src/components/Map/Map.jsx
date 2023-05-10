import React from 'react'
import 'leaflet/dist/leaflet.css'
import LocationMarker from './LocationMarker'
import { MapContainer, TileLayer } from 'react-leaflet'
import './Map.scss'

const Map = ({ position }) => {
   return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
         />
         <LocationMarker position={position} />
      </MapContainer>
   )
}

export default Map
