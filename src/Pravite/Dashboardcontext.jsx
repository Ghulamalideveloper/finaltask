import React from 'react'
import { IoBagAddOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Allproducts from './Allproducts';
const Dashboardcontext = () => {
  return (
    <>
    <div className='w-full flex gap-[30px] relative justify-center flex-wrap'>
        <div className='w-[30%] bg-[#fff] h-[100px] rounded-sm '>
            <div className='relative flex  justify-center items-center w-full h-full'>
                <span className='w-[50px] h-[50px] text-[#fff] flex justify-center items-center rounded-full   bg-gradient-to-br 
                    from-purple-900 
                    to-pink-600 '>{<IoBagAddOutline  className='text-[40px] p-[10px]'/>}</span>
                <h4 className='mx-[10px] text-[20px] uppercase'>Add new Product</h4>
            </div>
            
            </div>
            <div className='w-[30%] bg-[#fff] h-[100px] rounded-sm '>
            <div className='relative flex  justify-center items-center w-full h-full'>
                <span className='w-[50px] h-[50px] text-[#fff] flex justify-center items-center rounded-full   bg-gradient-to-br 
                    from-purple-900 
                    to-pink-600 '>{<FaRegEye className='text-[40px] p-[10px]'/>}</span>
                <h4 className='mx-[10px] text-[20px] uppercase'>View Product</h4>
            </div>
            
            </div>
            <div className='w-[30%] bg-[#fff] h-[100px] rounded-sm '>
            <div className='relative flex  justify-center items-center w-full h-full'>
                <span className='w-[50px] h-[50px] text-[#fff] flex justify-center items-center rounded-full   bg-gradient-to-br 
                    from-purple-900 
                    to-pink-600 '>{<CiEdit className='text-[40px] p-[10px]'/>}</span>
                <h4 className='mx-[10px] text-[20px] uppercase'>Update Product</h4>
            </div>
        
           
            
            </div>
            <Allproducts/>
    </div>
    </>
    
  )
}

export default Dashboardcontext