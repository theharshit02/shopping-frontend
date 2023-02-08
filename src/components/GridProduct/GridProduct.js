import React from 'react'
import styles from './GridProduct.module.css'

const GridProduct = (props) => {
  return (
    <div className={styles.gridProduct}>
        <img className={styles.img} src={props.data.image[0]} alt=""/>
        <div className={styles.data}>
            <p className={styles.name}>{props.data.name}</p>
            <p className={styles.price}>${props.data.price}</p>
        </div>
    </div>
  )
}

export default GridProduct
