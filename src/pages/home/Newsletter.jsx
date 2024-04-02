import React from 'react'
import { Link } from 'react-router-dom'

const Newsletter = () => {
  return (
    <div className='bg-[#1e282] bg-opacity-5 xl:px-28 px-4 py-16'>
        <h2 className='title mb-8'>Fllow products and discouts on Instagram</h2>
   
   <div className='flex flex-row flex-wrap gap-4 items-center justify-center mb-20'> 
<div>
   <Link to="/">
        <img className="w-44"src="image/p9.jpg" alt=""/>
    </Link>
    </div>
    <div>
    <Link to="/">
        <img className="w-44"src="image/p10.jpg" alt=""/>
    </Link>
    </div>
    <div>
    <Link to="/">
        <img className="w-44" src="image/p11.jpg" alt=""/>
    </Link>
    </div>
    <div>
    <Link to="/">
        <img className="w-44"src="image/p12.jpg" alt=""/>
    </Link>
    </div>
    <div>
    <Link to="/">
        <img className="w-44"src="image/p2.jpg" alt=""/>
    </Link>
    </div>
   </div>
   
   
    </div>
  )
}

export default Newsletter