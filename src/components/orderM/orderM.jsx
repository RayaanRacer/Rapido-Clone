import React from 'react'

const orderM = (props) => {
    console.log(props.click);
    if(props.click==="left"){
        return (
            <>
                <div className='left-line'>
                            <img src="https://i.pinimg.com/originals/b8/b0/c0/b8b0c0e3e3bb2e793153709899773ece.png" alt="" />
                        </div>
                        <p className='heading'> 
                            <b>
                                You haven't taken any ride yet.
                            </b>
                        </p>
                        <p className='description'>
                            Once you take a ride, your past rides will be available here
                        </p>
            </>
          )
    }
    else{
        return (
            <>
                <div className='right-line'>
                        
                            <img src="https://i.pinimg.com/originals/b8/b0/c0/b8b0c0e3e3bb2e793153709899773ece.png" alt="" /></div>
                        <p className='heading'> 
                            <b>
                                You haven't taken any ride yet.
                            </b>
                        </p>
                        <p className='description'>
                            Once you take a ride, your past rides will be available here
                        </p>
            </>
          )
    }

}

export default orderM