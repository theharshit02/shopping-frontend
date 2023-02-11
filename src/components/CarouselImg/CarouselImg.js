import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './CarouselImg.css'

const CarouselImg = (props) => {
  return (
    <div className='carouselImg'>
      <Carousel>
        <div >
          <img src={props.data.image[0]} alt="" />
        </div>
        <div>
          <img src={props.data.image[1]} alt="" />
        </div>
        <div>
          <img src={props.data.image[2]} alt="" />
        </div>
        <div>
          <img src={props.data.image[3]} alt="" />
        </div>
        <div>
          <img src={props.data.image[4]} alt="" />
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselImg
