import React from 'react'
import productimage from '../assets/images/profile/profile.jpg'
import { useGlobalContext } from '../DataStore/ContextProvider'
import { NavLink } from 'react-router-dom'


const Addproducat = () => {
 const{addProductsunmit,handleaddproduct,addProduct,handleImageuplode,inputRef,productImage,activeSidebartitle}=useGlobalContext()

  return (
    <>
    <div className='w-full flex justify-center items-center'>
      <div className='w-[80%] bg-[#ffff] p-[20px] rounded-sm'>
        <form onSubmit={addProductsunmit}>

        <div className='relative w-[100%] flex gap-[20px] flex-wrap'>
          <div className='md:w-[48%] my-[2px]'>
          <label htmlFor="name" className='w-full uppercase text-[12px] font-bold mb-[10px]'>product name</label>
          <input type='text' className='w-full outline-none h-[45px] bg-[#E8F0FE] rounded-md shadow-sm px-[12px]' 
          required
          onChange={handleaddproduct}
          value={addProduct.name}
          name='name'/>
          </div>
          <div className='md:w-[48%] my-[2px]'>
          <label htmlFor="name" className='w-full uppercase text-[12px] font-bold mb-[10px]'>product type</label>
          <input type='text' className='w-full outline-none h-[45px] bg-[#E8F0FE] rounded-md shadow-sm px-[12px]'
          required
          onChange={handleaddproduct}
          value={addProduct.type}
          name='type'/>
          </div>

          <div className='md:w-[100%] my-[2px]'>
          <label htmlFor="name" className='w-full uppercase text-[12px] font-bold mb-[10px]'>product price</label>
          <input type='number' className='w-full outline-none h-[45px] bg-[#E8F0FE] rounded-md shadow-sm px-[12px]'
          onChange={handleaddproduct}
          value={addProduct.price}
          name='price'/>
          </div>

          <div className='md:w-[100%] my-[2px]'>
          <label htmlFor="name" className='w-full uppercase text-[12px] font-bold mb-[10px]'>product details</label>
          < textarea className='w-full outline-none h-[100px] bg-[#E8F0FE] rounded-md shadow-sm p-[12px]'
          onChange={handleaddproduct}
          value={addProduct.details}
          name='details'/>
          </div>

          <div className='md:w-[100%] my-[2px]'>
          <label htmlFor="name" className='w-full text-center uppercase text-[12px] font-bold mb-[10px] flex justify-center'>product image</label>
          <div className='w-[150px] h-[150px] bg-[#E8F0FE] m-auto p-[10px] border border-gray-300 border-dashed'>
            <img src={productimage} alt='productImage' loading='lazy'/>
            <input type='file' onChange={productImage} ref={inputRef} className='hidden'/>
          </div>
          <div className='flex justify-center items-center my-[12px]'>
            <button 
            onClick={handleImageuplode}
            className='bg-[#E8F0FE] p-[6px] px-[16px] rounded-md uppercase'>Chooce Image</button>
          </div>
          </div>
          <div className='md:w-[100%] my-[2px]'>
          <div className='flex justify-start items-center my-[12px] gap-[12px]'>
            <button
            type='submit'
             className='  bg-gradient-to-br 
            from-purple-900 
            to-pink-600 text-[#fff] p-[6px] px-[16px] rounded-md uppercase'>Add product</button>
            <button onClick={activeSidebartitle} className='bg-[#E8F0FE] p-[6px] px-[16px] rounded-md uppercase'><NavLink to='/dashboard'>cancel</NavLink></button>
          </div>
          </div>
          </div>
        </form>
        </div>
      </div>
    </>
    
  )
}

export default Addproducat