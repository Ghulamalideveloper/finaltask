import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { CiLock } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { useGlobalContext } from '../DataStore/ContextProvider';

const Logout = () => {
  const{logoutUser}=useGlobalContext()
   
  return (
    <>
    
    <div className='bg-[#ffff] w-[130px] p-[10px] rounded-sm shadow-xl mt-[6px] flex justify-center items-center z-10'>
            <div>
              <nav>
                <ul>
                  <div className='flex items-center py-[8px] hover:bg-[lightgray] rounded-sm'>
                  <span className='mx-[10px] w-[30px] h-[30px] bg-[lightgray] line-clamp-3 text-center rounded-full flex justify-center items-center'>{<CgProfile className='text-[20px]'/>}</span>
                  <li className='flex capitalize text-[16px]'><NavLink>Profile</NavLink></li>
                  </div>
                  <div className='flex items-center py-[8px] hover:bg-[lightgray] rounded-sm'>
                  <span className='mx-[10px] w-[30px] h-[30px] bg-[lightgray] line-clamp-3 text-center rounded-full flex justify-center items-center'>{<CiSettings  className='text-[20px]'/>}</span>
                  <li className='flex capitalize text-[16px]'><NavLink>settings</NavLink></li>
                  </div>
                  <div className='flex items-center py-[8px] '>
                  <li className='flex capitalize text-[16px]  bg-gradient-to-br 
                  from-purple-900 
                  to-pink-600  text-[#fff] p-[6px] px-[8px] rounded-sm'>
                  <span className='mx-[10px] w-[30px] h-[30px] bg-[lightgray] line-clamp-3 text-center rounded-full flex justify-center items-center'>{<CiLock className='text-[20px]'/>}</span>
                    <button onClick={logoutUser}>
                    <NavLink>Logout</NavLink>
                    </button>
                    </li>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
    </>
  )
}

export default Logout