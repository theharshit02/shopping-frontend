import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Details.module.css'
import { details } from '../components/api/api'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import { useNavigate } from 'react-router-dom'

const Details = () => {
    
    const {id} = useParams()
    const [data, setdata] = useState([])
    const navigate = useNavigate()

    function handleclick(){
        navigate(`/`)
    }

    useEffect(()=>{
        async function fetch(){
            const result = await details(id)
            setdata(result.data)
        }
        fetch()
        // eslint-disable-next-line
    },[])

  return (
    <div className={styles.details}>
      <header className={styles.header}>
        <div className={styles.breadcrumbs}>Home /&nbsp;<p onClick={handleclick} className={styles.products}>Products</p></div>
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
