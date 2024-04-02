import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collections from './Collections'
import { Bestseller } from './Bestseller'
import Newsletter from './Newsletter'

const Home = () => {
  return (
    <div className='overflow-y-scroll no-scrollbar'>
      
      <Banner/>
    <Category/>
<Products/>
<Collections/>
<Bestseller/>
<Newsletter/>
    
    </div>
  )
}

export default Home