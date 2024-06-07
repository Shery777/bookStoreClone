import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Error = () => {
  return (
    <>
    <Navbar />
    <div className='flex max-w-screen-2xl pt-60 mb-20 text-center mx-auto md:px-20 px-8 justify-center items-center flex-col'>
        <div className='font-bold text-4xl text-red-500 mb-10'>
            Error 404 - Page not found
        </div>
        <div className='text-3xl'>
            Go back to 

            <Link to='/' className='font-bold text-blue-500 hover:text-blue-700 underline pl-4'>
             home
            </Link>
        </div>
        </div>
        <Footer />
        </>
  )
}

export default Error;