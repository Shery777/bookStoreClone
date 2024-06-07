import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <Navbar />
    <div className='flex max-w-screen-2xl pt-40 mb-20 mx-auto md:px-20 px-8 justify-center items-center'>
      <div>
        <h1 className='text-4xl text-center'>About Us</h1>
        <p className='pt-5 text-lg'>Welcome to bookStore! We believe in the transformative power of books and aim to create a haven for book lovers, where stories come to life and knowledge is shared freely. Whether you are an avid reader, a student, or someone looking to explore new genres, our bookstore offers something for everyone. 

We are committed to making literature accessible to all. Our collection of free books includes a wide range of genres, from timeless classics to contemporary works. Discover hidden gems and explore new worlds without spending a dime. For those looking to expand their personal libraries, we offer an extensive selection of paid books. Our curated collection includes bestsellers, new releases, and exclusive editions across various genres. Every purchase supports authors and helps us continue to provide free books to our community.

We envision a world where everyone has access to the joy of reading. By offering both free and paid books, we aim to bridge the gap between accessibility and sustainability. Our goal is to foster a community of readers who share a passion for books and learning.

Become a part of bookStore growing community of book enthusiasts. Follow us on social media, subscribe to our newsletter, and stay updated on the latest additions to our collection, special offers, and events. Thank you for choosing bookStore as your literary companion. Happy reading!</p>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default About
