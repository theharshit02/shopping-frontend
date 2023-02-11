import React, { useEffect, useState } from 'react'
import styles from './MainBar.module.css'
import GridViewIcon from '@mui/icons-material/GridView';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import {showall} from '../api/api'
import GridProduct from '../GridProduct/GridProduct';
import ListProduct from '../ListProduct/ListProduct';

const MainBar = (props) => {
  const [data, setdata] = useState([])
  const [view, setview] = useState("grid")
  const [sort, setsort] = useState("low")

  useEffect(()=>{
    async function fetch(){
      const result = await showall(props.queries, sort)
      setdata(result.data)
    }

    fetch()
    
  },[props.queries, sort])

  return (
    <div className={styles.mainbarContainer}>
      <div className={styles.sorting}>
        <button onClick={()=>setview("grid")} className={view==="grid"?`${styles.viewSelect}`:`${styles.view}`}> <GridViewIcon/> </button>
        <button onClick={()=>setview("list")} className={view==="list"?`${styles.viewSelect}`:`${styles.view}`}> <ViewStreamIcon/> </button>
        <p>{data.length} products found</p>
        <div className={styles.line}></div>
        <p>Sort by</p>
        <select className={styles.options} name="" id="" onChange={(e)=>setsort(e.target.value)}>
          <option value="low">Price (Lowest)</option>
          <option value="high">Price (Highest)</option>
          <option value="asc">Name (A-Z)</option>
          <option value="desc">Name (Z-A)</option>
        </select>
      </div>

      {view === "grid"? 
        data.length===0?
          <div className={styles.noProductsContainer}><p className={styles.noProducts}>!!! NO PRODUCTS FOUND !!!</p></div>
        :
          <div className={styles.gridproducts}>
            {data.map((items)=>(
              <GridProduct data={items}/>
            ))}
          </div>
      :
        data.length===0?
          <div className={styles.noProductsContainer}><p className={styles.noProducts}>!!! NO PRODUCTS FOUND !!!</p></div>
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
