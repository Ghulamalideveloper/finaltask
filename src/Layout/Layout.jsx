import React from 'react'
import Header from '../Pravite/Header'
import Users from '../Pravite/Users'
import AddProduct from '../Pravite/AddProduct'


const Layout = () => {
  return (
    <div className='w-full h-screen bg-black flex gap-[0px] flex-wrap relative'>
      <Header/>
      <div className='h-screen w-[22%] flex justify-center items-center'>
        <h3>side menu</h3>
      </div>
      <div className='bg-[pink] w-[78%] flex h-full justify-center items-center'>
        <Users/>
      </div>
      <div className='bg-[blue] w-full'>Footre</div>
    </div>
  )
}

export default Layout