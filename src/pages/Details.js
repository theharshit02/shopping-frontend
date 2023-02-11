import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Details.module.css'
import { details } from '../components/api/api'
import ProductDetail from '../components/ProductDetail/ProductDetail'

const Details = () => {
    
    const {id} = useParams()
    const [data, setdata] = useState([])

    useEffect(()=>{
        async function fetch(){
            const result = await details(id)
            setdata(result.data)
        }
        fetch()
    },[])

  return (
    <div className={styles.details}>
      <header className='header'>
        <div className='breadcrumbs'>Home /&nbsp;<p className='products'>Products</p></div>
      </header>
      <div className={styles.productDetail}>
        {data.map((items)=>(
            <ProductDetail data={items}/>
        ))}
      </div>
      
    </div>
  )
}

export default Details
