import React from 'react'
import styles from './ProductDetail.module.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import CarouselImg from '../CarouselImg/CarouselImg';
import { useNavigate } from 'react-router-dom';


const ProductDetail = (props) => {

  const navigate = useNavigate()

    function handleclick(){
        navigate(`/`)
    }

  return (
    <div>
      <button onClick={handleclick} className={styles.btn}>BACK TO PRODUCTS</button>   
      <div className={styles.ProductDetail}>

        <CarouselImg data={props.data}/>

        <div className={styles.productSpecs}>
          <p className={styles.title}>{props.data.name}</p>
          <div className={styles.stars}>
            {props.data.rating >0?<p><StarIcon sx={{ color: "#d5d572" }}/></p>:<p><StarBorderIcon/></p>}
            {props.data.rating >1?<p><StarIcon sx={{ color: "#d5d572" }}/></p>:<p><StarBorderIcon/></p>}
            {props.data.rating >2?<p><StarIcon sx={{ color: "#d5d572" }}/></p>:<p><StarBorderIcon/></p>}
            {props.data.rating >3?<p><StarIcon sx={{ color: "#d5d572" }}/></p>:<p><StarBorderIcon/></p>}
            {props.data.rating >4?<p><StarIcon sx={{ color: "#d5d572" }}/></p>:<p><StarBorderIcon/></p>}
            <p className={styles.count}>({props.data.cstmrCount} customer reviews)</p>
          </div>
          
          <p className={styles.price}>${props.data.price}</p>
          <p>{props.data.description}</p>
          <table className={styles.table}>
            <tr>
              <td className={styles.tableheading}>Availability :</td>
              {props.data.availability===true?<td className={styles.tabledata}>In Stock</td>:<td className={styles.tabledata}>Out of stock</td> }
            </tr>
            <tr>
              <td className={styles.tableheading}>SKU :</td>
              <td className={styles.tabledata}>{props.data.SKU}</td>
            </tr>
            <tr>
              <td className={styles.tableheading}>Brand :</td>
              <td className={styles.tabledata}>{props.data.brand}</td>
            </tr>
          </table>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
