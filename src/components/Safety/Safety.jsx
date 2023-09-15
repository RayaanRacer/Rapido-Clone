import React from 'react'
import {Link} from 'react-router-dom'
import './Safety.css'
const Safety = () => {
  return (
    <>
        <div className='safety'>
            <div className='safety-top'>
            <Link to="/Nav"><i class="bi bi-arrow-left"></i></Link>
            </div>
            <div className='safety-bottom'>
                <div className='safety-p-1'>
                    <h2> Safety all the way </h2>
                    <p> At Rapido, your safety comes first. Here are some measures and provisions to ensure your safety, every time. </p>
                </div>
                <div className='safety-summary'>
                    <h3>What we offer? </h3>
                    <h4><img src="https://www.pngarts.com/files/2/Direction-PNG-Photo.png" alt="" /> 24X7 Proactive Safety Checks</h4>
                    <p>
                        We send notifications and follow up calls in case of:
                        <ul>
                            <li>
                                - Drop at different location
                            </li>
                            <li>
                                - Unplanned stops / Vehicle not moving
                            </li>
                            <li>
                                - Route deviations during the ride
                            </li>
                        </ul>
                    </p>
                    <div className='line-safety'> </div>
                    <h4><img src="https://cdn2.iconfinder.com/data/icons/symbols-8/50/1F198-sos-button-A-512.png" alt="" /> SOS button</h4>
                    <p>
                        A button that calls our Central Emergency Response Team who then guide you to onground help.
                    </p>
                    <div className='line-safety'> </div>
                    <h4> <img src="https://th.bing.com/th/id/OIP.UuCqi7fI9fjRMCSH_CFKhAHaHa?pid=ImgDet&rs=1" alt="" /> Late night ride completion check</h4>
                    <p>
                        We call you post ride completeion for eedback, each time you ride between 10pm - 5am.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Safety