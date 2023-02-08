import React from 'react'
import styles from './ListProduct.module.css'

const ListProduct = (props) => {
  return (
    <div className={styles.listProduct}>
      <img className={styles.img} src={props.data.image[0]} alt=""/>
      <div className={styles.data}>
        <p className={styles.name}>{props.data.name}</p>
        <p className={styles.price}>${props.data.price}</p>
        <p className={styles.desc}>{props.data.description}</p>
        <button className={styles.btn}>Details</button>
      </div>
    </div>
  )
}

export default ListProduct
