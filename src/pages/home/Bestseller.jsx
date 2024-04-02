import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
export const Bestseller = () => {
    const[products,setProducts]= useState([]);

    useEffect( ()=>{

        fetch("products.json").then(res => res.json()).then(data =>setProducts(data) )
    },[])
    const bestseller = products.filter((item)=> item.status === "Best Selers");

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-8 px-4'>
      <div className='text-center'>
        <h2 className='title'>Best Seller</h2>
        <p className='text-Black capitalize MD:W-2/3 mx-auto mb-8'>
Best seller products in Queens company. Top rated products of all time.luxurious products of the company.


        </p>
        </div>  
      <div className='mb-16'>
      <Swiper
slidesPerView={1}
        spaceBetween={10}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
bestseller.map( (product)=>(
<SwiperSlide key={product.id}>

<Link to={`/shop/${product.id}`}>
    <img className="mx-auto w-full hover:scale-105 transition-all duration-300" src={product.image} alt=""/>
</Link>
<div className='mt-4 px-4'>
<h4 className='text-base font-semibold mb-2'>{product.title}</h4>
<div className='flex justify-between'> 
<p className='text-black'>{product.category}</p>
<p className='text-black'>${product.price}</p>
</div>
</div>
</SwiperSlide>

))

        }
        
        
      </Swiper>
      </div>


    </div>
  )
}
