import { Icon } from 'leaflet'
import React, { useEffect } from 'react'
import iconImg from '../../assets/images/icon-location.svg'
import { Marker, useMap } from 'react-leaflet'

const LocationMarker = ({ position }) => {
   const markerPosition = position
   const map = useMap()

   useEffect(() => {
      map.flyTo(markerPosition, 13, {
         animate: true,
      })
   }, [map, markerPosition])

   const customIcon = new Icon({
      iconUrl: iconImg,
   })

   return <Marker position={markerPosition} icon={customIcon} />
}

export default LocationMarker
