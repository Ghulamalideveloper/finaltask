import React from 'react'
import "./User.css"
import image from "../assets/images/logo/logo.png"

import {NavLink} from "react-router-dom"

const Users = () => {
  return (
    
    <div className='w-full h-screen flex justify-center items-center flex-wrap'>
    <div className='w-full flex justify-center items-center'>
        <button className='bg-[green] p-[8px] text-[#fff] rounded-md shadow-md'><NavLink to="/AddProduct">Add New User</NavLink> </button>
    </div>
    
        <div className='w-400px bg-[black] p-[10px] rounded-md mt-[-400px]'>
            <div className='w-full h-full text-[#fff]'>
            <table className="w-full p-[10px]">
    <thead className='w-full'>
    <tr>
      <th>name</th>
      <th>type</th>
      <th>Image</th>
      <th>details</th>
      <th>price</th>
      <th>userId</th>
      <th colSpan={6}>Action</th>
    </tr>
  </thead>
  <tbody className='w-full'>
    <tr className='w-full'>
      <td>Shows</td>
      <td>Sports</td>
      <td>
        <img src={image} alt='image' loading='lazey' className='w-[40px] h-[40px] object-cover'/>
      </td>
      <td>This mans shows</td>
      <td>3500</td>
      <td>
        <button className='bg-[red]'>Delete</button>
      </td>
      <td>
        <button className='bg-[green]'>Update</button>
      </td>
      <td>
        <button className='bg-[blue]'>view</button>
      </td>
    </tr>
    <tr className='w-full'>
      <td>Shows</td>
      <td>Sports</td>
      <td><img src={image} alt='image' loading='lazey' className='w-[40px] h-[40px] object-cover'/></td>
      <td>This mans shows</td>
      <td>3500</td>
      <td>
        <button className='bg-[red]'>Delete</button>
      </td>
      <td>
        <button className='bg-[green]'>Update</button>
      </td>
      <td>
        <button className='bg-[blue]'>view</button>
      </td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
    </div>
  )
}

export default Users