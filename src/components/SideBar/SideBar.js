import React, { useEffect, useState } from 'react'
import styles from './SideBar.module.css'
import {listCategories, listBrands, listColor} from '../api/api'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

const SideBar = () => {
  const [category, setcategory] = useState([])
  const [brands, setbrands] = useState([])
  const [colors, setcolors] = useState([])
  const [value, setvalue] = useState("")

  useEffect(()=>{
    async function fetch(){
      const result1 = await listCategories()
      const result2 = await listBrands()
      const result3 = await listColor()
      setcategory(result1.data)
      setbrands(result2.data)
      setcolors(result3.data)
    }

    fetch()
  },[])

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.filterContainer}>
        <input className={styles.search} placeholder='Search' type="text"/>

        <div>
          <p className={styles.heading}>Category</p>
          <div>
            <p className={styles.list}>All</p>
            {
              category.map((items)=>(
                <p className={styles.list}>{items.category}</p>
              ))
            }
          </div>
        </div>
        
        <div>
          <p className={styles.heading}>Brand</p>
          <div>
            <select className={styles.dropdown} name="" id="">
              <option value="All">All</option>
              {
                brands.map((items)=>(
                  <option value={items.brand}>{items.brand}</option>
                ))
              }
            </select>
          </div>
        </div>
        
        
        <div>
          <p className={styles.heading}>Colors</p>
          <div className={styles.colors}>
              <div className={styles.colorSlct}>All</div>
              {colors.map((items)=>(
                <div className={styles.colorSlct} style={{background: `${items.color}`}}></div>
              ))}
          </div>
        </div>
        

        <div className={styles.price}>
          <p className={styles.heading}>Price</p>
          <p className={styles.value}>${value}</p>
          <Slider 
            min={100}
            max={2000}
            step={100}
            onChange={(e)=>setvalue(e)}
            trackStyle={
              {height: 10}
            }
            railStyle={
              {height: 10}
            }
            handleStyle={
              {width: 20,
              height: 20}
            }
          />
        </div>
        

        <div className={styles.freeShip}>
          <p>Free Shopping</p>
          <input className={styles.checkbox} type="checkbox" name="" id=""/>
        </div>        
        <button className={styles.clear}>Clear Filters</button>
      </div>
    </div>   
  )
}

export default SideBar
