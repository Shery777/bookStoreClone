import React from 'react'
import banner from '../../public/Banner.jpg'

const Banner = () => {
  return (
    <>
    <div className="max-w-screen-2xl navbar container mx-auto md:px-20 px-8 flex flex-col py-10 md:flex-row">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-10 md:mt-20">
            <div className='space-y-8'>
            <h1 className='font-bold text-4xl'>Hello, welcomes here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
            <p className='text-xl'>Books are a vast source of knowledge and wisdom, allowing us to learn from the experiences of others.  Reading books can help us develop new perspectives, challenge our beliefs, and foster personal growth.</p>
            <label className="border px-4 py-2.5 rounded-md flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" className="grow bg-transparent outline-none" placeholder="Email" />
            </label>
            <button className="btn btn-secondary text-xl hover:bg-pink-600 duration-300">Secondary</button>
         </div>

        </div>
        <div className="order-1 w-full md:w-1/2">
            <img className='w-110 h-110 bg-transparent' src={banner} alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner
