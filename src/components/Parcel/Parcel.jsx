import React, { useState } from 'react';
import './Parcel.css';
import Carousel from '../carousel/carousel';
const Parcel = () => {
  const [img,setImg]=useState("https://cdn2.iconfinder.com/data/icons/service-longshadow-circle/512/transportation_work-512.png");
  const [heading,setHeading]=useState("We dont't purchase");
  const [description,setDescription]= useState("Our captains won't buy and pay on your behalf");
  const [c1,setC1]=useState("black");
  const [c2,setC2]=useState("grey");
  const [c3,setC3]=useState("grey");
    return (
    <>
    
    <div className='parcel'>
        <div className='top'>
            <div className='top-left'><i className="bi bi-list"></i></div>
            <div className='top-right'>Parcel</div>
            <div className='top-last'><i className="bi bi-question-circle-fill"></i></div>
        </div>
        <div className='middle'>
            <Carousel img={img} heading={heading} description={description}    />
            <div className='dot-1' style={{backgroundColor:c1}} onClick={()=>{
              setImg("https://cdn2.iconfinder.com/data/icons/service-longshadow-circle/512/transportation_work-512.png");
              setHeading("We dont't purchase");
              setDescription("Our captains won't buy and pay on your behalf");
              setC1("black");
              setC2("grey");
              setC3("grey");
            }}>
            </div>
            <div className='dot-2' style={{backgroundColor:c2}} onClick={()=>{
              setImg("https://static.vecteezy.com/system/resources/previews/000/355/022/non_2x/vector-weight-machine-icon.jpg");
              setHeading("Watch the weight");
              setDescription("Maximum allowed weight per order id 5kgs");
              setC1("grey");
              setC2("black");
              setC3("grey");
            }}>
            </div>
            <div className='dot-3' style={{backgroundColor:c3}} onClick={()=>{
              setImg("https://th.bing.com/th/id/OIP.pH5BlWLeltFVymGQfs3B2QAAAA?pid=ImgDet&rs=1");
              setHeading("Cash payment available");
              setDescription("Cash payment is available at both pickup or drop locations");
              setC1("grey");
              setC2("grey");
              setC3("black");
            }}>
            </div>
        </div>

        <div className='pickup'>
          <div className='top'>
            <div className='green'></div>
            <h3>Pickup From</h3>
          </div>
          <div className='add-details'>
          <i class="bi bi-plus-circle-fill"></i>  Add details (Eg. Flat no, contact)
          </div>
          <div className='bottom-1'>
          <div className='red'></div>
            <h3>Deliver To</h3>
          </div>
          <div className='add-details'>
          <i class="bi bi-plus-circle-fill"></i>  Add details (Eg. Flat no, contact)
          </div>
        </div>
        <div className='pickup-2'></div>
        <div className='pickup-3'>
          <p>By continuing, you agree to our <span>T&C</span> and there are no <span>restricted items</span>.</p>
          <div className='continue'>
              Continue
          </div>
        </div>
    </div>
    </>
  )
}

export default Parcel