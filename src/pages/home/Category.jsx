import React from 'react'
import { Link } from 'react-router-dom'
import{motion} from "framer-motion";

const companylogo =[


    {id:1, img:"/image/h88m.png"},
    {id:2, img:"/image/west.png"},
    {id:3, img:"/image/zaara.jpg"},
    {id:4, img:"/image/lww.png"},
    {id:5, img:"/image/adi.jpg"},
]




const Category = () => {
  return (
    <div className='max=-w-screen-2xl mx-auto container xl:px-32 px-4 py-28'>
 
 <div className='flex items-center justify-around  gap-4 py-5'>
{
    companylogo.map(({id,img})=>(
<motion.div initial={{x:"0"}} whileInView={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", type:"spring", duration:5}}  key={id}>

    <img className='h-24 object-contain hover:w-52' src={img} alt=""/>
    </motion.div>


    ))
}

</div>



<div className='mt-8 flex flex-col md:flex-row items-center gap-3'>
    
<p className='font-semibold md:rotate-90 uppercase text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex'>
    Explore new and popular styles
        </p>
<div className='md:w-1/2'>
    <Link to="/"><img className='w-10/12 hover:scale-105  transition-all duration-200 h-auto object-contain ' src="/image/model1.jpg" alt=""/></Link>
</div>

<div className='md:w-1/2'>
   
<motion.div initial={{x:250, opacity:0}} whileInView={{ x:  0, opacity:1 }}
    transition={{  duration: 1 ,ease: "linear" }} className='grid grid-cols-2 gap-2'>
    <Link to="/"><img src="/image/p9.jpg" alt="" className=' hover:scale-105  transition-all duration-200'/></Link>
    <Link to="/"><img src="/image/p7.jpg" alt="" className=' hover:scale-105  transition-all duration-200'/></Link>
    <Link to="/"><img src="/image/p11.jpg" alt="" className=' hover:scale-105  transition-all duration-200'/></Link>
    <Link to="/"><img   src="/image/s3.jpg" alt="" className=' object-contain h-60 w-72 hover:scale-105  transition-all duration-200'/></Link>


    </motion.div>

</div>
</div>

    </div>
  )
}

export default Category