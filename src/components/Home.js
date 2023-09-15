import React from 'react'
import { Link } from 'react-router-dom'
import './style/Home.css'

const Home = () => {
  return (
    <>
        <div className='homepage'>
        <div className='top'>
            <div className='top-left'>
              <Link to="/Nav">
              <i class="bi bi-list"></i></Link></div>
            <div className='top-right' contentEditable><i class="bi bi-circle-fill"></i>Chandrika Devi Rd, Mahi... <i class="bi bi-suit-heart"></i></div>
        </div>
        <div className='bottom'>
            <div className='bottom-top' contentEditable>
            <i class="bi bi-circle-fill"></i> Enter Drop Location
            </div>
            <div className='bottom-medium'>
               <p> Drop Suggestions</p>
               <div className='bottom-bottom' contentEditable> <i class="bi bi-clock-fill"></i>Lucknow<i class="bi bi-suit-heart"></i></div>

            </div>

        </div>
        </div>
    </>
  )
}

export default Home