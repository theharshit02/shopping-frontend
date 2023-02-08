import React from 'react'
import styles from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.filterContainer}>
        <input className={styles.search} placeholder='Search' type="text"/>
        <p className={styles.heading}>Category</p>
        <p className={styles.heading}>Company</p>
        <p className={styles.heading}>Colors</p>
        <p className={styles.heading}>Price</p>
        <div className={styles.freeShip}>
          <p>Free Shopping</p>
          <input type="checkbox" name="" id=""/>
        </div>        
        <button className={styles.clear}>Clear Filters</button>
      </div>
    </div>   
  )
}

export default SideBar
