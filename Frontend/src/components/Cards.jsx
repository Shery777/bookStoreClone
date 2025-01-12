import React from 'react'

function Cards({item}) {
  return ( 
    <>
    <div className='mt-10 mb-10'>
    <div className="card w-92 m-2 cursor-pointer bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline hover:bg-pink-400 duration-200 hover:text-white cursor-pointer px-3 py-3">${item.price}</div> 
      <div className="badge badge-outline hover:bg-pink-400 duration-200 hover:text-white cursor-pointer px-3 py-3">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards