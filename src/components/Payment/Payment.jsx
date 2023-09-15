import React from 'react'
import {Link} from "react-router-dom"
import Wallet from '../wallet/wallet';
import './Payment.css';


const Payment = () => {
  const walletData= [
    {
      img:"https://i1.wp.com/nelspruit.fastwaystore.co.za/wp-content/uploads/sites/33/2019/03/e-wallet-icon-e1559893309544.png?ssl=1",
      name:"Rapido Wallet",
      price:"Rs. 0.0"
    },
    {
      img:"https://th.bing.com/th/id/OIP.vvjW70E8oriIas_xAcAoaAHaGo?pid=ImgDet&rs=1",
      name:`Paytm`,
      price:`link`
    },
    {
      img:"https://cdn4.iconfinder.com/data/icons/circle-payment/32/payment_006-amazon-512.png",
      name:"AmazonPay",
      price:"link"
    },
    {
      img:"https://www.vectorlogo.zone/logos/upi/upi-ar21.png",
      name:"UPI",
      price:"link"
    },
  ]

  const payLaterData= [
    {
      img:"https://pbs.twimg.com/profile_images/1300724353198206976/FBE75Was_400x400.jpg",
      name:"Lazypay",
      price:"link"
    },
    {
      img:"https://th.bing.com/th/id/OIP.OjDAmo-Exaz02XY7nwypDwAAAA?pid=ImgDet&rs=1",
      name:`Simpl`,
      price:`link`
    },
    {
      img:"https://www.shareicon.net/data/2016/07/06/105687_code_512x512.png",
      name:"Pay at Drop",
      price:"link"
    },
  ]
  return (
    <>
    <div className='payment'>
        <div className='payment-top'>
            <div className='payment-top-top'>
            <Link to="/Nav"><i class="bi bi-arrow-left"></i></Link>
            <i class="bi bi-question-circle-fill"></i>
            <p>Support</p>
            <i class="bi bi-credit-card"></i>
            </div>
            <div className='payment-heading'>
                <h1>Payment</h1>
            </div>
        </div>
        <div className='payment-bottom'>
            <div className='p-wallet'>
              <h4>Personal Wallet</h4>
              {
                walletData.map((num)=>{
                  return(
                    <>
                    <Wallet img={num.img} name={num.name} price={num.price} /><br/>
                    </>
                  )
                })
              }
              
            </div>
            <div className='p-wallet'>
            <h4>Pay Later</h4>
              {
                payLaterData.map((num)=>{
                  return(
                    <>
                    <Wallet img={num.img} name={num.name} price={num.price} />
                    </>
                  )
                })
              }
            </div>
        </div>
        </div>
    </>
  )
}

export default Payment