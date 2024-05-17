import React from 'react'
import productimage from '../assets/images/profile/profile.jpg'
import { IoEyeOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import { IoAddOutline } from "react-icons/io5";
import { useGlobalContext } from '../DataStore/ContextProvider';

const Allproducts = () => {
  const {getProduct}=useGlobalContext()

  return (
   <>
    <div className='w-full flex justify-center items-center'>
      <div className='w-[96%] bg-[#ffff] p-[20px] rounded-sm'>
      <h3  className={`text-[25px] font-bold uppercase gradient-text`}>All Products</h3>
      <div className='w-full'>
        <table className='w-full'>
          <thead className='bg-pink-600 py-[40px]'>
          <tr className=' rounded-md capitalize text-balance text-[#fff]'>
            <th>product name</th>
            <th>product type</th>
            <th>product details</th>
            <th>product price</th>
            <th>product image</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {
              getProduct.map((getValue,index)=>{
             
                const {name,type,url,details,price,id}=getValue
               return(
        
            <tr key={index} className='bg-[#E8F0FE] my-[4px]'>
              <td>{name}</td>
              <td>{type}</td>
              <td>{details}</td>
              <td>{price}</td>
              <td>
                <img src={url} alt='brandImage' loading='lazy' className='w-[50px] h-[50px] m-auto p-[3px]'/>
              </td>
              <td className='flex gap-[4px] items-center mt-[8px]'>
                <button><span className='w-[30%]'>{<IoAddOutline className='taskbar'/>}</span></button>
                <button> <span className='w-[30%]'>{<IoEyeOutline  className='taskbar'/>}</span></button>
                <button><span className='w-[30%]'>{<FaPencilAlt className='taskbar'/>}</span></button>
              </td>
            </tr>
               )
              })
            }
          </tbody>
        </table>
      </div>
      </div>
      </div>
   </>
  )
}

export default Allproducts