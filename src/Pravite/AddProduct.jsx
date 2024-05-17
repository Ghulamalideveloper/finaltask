import React from 'react'
import { NavLink } from 'react-router-dom'
import  logo from "../assets/images/logo/logo.png"
import { useGlobalContext } from '../DataStore/ContextProvider'


const AddProduct = () => {
    const {addProductfun,product,adProducthandle,handleImage,userImage,handleFile,productImage} = useGlobalContext()
   
  return (
    <div className='w-full h-full flex justify-center items-center'>
    <div className='w-[400px] bg-[black] text-[#fff]'>
    <div className="flex text-[#fff]
    min-h-full 
    flex-col 
    justify-center 
    px-6 py-12 
    lg:px-8">
    <div className="sm:mx-auto 
    sm:w-full 
    sm:max-w-sm">
    <img src={logo} className="mx-auto 
    h-[100px] 
    w-auto" 
    alt="Your Company" />
    <h2 className="mt-10 
    text-center 
    text-2xl 
    font-bold 
    leading-9 
    tracking-tight 
    text-[#fff]
    uppercase">
    AddProduct
        </h2>
      </div>
      <div className="mt-10 
        sm:mx-auto 
        sm:w-full 
        sm:max-w-sm">
      <form 
     onSubmit={addProductfun}
       className="space-y-6">
          {/* First Name input */}
          <div className='flex gap-[10px] w-full flex-wrap'>
          <div className='w-full md:w-[48%]'>
          <label 
            htmlFor="fullname" 
            className="block 
            text-sm 
            font-medium 
            leading-6 
            text-[#fff]">Product Name</label>
             <div className="mt-2">
              <input  
              type="text" 
              autoComplete="email" 
              required 
                onChange={adProducthandle}
                value={product.name}
                name="name"
                className="block 
              w-full 
              rounded-md 
              border-0 
              py-1.5 
              text-gray-900 
              shadow-sm 
              ring-1 
              ring-inset 
              ring-gray-300 
              placeholder:text-gray-400 
              focus:ring-2 
              focus:ring-inset 
              focus:ring-indigo-600 
              sm:text-sm 
              sm:leading-6 
              px-[10px] bg-[#E8F0FE]"/>
            </div>
          </div>
          <div className='w-full md:w-[48%]'>
            <label
              htmlFor="email" 
              className="block 
              text-sm 
              font-medium 
              leading-6 
              text-[#fff]">product type</label>
              <div className="mt-2">
              <input
              type="text" 
              autoComplete="current-email" 
              required 
              onChange={adProducthandle}
                value={product.type}
                name="type"
              className="block w-full 
              rounded-md 
              border-0 py-1.5 
              text-[black]
              shadow-sm ring-1 
              ring-inset 
              ring-gray-300 
              focus:ring-2 
              focus:ring-inset 
              focus:ring-indigo-600 
              sm:text-sm 
              sm:leading-6 
              p-[10px] bg-[#E8F0FE]"/>
            </div>
          </div>

          </div>

          <div>
            <div 
            className="flex 
            items-center 
            justify-between">
              <label 
              htmlFor="password" 
              className="block 
              text-sm 
              font-medium 
              leading-6 
              text-[#fff]">product price</label>
            </div>
            <div className="mt-2">
              <input 
              type="number" 
              autoComplete="current-password" 
              required 
              onChange={adProducthandle}
              value={product.price}
              name="price"
              className="block w-full 
              rounded-md 
              border-0 
              py-1.5 
              text-gray-900 
              shadow-sm 
              ring-1 
              ring-inset 
              ring-gray-300 
              placeholder:text-gray-400 
              focus:ring-2 
              focus:ring-inset 
              focus:ring-indigo-600 
              sm:text-sm sm:leading-6 
              p-[10px] bg-[#E8F0FE]"/>
            </div>
          </div>
          {/* Email Address input */}

          
          <div>
            <div 
            className="flex 
            items-center 
            justify-between">
              <label
              htmlFor="email" 
              className="block 
              text-sm 
              font-medium 
              leading-6 
              text-[#fff]">product dec</label>
            </div>
            <div className="mt-2">
              <textarea
              autoComplete="current-email" 
              required 
              onChange={adProducthandle}
              value={product.details}
              name="details"
              className="block w-full 
              rounded-md 
              border-0 py-1.5 
              text-gray-900 
              shadow-sm ring-1 
              ring-inset 
              ring-gray-300 
              placeholder:text-gray-400 
              focus:ring-2 
              focus:ring-inset 
              focus:ring-indigo-600 
              sm:text-sm 
              sm:leading-6 
              p-[10px] bg-[#E8F0FE] h-[100px]"/>
            </div>
          </div>
          {/*Password input */}


          <div 
            className="flex 
            items-center 
            justify-between">
              <label 
              htmlFor="password" 
              className="block 
              text-sm 
              font-medium 
              leading-6 
              text-[#fff]">product Image</label>
            </div>

            <img src={logo} className="mx-auto 
                h-[100px] 
                w-auto" 
                alt="Your Company" />
                <input ref={userImage} type='file' className='hidden' onChange={handleImage}
                value={product.url}
                name='url'
                />
                <div className='w-full flex justify-center'>
                <button onClick={handleFile}  className=' bg-gradient-to-br 
            from-purple-900 to-pink-600
            px-3 py-1.5  p-[10px] rounded-md m-auto text-[#fff] w-[40%]'>Uplode File</button>
          </div>
                      
          
          {/* Submit button */}
          <div className='flex gap-[10px]'>
            <button 
            type="submit" 
            className="flex 
            w-[40%] 
            justify-center 
            rounded-md 
            bg-gradient-to-br 
            from-purple-900 to-pink-600
            px-3 py-1.5 
            text-sm 
            font-semibold 
            leading-6 
            text-white 
            shadow-sm 
            focus-visible:outline 
            focus-visible:outline-2 
            focus-visible:outline-offset-2 
            focus-visible:outline-indigo-600">Add Product</button>
            {/* {
              isLoding?<Loder/>:<></>
            } */}
          
          <button className='bg-[green] p-[10px] rounded-md  text-[#fff] w-[40%]'><NavLink to='/users'>Cancel</NavLink></button>
          </div>
        </form>
        <div 
        className='flex 
        justify-center 
        items-center 
        my-[12px]'>
          {/* <p
          className="text-center 
          text-sm 
          text-gray-500">Already have an account ?</p> */}
          <span 
          className="font-semibold 
          leading-6 
          text-pink-600
           hover:text-purple-900 
           mx-[10px]">
            {/* <NavLink to="/Users">Add product</NavLink> */}
          </span>
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default AddProduct