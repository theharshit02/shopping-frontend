import React, { useEffect, useState } from 'react'
import styles from './SideBar.module.css'
import {listCategories, listBrands, listColor} from '../api/api'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

const SideBar = (props) => {
  const [category, setcategory] = useState([])
  const [brands, setbrands] = useState([])
  const [colors, setcolors] = useState([])
  const [value, setvalue] = useState(100)
  const [categorySelect, setcategorySelect] = useState("All")
  const [colorSelect, setcolorSelect] = useState("All")
  const [brandSelect, setbrandSelect] = useState("All")
  const [shipping, setshipping] = useState(false)
  const [search, setsearch] = useState("")

  function clearFilter(){
    setcategorySelect("All")
    setcolorSelect("All")
    setbrandSelect("All")
    setshipping(false)
    setsearch("")
    setvalue(100)

  }

  useEffect(()=>{
    function send(){
      const selectedValues = {
        category: categorySelect,
        color: colorSelect,
        brand: brandSelect,
        shipping: shipping,
        search: search,
        value: value
      }
      props.queries(selectedValues)
    }

    send()
    // eslint-disable-next-line
  },[categorySelect, colorSelect, brandSelect, shipping, search, value])
  
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
        <input className={styles.search} placeholder='Search' type="text" onChange={(e)=>setsearch(e.target.value)}/>

        <div>
          <p className={styles.heading}>Category</p>
          <div>
            <p onClick={(e)=>setcategorySelect(e.target.innerText)} style={categorySelect==="All"?{fontSize: "16px", color: "black", fontWeight: 600}:{}} className={styles.list}>All</p>
            {
              category.map((items)=>(
                <p onClick={(e)=>setcategorySelect(e.target.innerText)} style={categorySelect===items.category?{fontSize: "16px", color: "black", fontWeight: 600}:{}} className={styles.list}>{items.category}</p>
              ))
            }
          </div>
        </div>
        
        <div>
          <p className={styles.heading}>Brand</p>
          <div>
            <select className={styles.dropdown} name="" id="" onChange={(e)=>setbrandSelect(e.target.value)}>
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
              <div onClick={(e)=>setcolorSelect(e.target.id)} id="All" style={colorSelect==="All"?{fontSize: "16px", color: "black", fontWeight: 600}:{}} className={styles.colorSlct}>All</div>
              {colors.map((items)=>(
                <div onClick={(e)=>setcolorSelect(e.target.id)} className={styles.colorSlct} id={items.color} style={colorSelect===items.color?{background: `${items.color}`, border: "2px solid black"}:{background: `${items.color}`}}></div>
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
          <input onClick={(e)=>setshipping(e.target.checked)} checked={shipping} className={styles.checkbox} type="checkbox" name="" id=""/>
        </div>        
        <button onClick={clearFilter} className={styles.clear}>Clear Filters</button>
      </div>
    </div>   
  )
}

export default SideBar
