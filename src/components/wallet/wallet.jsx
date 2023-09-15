import React from 'react'

const wallet = (props) => {
    if(props.price==="link"){
        return (
            <div className='each-wallet'>
                      <div className='left-p'>
                        <img src={props.img} alt="" />
                        <h3>{props.name}</h3>
                      </div>
                      <div className='right-p'>
                        <div className='linkk'>
                        <i class="bi bi-link-45deg"></i> Link
                        </div>
                      </div>
                      </div>
          )
    }
    else{
        return (
            <div className='each-wallet'>
                      <div className='left-p'>
                        <img src={props.img} alt="" />
                        <h3>{props.name}</h3>
                      </div>
                      <div className='right-p'>
                        {props.price}
                      </div>
                      </div>
          )
    }
  
}

export default wallet