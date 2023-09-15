import React from 'react'
import { Link } from 'react-router-dom';

const Options = (props) => {
  const classs="option-logo bi "+props.logo;
  const linkk=props.link;
  return (
    <>
    <div className='options'>
                    <div className='options-left'>
                <i style={{
                    position:"relative",
                    color:props.color,
                    left:"0px",
                    marginLeft:"0px"
                }} class={classs}></i></div>
                <Link to={linkk} style={{
                      cursor:"pointer",
                      textDecoration:"none"
                    }}>
                    <div className='option-name' style={{
                      cursor:"pointer",
                      textDecoration:"none"
                    }}>
                       {props.name}
                    </div>
                </Link>
                </div>
    </>
  )
}

export default Options