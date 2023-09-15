import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Options from '../Options/Options'
const Nav = () => {
    const options=[
        {
            logo:"bi-credit-card-fill",
            name:"Payment",
            color:"white",
            link:"/Payment"
        },
        {
            logo:"bi-arrow-counterclockwise",
            name:"My Rides",
            color:"grey",
            link:"/Orders"
        },
        {
            logo:"bi-shield-check",
            name:"Safety",
            color:"lightBlue",
            link:"/Safety"
        },
        {
            logo:"bi-gift",
            name:"Refer and Earn",
            color:"red",
            link:"/Refer"
        },
        {
            logo:"bi-trophy-fill",
            name:"My Rewards",
            color:"yellow"
        },
        {
            logo:"bi-coin",
            name:"Rapido Coins",
            color:"yellow"
        },
        {
            logo:"bi-shield-check",
            name:"Power Pass",
            color:"blue"
        },
        {
            logo:"bi-bell-fill",
            name:"Notifications",
            color:"pink"
        },
        {
            logo:"bi-award",
            name:"Claims",
            color:"green"
        },
        {
            logo:"bi-gear-fill",
            name:"Settings",
            color:"blue"
        },
    ]

  return (
    <>
        <div className='nav'>
            <div className='nav-left'>
                <div className='profile'>
                    <div className='profile-left'>
                    <i class="bi bi-person-circle"></i>
                    </div>
                    <div className='profile-right'>
                        <h3>Gopal Tiwari</h3>
                        <p>+91 9305910424</p>
                    </div>
                </div>
                <div className='profile-line'></div>
                <div className='rating'>
                <i class="bi bi-star-fill"></i>
                <p>My Rating</p>
                <i class=" bi bi-chevron-left"></i>
                </div>
                <div className='profile-line-1'></div>

                    {options.map((num)=>{
                        return(
                            <>
                            <Options color={num.color} name={num.name} logo={num.logo} link={num.link} />
                            </>
                        )
                    })}

            </div>
            <Link to="/">
            <div className='nav-right'></div></Link>
        </div>
        
    </>
  )
}

export default Nav