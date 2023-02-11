import React from 'react'
import styles from './ListProduct.module.css'
import { useNavigate } from 'react-router-dom'


const ListProduct = (props) => {
  
  const navigate = useNavigate()

  function handleclick(e){
    navigate(`/details/${e.target.id}`)
  }

  return (
    <div className={styles.listProduct}>
      <img className={styles.img} src={props.data.image[0]} alt=""/>
      <div className={styles.data}>
        <p className={styles.name}>{props.data.name}</p>
        <p className={styles.price}>${props.data.price}</p>
        <p className={styles.desc}>{(props.data.description).substring(0,200)} .....</p>
        <button onClick={handleclick} id={props.data._id} className={styles.btn}>Details</button>
      </div>
    </div>
  )
}

export default ListProduct
