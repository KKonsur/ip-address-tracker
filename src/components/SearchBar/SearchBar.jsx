import React, { useState } from 'react'
import styles from './SearchBar.module.scss'
import iconArrow from '../../assets/images/icon-arrow.svg'

const SearchBar = ({ onTrackerData }) => {
   const [ipAddress, setIpAddress] = useState('')

   const formSubmitHandler = (e) => {
      e.preventDefault()
      onTrackerData(ipAddress)
      setIpAddress('')
   }

   const ipAddressChangeHandler = (e) => {
      setIpAddress(e.target.value)
   }

   return (
      <form onSubmit={formSubmitHandler} className={styles['search-bar']}>
         <input
            onChange={ipAddressChangeHandler}
            className={styles['ip-input']}
            type='text'
            placeholder='Search for any IP address or domain'
            value={ipAddress}
         />
         <button className={styles.submit} type='submit' aria-label='Submit'>
            <img src={iconArrow} alt='' />
         </button>
      </form>
   )
}

export default SearchBar
