import React from 'react'
import image from "../assets/images/logo/logo.png"
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../DataStore/ContextProvider'
import Navbar from './Navbar'
import './dashboard.css'
import Titletext from './Titletext'

const Sidemenu = () => {
  const{activeSidebartitle,handleSetActiveLink,activeLink}=useGlobalContext()
  return (
    <>
    <div className='w-[20%] flex justify-end items-center'>
      <div className='w-[100%]  bg-[#ffff] mt-[0px] m-auto rounded-sm relative'>
        <div className='flex justify-center w-[100%] flex-col items-center'>
          <img src={image} alt='logo' loading='lazy' className='w-[130px] h-auto'/>
          <NavLink onClick={activeSidebartitle}  to="/dashboard" >
         <Titletext/>
          </NavLink>
        </div>
     <div className='relative'>
      <div className='title_text'>
      <h4 className='w-[100%] text-center my-[20px] uppercase text-[13px] font-bold'>Tasks</h4>
      <Navbar/>
      </div>
     </div>
      </div>
    </div>
    </>
  )
}

export default Sidemenu