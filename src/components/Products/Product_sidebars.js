import React from 'react'
import Category_sidebars from './Category_sidebars'
import AllProducts from './AllProducts'
import './Product_sidebars.css'
const Product_sidebars = () => {
  return (
    <div className='product_sidebar'>
      <Category_sidebars/>
      <AllProducts/>
    </div>
  )
}

export default Product_sidebars
