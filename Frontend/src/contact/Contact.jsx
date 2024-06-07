import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useForm } from "react-hook-form"


const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <Navbar />
    <div className='flex max-w-screen-2xl pt-40 mb-20 mx-auto md:px-20 px-8 justify-center items-center'>
    <div className=''>
      <div className="md:w-[500px] w-[350px]">
  <div className="border p-4 md:p-10 dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
    <h3 className="text-4xl text-center">Contact Us</h3>
    {/* Name */}
    <div className='mt-8 flex flex-col space-y-1'>
      <span>Name</span>
      <input type="text" className='bg-transparent md:w-[420px] border hover:shadow-md px-3 outline-none py-2 w-80 rounded-md' placeholder='Enter your Name' {...register("name", { required: true })}/>
      {errors.name && <span className='text-red-600'>This field is required</span>}
    </div>
    {/* Email */}
    <div className='mt-8 flex flex-col space-y-1'>
      <span>Email</span>
      <input type="email" className='bg-transparent md:w-[420px] border px-3 outline-none py-2 w-80 rounded-md' placeholder='Enter your email' {...register("email", { required: true })}/>
      {errors.email && <span className='text-red-600'>This field is required</span>}
    </div>
    {/* Password */}
    <div className='mt-7 flex flex-col space-y-1'>
      <span>Contact Number</span>
      <input type='number' className='border md:w-[420px] md:w-[420px] px-3 bg-transparent outline-none py-2 w-80 rounded-md' placeholder='Enter your Number' {...register("contact", { required: true })}/>
      {errors.contact && <span className='text-red-600'>This field is required</span>}
    </div>
    <div className='mt-7 flex flex-col space-y-1'>
      <span>Message</span>
      <input type='text' className='border px-3 md:w-[420px] bg-transparent outline-none py-2 w-80 rounded-md' placeholder='Enter your Message' {...register("message", { required: true })}/>
      {errors.message && <span className='text-red-600'>This field is required</span>}
    </div>
    <div className='mt-7 flex flex-col space-y-1'>
      <span>Date</span>
      <input type='date' className='border cursor-pointer md:w-[420px] px-3 bg-transparent outline-none py-2 w-80 rounded-md' placeholder='' {...register("date", { required: true })}/>
      {errors.date && <span className='text-red-600'>This field is required</span>}
    </div>
    <div className='mt-6 flex justify-center'>
    <button className="px-4 mt-4 py-2 text-white rounded-md bg-pink-400 hover:bg-pink-600 duration-200 text-xl">Submit</button>
    </div>
    </form>
  </div>
</div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact
Contact