import React from 'react'
import styles from './ResultItems.module.scss'

const ResultItem = ({ title, trackerData }) => {
   return (
      <div className={styles['result-item']}>
         <h3 className={styles.title}>{title}</h3>
         <h2 className={styles.data}>{trackerData === undefined || trackerData === 'undefined, undefined' ? '-' : trackerData}</h2>
      </div>
   )
}

export default ResultItem
