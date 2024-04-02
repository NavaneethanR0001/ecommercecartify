import React, { useState } from 'react'
import { FaSearchDollar } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import queenlogo from "/logqueen.jpg";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineMenuFold } from "react-icons/ai";
const Navbar = () => {

  const [isMenuopen,setIsMenuopen] = useState(false);
  const toggleMenu=() =>{
    setIsMenuopen(!isMenuopen)
  }

  const navItems =[

    {title:"Jewelry & Accessories", path:"/"},
    {title:"Clothing & Shoes", path:"/"},
    {title:"Home & Accessories", path:"/"},
    {title:"Wedding & Party", path:"/"},
    {title:"Toy & Accessories", path:"/"},
    {title:"Art & Collections", path:"/"},
  ]
  return (
    <header className='max-w-screen-2xl  xl:px-28 px-5 '>
        <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'> 
        <FaSearchDollar className="text-Black w-5 h-5 cursor-pointer hidden md:block"/>
          <a href="/"><img className="object-cover h-14 w-54 sm:-px-9" src={queenlogo} alt="queen"/></a>
       <div className='text-lg text-Black sm:flex items-center gap-4 hidden'>
         <a href="/" className="flex items-center gap-2"><FaUserTie/>Account</a>
       
       <a href="/" className="flex items-center gap-2"><FaShoppingBag/>Shopping</a>  </div>   
       
       <div className="sm:hidden">
        <button onClick={toggleMenu}>

          {

            isMenuopen? <MdOutlineClose  className='w-6 h-9'/>: <AiOutlineMenuFold className="w-5 h-5 text-Black"/>
          }
        </button>
       </div>
       
       
       
       
       
       
       
        </nav>
<hr></hr>
        <div className='pt-4'>
         <ul className='lg:flex items-center justify-between text-Black hidden'>

          {
            navItems.map(({title,path})=>
            (

              <li className="hover:text-orange-600" key={title}><Link>{title}</Link></li>
            ))
          }
         </ul>

        </div>
        {

isMenuopen? 
(<div className='sm:hidden'>
  <ul className={ `bg-Black text-white px-4 py-2 rounded ${isMenuopen ? "" : "hidden"}`}>

   {
     navItems.map(({title,path})=>
     (

       <li className="hover:text-orange-600" key={title}><Link>{title}</Link></li>
     ))
   }
  </ul>

 </div>
 ):""
}
        
        
    </header>
  )
}

export default Navbar