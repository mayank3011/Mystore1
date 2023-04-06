import React from 'react'
import Slider from "react-slick";
import './bannerslider.css'

const BannerSlider = () => {
    const data = [
        {
            id:1,
            image:'https://imgs.search.brave.com/OjXN-pK_0_SXJYftmlSW1S1yRUfb_yJQGK_xlN5OaGE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTU5/NzExL2Jvb2tzLWJv/b2tzdG9yZS1ib29r/LXJlYWRpbmctMTU5/NzExLmpwZWc_Y3M9/c3JnYiZkbD1ib29r/Y2FzZS1ib29rcy1i/b29rc2hlbHZlcy0x/NTk3MTEuanBnJmZt/PWpwZw',
            title :'Banner 1',
            description:'lorem ipsum',
            button: 'Button 1'
            
        },
        {
            id:2,
            image:'https://imgs.search.brave.com/EILpzGf_boZTKAW_4OThpYe1QQ2cbbM9vnBtiT0YlcE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9idWRk/aGlmeS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMDcv/aVN0b2NrLTY4OTc4/NTA4NC5qcGc',
            title :'Banner 1',
            description:'lorem ipsum',
            button: 'Button 1'
            
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='bannerslider'>
      <Slider className='bannerslider' {...settings}>
        {
            data.map(item=>{
                return (
                    <div className='imagecont' key={item.id}>
                        <img src={item.image} alt='noimg'/>
                        <div className='content'>
                            <h1>{item.title}</h1>
                            <span>{item.description}</span>
                            <button>Shop More</button>
                        </div>

                    </div>
                )
            })
        }
      </Slider>
    </div>
  )
}

export default BannerSlider
