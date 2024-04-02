import React from 'react'
import bannerim from"/image/bani.jpg";
import { FaShoppingBag } from "react-icons/fa";
import{motion} from "framer-motion";



const Banner = () => {
  return (
    <div className="bg-primayBG py-12 xl:px-28 px-4">
        <div  className='py-4 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>

          <motion.div initial={{y:-250, opacity:0}} whileInView={{ y:  0, opacity:1 }}
    transition={{  duration: 1 ,ease: "linear" }}className='flex-1'>
                <img className=" hover:rounded-bl-4xl hover:rounded-br-none transition-all duration-200 hover:rounded-tr-4xl  hover:rounded-tl-none rounded-tl-4xl rounded-br-4xl w-35 h-25 object-contain object-right" src={bannerim} alt=""/>
                </motion.div>


                <motion.div initial={{x:-250, opacity:0}} whileInView={{ x:  0, opacity:1 }}
    transition={{  duration: 1 ,ease: "linear" }}className='flex-1 ' >
                <h1 className="text-5xl font-light mb-5">Collections </h1>
<p className="text-xl mb-7">
    You can explore and shop many different collection from various brands here.
</p>
<button className='bg-black hover:bg-orange-500 px-6 py-4 text-white font-semibold rounded-sm flex items-center gap-2'>

    <FaShoppingBag className='inline-flex'/> Shop Now
</button>



            </motion.div>
           
        </div>
        

    </div>
  )
}

export default Banner