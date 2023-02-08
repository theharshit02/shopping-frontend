import React, { useEffect, useState } from 'react'
import styles from './MainBar.module.css'
import GridViewIcon from '@mui/icons-material/GridView';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import {showall} from '../api/api'
import GridProduct from '../GridProduct/GridProduct';
import ListProduct from '../ListProduct/ListProduct';

const MainBar = () => {
  const [data, setdata] = useState([])
  const [view, setview] = useState("grid")

  useEffect(()=>{
    async function fetch(){
      const result = await showall()
      setdata(result.data)
    }
    fetch()
  },[])

  return (
    <div className={styles.mainbarContainer}>
      <div className={styles.sorting}>
        <button onClick={()=>setview("grid")} className={view==="grid"?`${styles.viewSelect}`:`${styles.view}`}> <GridViewIcon/> </button>
        <button onClick={()=>setview("list")} className={view==="list"?`${styles.viewSelect}`:`${styles.view}`}> <ViewStreamIcon/> </button>
        <p>{data.length} products found</p>
        <div className={styles.line}></div>
        <p>Sort by</p>
        <select className={styles.options} name="" id="">
          <option value="Price (Lowest)">Price (Lowest)</option>
          <option value="Price (Highest)">Price (Highest)</option>
          <option value="Name (A-Z)">Name (A-Z)</option>
          <option value="Name (Z-A)">Name (Z-A)</option>
        </select>
      </div>

      {view === "grid"?
        <div className={styles.gridproducts}>
          {data.map((items)=>(
            <GridProduct data={items}/>
          ))}
        </div>
      :
        <div className={styles.listproducts}>
          {data.map((items)=>(
            <ListProduct data={items}/>
          ))}
        </div>
      }

    </div>
  )
}

export default MainBar
