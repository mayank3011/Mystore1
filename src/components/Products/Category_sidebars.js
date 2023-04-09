import React from 'react'
import Image1 from "../../ASSETS/images/image1.png";
import './Category_sidebars.css'

const Category_sidebars = () => {
    const data=[
        {
            id: 1,
            categoryimage:Image1,
            categoryname: 'Category1'
        },
        {
            id: 2,
            categoryimage:Image1,
            categoryname: 'Category2'
        },
        {
            id: 3,
            categoryimage:Image1,
            categoryname: 'Category3'
        },
        {
            id: 4,
            categoryimage:Image1,
            categoryname: 'Category4'
        },
        {
            id: 5,
            categoryimage:Image1,
            categoryname: 'Category5'
        },
        {
            id: 6,
            categoryimage:Image1,
            categoryname: 'Category6'
        },
        {
            id: 7,
            categoryimage:Image1,
            categoryname: 'Category7'
        },
        {
            id: 8,
            categoryimage:Image1,
            categoryname: 'Category8'
        }

    ]
  return (
    <div className='categorysidebar'>
      {
        data.map((item) => {
            return(
                <div className='category'>
                    <img src={item.categoryimage} alt='categoryimage'/>
                    <h3>{item.categoryname}</h3>
                </div>
            )
        })
      }
    </div>
  )
}

export default Category_sidebars

