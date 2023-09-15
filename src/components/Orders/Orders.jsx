import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Orders.css';
import OrderM from '../orderM/orderM';
const Orders = () => {
    const [click,setClick] = useState("right");
  return (
    <>
        <div className='Orders'>
            <div className='order-top'>
            <Link to="/Nav"><i class="bi bi-arrow-left"></i></Link>
            <p>Orders</p>
            </div>
            <div className='choice'>
                <div className='Rides' onClick={()=>{
                    setClick("left");
                }}>
                    Rides
                </div>
                <div className='Parcel' onClick={()=>{
                    setClick("right");
                }}>
                    Parcel
                </div>
            </div>
            <div className='main-bottom'>
               {<OrderM click={click}/>
               }
            </div>
        </div>
    </>
  )
}

export default Orders;