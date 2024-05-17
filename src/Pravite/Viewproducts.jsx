import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../DataStore/ContextProvider'

const Viewproducts = () => {
const {getProduct}=useGlobalContext();

  return (
    <>
    <div className='w-full flex gap-[12px] items-center justify-center flex-wrap'>
      {
        getProduct.map((getpro)=>{
          
          const {name,type,url,details,price,id}=getpro
        return(
      <NavLink key={id} to='/productdetails'>
      <div className='w-[200px] bg-[#fff] overflow-hidden rounded-sm flex justify-center items-center flex-col'>
      <div className="relative">
      <img className="w-[100%] h-[160px]" src={url} alt="product image" />
      <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white bg-gradient-to-br 
      from-purple-900 
      to-pink-600 ">39% OFF</span>
      <div className="mt-4 px-5">
      <h5 className="text-xl  text-[14px] font-bold text-center capitalize">{name}</h5>
      <h6 className='text-center font-bold text-[12px]  text-purple-900 uppercase my-[8px]'>{type}</h6>
      <p className='text-[13px] text-center'>{details}</p>
      <div className="mt-2 mb-5 flex items-center justify-between">
      <span className="text-[18px] font-bold  text-pink-600 text-center w-full">PKR-{price}</span>
    </div>
  </div>
</div>
</div>
    </NavLink>
          
          )
        })
      }
     
</div>
    </>
  
  )
}

export default Viewproducts