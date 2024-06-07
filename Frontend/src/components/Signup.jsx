import React from 'react'
// import Login from './Login'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


const Signup = () => {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className='max-w-screen-2xl flex justify-center items-center h-screen md:px-20 px-8'>
      <div className="w-[500px]">
  <div className="modal-box border dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-xl">Signup</h3>
    {/* Name */}
    <div className='mt-8 flex flex-col space-y-1'>
      <span>Name</span>
      <input type="text" className='bg-transparent border px-3 outline-none py-1 w-80 rounded-md' placeholder='Enter your Name' {...register("name", { required: true })}/>
      {errors.name && <span className='text-red-600'>This field is required</span>}
    </div>
    {/* Email */}
    <div className='mt-8 flex flex-col space-y-1'>
      <span>Email</span>
      <input type="email" className='bg-transparent border px-3 outline-none py-1 w-80 rounded-md' placeholder='Enter your email' {...register("email", { required: true })}/>
      {errors.email && <span className='text-red-600'>This field is required</span>}
    </div>
    {/* Password */}
    <div className='mt-7 flex flex-col space-y-1'>
      <span>Password</span>
      <input type="password" className='border px-3 bg-transparent outline-none py-1 w-80 rounded-md' placeholder='Enter your Password' {...register("password", { required: true })}/>
      {errors.password && <span className='text-red-600'>This field is required</span>}
    </div>
    <div className='mt-6 flex justify-between'>
    <button className="px-3 py-1 text-white rounded-md bg-pink-400 hover:bg-pink-600 duration-200">Signup</button>
    <p>Already Registered <Link to={'/'} className='text-blue-500 underline cursor-pointer hover:text-blue-700'
    // onClick={()=>document.getElementById("my_modal_3").showModal()}
    >Login</Link>
    {/* <Login /> */}
    </p>
    </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Signup
Signup