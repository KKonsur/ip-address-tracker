import React, { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import ResultBox from './components/ResultBox/ResultBox'
import './style.scss'
import Map from './components/Map/Map'

export const App = () => {
   const [trackerData, setTrackerData] = useState({ ip: '-', location: '-', timezon: '-', position: [51.505, -0.09], isp: '-' })
   const trackerDataHandler = (ipAddress) => {
      fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Ygh5HzWPRlhpKozqTD1aNYSgVgQFg&ipAddress=${ipAddress}`)
         .then((response) => response.json())
         .then((data) => {
            setTrackerData({
               ip: data.ip,
               location: {
                  country: data.location.country,
                  region: data.location.region,
                  timezone: data.location.timezone,
               },
               position: [data.location.lat, data.location.lng],
               isp: data.isp,
            })
         })
         .catch(() => {
            alert('Wrong IP Address')
         })
   }

   return (
      <div className='app'>
         <header className='header'>
            <h1 className='heading'>IP Address Tracker</h1>
            <SearchBar onTrackerData={trackerDataHandler} />
            <ResultBox trackerData={trackerData} />
         </header>
         <Map position={trackerData.position} />
      </div>
   )
}

export default App
