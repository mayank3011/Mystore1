import React from 'react'
import img from '../../ASSETS/images/image1.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer1'>
      <div className='left'>
        <img src={img} alt='veges'/>
      </div>
      <div className='right'>
        <h1> Fresh vegetables & fruits at your doorstep</h1>
        <p> We Deliver  Vegetables at your doorstep</p>
      </div>
    </div>
  )
}

export default Footer
