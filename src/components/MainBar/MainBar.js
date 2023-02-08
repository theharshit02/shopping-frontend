import React from 'react'
import styles from './MainBar.module.css'
import GridViewIcon from '@mui/icons-material/GridView';
import ViewStreamIcon from '@mui/icons-material/ViewStream';

const MainBar = () => {
  return (
    <div className={styles.mainbarContainer}>
      <div className={styles.sorting}>
        <button className={styles.view}> <GridViewIcon/> </button>
        <button className={styles.view}> <ViewStreamIcon/> </button>
        <p>22 products found</p>
        <div className={styles.line}></div>
        <p>Sort by</p>
        <select className={styles.options} name="" id="">
          <option value="Price (Lowest)">Price (Lowest)</option>
          <option value="Price (Highest)">Price (Highest)</option>
          <option value="Name (A-Z)">Name (A-Z)</option>
          <option value="Name (Z-A)">Name (Z-A)</option>
        </select>
      </div>
    </div>
  )
}

export default MainBar
