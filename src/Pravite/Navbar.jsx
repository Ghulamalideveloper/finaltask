import React from 'react'
import { IoAddOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../DataStore/ContextProvider'

const Navbar = () => {
    const{activeAddproduct,}=useGlobalContext()
  return (
   <>
            <nav>
            <div className='w-[100%] flex justify-center items-center nave_items ml-[10px]'>
              <ul>
                  <li onClick={activeAddproduct}>
                  <div className='flex justify-center items-center task_items w-[90%]'>
                    <span className='w-[30%]'>{<IoAddOutline className='taskbar'/>}</span>
                    <NavLink to="/addproducat" className="text-[16px] capitalize w-[70%]">Add Product</NavLink>
                    </div>
                  </li>
                  <li>
                  <div className='flex justify-center items-center task_items w-[90%]'>
                    <span className='w-[30%]'>{<IoEyeOutline  className='taskbar'/>}</span>
                    <NavLink to="/viewproducts" className="text-[16px] capitalize w-[70%]">View Product</NavLink>
                    </div>
                  </li>
                  <li>
                  <div className='flex justify-center items-center task_items'>
                    <span className='w-[30%]'>{<FaPencilAlt className='taskbar'/>}</span>
                    <NavLink to="/updateproduct" className="text-[16px] capitalize w-[70%]">Update Product</NavLink>
                    </div>
                  </li>
              </ul>
            </div>
        </nav>
   </>
  )
}

export default Navbar