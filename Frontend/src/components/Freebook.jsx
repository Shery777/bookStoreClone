import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json'
import Cards from './Cards';

const Freebook = () => {
    const filterData = list.filter((data) => data.category === "Free"); 
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 430,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-8'>
      <div>
      <h1 className='text-xl font-semibold pb-2'>Free Offered Courses</h1>
      <p>Join our free book course and discover the joy of reading, with access to a curated selection of e-books, author insights, and reading resources, all at no cost, to help you unlock new worlds and perspectives!</p>
      </div>
      <div>
      <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
      </div>
      </div>
    </>
  )
}

export default Freebook
