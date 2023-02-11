import React from 'react'
import styles from './GridProduct.module.css'
import { useNavigate } from 'react-router-dom'

const GridProduct = (props) => {
    const navigate = useNavigate()

    function handleclick(e){
        navigate(`/details/${e.target.id}`)
    }
  return (
    <div onClick={handleclick} id={props.data._id} className={styles.gridProduct}>
        <img className={styles.img} src={props.data.image[0]} alt=""/>
        <div className={styles.data}>
            <p className={styles.name}>{props.data.name}</p>
            <p className={styles.price}>${props.data.price}</p>
        </div>
    </div>
  )
}

export default GridProduct
