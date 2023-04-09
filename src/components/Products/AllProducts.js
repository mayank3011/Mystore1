import React from 'react'
import ProductCard from './ProductCard'
import Image1 from '../../ASSETS/images/image1.png'
import './AllProducts.css'
const AllProducts = () => {
   const products =[
    {
      id:1,
      productimage:Image1,
      productname:'Product1',
      price: 100,
      counttype:'1 each',
      discountpercent:12
    },
    {
      id:2,
      productimage:Image1,
      productname:'Product1',
      price: 100,
      counttype:'1 each',
      discountpercent:12
    },
    {
      id:3,
      productimage:Image1,
      productname:'Product1',
      price: 100,
      counttype:'1 each',
      discountpercent:12
    },
    {
      id:4,
      productimage:Image1,
      productname:'Product1',
      price: 100,
      counttype:'1 each',
      discountpercent:12
    },
    {
      id:5,
      productimage:Image1,
      productname:'Product1',
      price: 100,
      counttype:'1 each',
      discountpercent:12
    },
    {
      id:6,
      productimage:Image1,
      productname:'Product1',
      price: 100,
      counttype:'1 each',
      discountpercent:12
    },
    {
      id:7,
      productimage:Image1,
      productname:'Product1',
      price: 100,
      counttype:'1 each',
      discountpercent:12
    },
    {
      id:8,
      productimage:Image1,
      productname:'Product1',
      price: 100,
      counttype:'1 each',
      discountpercent:12
    },
    {
      id:9,
      productimage:Image1,
      productname:'Product1',
      price: 100,
      counttype:'1 each',
      discountpercent:12
    },
    {
      id:10,
      productimage:Image1,
      productname:'Product1',
      price: 100,
      counttype:'1 each',
      discountpercent:12
    }
   ]
  return (
    <div className='allproducts'>
      <h1>All Products</h1>
      <div className='products'>
        {
          products.map((item)=>{
            return (
              <ProductCard data={item} key={item.id}/>
             )
          })
        }
      </div>
     </div>
  )
}

export default AllProducts
