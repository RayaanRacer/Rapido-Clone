import React from 'react'
import {Link} from 'react-router-dom'
import './Refer.css'
const Refer = () => {
  return (
    <>
        <div className='refer'>
            <div className='refer-top'>
            <div className='refer-top-top'>
            <Link to="/Nav"><i class="bi bi-arrow-left"></i></Link>
            <p>Refer Friends</p>
            <p><i class="bi bi-question-circle" style={{marginLeft:"-10px"}}></i> FAQs</p>
            </div>
            <div className='y-line'></div>
            <div className='tag-line'>
                Invite your friends to try Rapido
            </div>
            <div className='refer-code'> 
            CCFI75Z <i class="bi bi-clipboard2-check"></i>
            </div>
            <div className='img'>
                <img src="https://cdn1.iconfinder.com/data/icons/marketing-cartoon/512/g7130-1024.png" alt="" />
            </div>
            </div>
            <div className='refer-bottom'>
                <div className='invite-link'>
                <i class="bi bi-gift"></i>
                <p> Invite Friends to Rapido </p>
                <p className='invi'> INVITE </p>
                </div>

                <div className='info'>
                    <h3>How to refer friends?</h3>
                    <div className='line'></div>
                    <div className='info-bottom'>
                    <i class="bi bi-1-circle"></i>
                    <h3>
                        Share your Referral Code
                    </h3>
                    <p>
                        Invite your friends via Whatsapp or a text message.
                    </p></div>
                </div>

                <div className='linkss'>
                    <div className='findF'>
                        Find Friends to Refer
                    </div>
                    <div className='RefN'>
                        Refer Now
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Refer