import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <dialog id="my_modal_3" className="modal dark:text-black">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-xl">Login</h3>
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
    <button className="px-3 py-1 text-white rounded-md bg-pink-400 hover:bg-pink-600 duration-200">Login</button>
    <p>Not Registered? <Link to={'/signup'} className='text-blue-500 underline cursor-pointer hover:text-blue-700'>Signup</Link></p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
