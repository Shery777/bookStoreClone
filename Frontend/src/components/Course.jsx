import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'

const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='pt-28 items-center justify-center text-center'>
        <h1 className='text-3xl md:text-4xl '>We're delighted to you {" "}
        <span className='text-pink-500'> Here :)</span>
        </h1>
        <p className='mt-10'>
        Discover our extensive collection of paid books, carefully curated to offer you the best in literature, education, and entertainment. From bestselling novels and timeless classics to cutting-edge textbooks and insightful non-fiction, our selection caters to every reader's taste and interest. Each purchase supports authors and publishers, ensuring that the world of books continues to thrive and evolve. Dive into a new adventure, gain valuable knowledge, or simply enjoy the pleasure of reading with our premium titles.
        </p>
        <Link to={'/'}>
        <button className="btn btn-secondary mt-6 hover:bg-pink-700 duration-300 text-xl">Back</button>
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course;
