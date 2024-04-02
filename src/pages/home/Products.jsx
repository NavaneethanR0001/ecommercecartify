import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaFilter } from "react-icons/fa";
import Cards from '../../components/Cards';
const Products = () => {


const[products,setProducts]= useState([]);
const[filteredItems,setFilteredItems]= useState([]);
const[selectedCategory,setSelectedCategory]= useState("all");
const[sortOption,setSortOption]= useState("default");

useEffect(()=>{


const fetchdata = async()=>{

    try{
const res =await fetch("/products.json");
const data = await res.json();
setProducts(data)

setFilteredItems(data)
console.log(data)
    }catch (error){
        console.log("Error")
    }

}

fetchdata();

},[])


const filteritems =(cate)=>{

    const filtered =cate === "all" ? (products) : products.filter((item)=> item.category === cate);
    setFilteredItems(filtered);
    setSelectedCategory("all");

}

const showall =()=>{
    setFilteredItems(products);
    setSelectedCategory("all");
}


const handlesortc =(option)=>{
    setSortOption(option);
     
    let sortt =[...filteredItems];

    switch (option) {
        case "A-Z":
            sortt.sort((a,b)=> a.title.localeCompare(b.title));
            break;
            case "Z-A":
                sortt.sort((a,b)=> b.title.localeCompare(a.title));
                break;
                case "low-to-high":
                    sortt.sort((a,b)=> a.price - b.price);
                    break;
                    case "high-to-low":
                        sortt.sort((a,b)=>b.price - a.price);
                        break;
    
        default:
            break;
    }

    setFilteredItems(sortt);
}
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px:28 px-4 mb-12'>
        
<h2 className='title'>Or subscribe to the newsletter</h2>

<div>
<div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8' >

<div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>

<button onClick={showall}> All Products</button>
<button onClick={()=>filteritems("Dress")}> Clothing</button>

<button  onClick={()=>filteritems("Hoodies")}> Hoodies</button>

<button  onClick={()=>filteritems("Bag")}> Bag</button>

</div>

<div className='flex justify-end mb-4 rounded-sm'>
<div className=' p-2'>
<FaFilter />
</div>
<select id="sort" onChange={(e)=> handlesortc(e.target.value)} value={sortOption} className='bg-black text-white px-2 py-1 rounded-sm'> 
<option value="default"> Default</option>

<option value="A-Z"> A-Z</option>
<option value="Z-A"> Z-A</option>
<option value="low-to-high"> Low to High</option>
<option value="high-to-low"> High to Low</option>

</select>


</div>



</div>

<Cards filteredItems={filteredItems}/>
</div>




    </div>
  )
}

export default Products