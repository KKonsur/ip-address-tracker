import React from 'react'
import styles from './ResultBox.module.scss'
import ResultItem from './ResultItem'

const ResultBox = ({ trackerData }) => {
   return (
      <div className={styles['result-box']}>
         <ResultItem title='Ip address' trackerData={trackerData.ip} />
         <ResultItem title='Location' trackerData={`${trackerData.location.country}, ${trackerData.location.region}`} />
         <ResultItem title='Timezone' trackerData={trackerData.location.timezone} />
         <ResultItem title='Isp' trackerData={trackerData.isp} />
      </div>
   )
}

export default ResultBox
