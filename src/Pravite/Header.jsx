import React from 'react'
import profile from "../assets/images/profile/profile.jpg"
import { CiSearch } from "react-icons/ci";

import { GoTriangleDown } from "react-icons/go";
import Logout from './Logout';
import { useGlobalContext } from '../DataStore/ContextProvider';

const Header = () => {
  const {toggleLogout,islogout}=useGlobalContext();
  

  const storedEmail = localStorage.getItem('user');
  const jsonObj = JSON.parse(storedEmail)
  const userData = jsonObj.user
  const {email}=userData
  


  return (
    <>
    
    <div className='w-[100%] my-[20px] m-auto h-[50px] bg-[white] flex flex-wrap items-center justify-between rounded-sm px-[20px] shadow-lg'>
        <div className='sm:w-[40%] w-[60%]'>
        <div className=' flex items-center w-[400px] h-[40px] p-[10px] border-gray-300 border-solid bg-[#E8F0FE]  justify-between rounded-md text-[#fff]'>
          <input 
          type='text'
          placeholder='Search...'
          className='w-[100%] h-[30px] p-[10px] outline-none bg-transparent'/>
          <span className='w-[20px]'>{<CiSearch />}</span>
        </div>
        </div>
        <div className='w-[40%] flex justify-end items-center'>
        <div className='flex items-center relative cursor-pointer' onClick={toggleLogout}>
          <h4 className='text-[13px]  capitalize mx-[10px] opacity-6'>{email}</h4>
          <span className='ml-[-12px] mt-[3px]'>{<GoTriangleDown />}</span>
          <img src={profile} alt='Profile0' loading='lazy' className='w-[40px] my-[4px] h-[40px] rounded-full border border-gray-300 border-dashed cursor-pointer'/>
          <span className='bg-[green] w-[10px] h-[10px] rounded-full ml-[-6px] mt-[10px]'></span>
        </div>
        </div>
        <div className='flex justify-end w-[100%]'>
        {islogout &&  islogout ? <Logout/> : ''}
        </div>
      </div></>
  )
}

export default Header