import React from 'react'
import './carosel.css';
const Carousel = (props) => {

  return (
    <>
        <div className='box'>
            <div className='left'>
                <h4>{props.heading}</h4>
                <p>{props.description}</p>
            </div>
            <div className='right'>
                <img src={props.img} alt="" />
            </div>
        </div>
    </>
  )
}

export default Carousel