import React from 'react';
import logo from "../../assets/images/logo/logo.png";
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../DataStore/ContextProvider';
import Loder from '../lodar/Loder';

const Signup = () => {
  const {newuser,createaccount,submitForm,isLoding}=useGlobalContext()
  return (
    <div className="flex 
    w-[100%]
    item-center
    justify-center 
    px-6 py-12 
    lg:px-8">
      <div className='bg-[#fff] w-[350px] p-[20px] rounded-sm'>
    <div className="sm:mx-auto 
    sm:w-full 
    sm:max-w-sm">
    <img className="mx-auto 
    h-[100px] 
    w-auto" 
    src={logo} 
    alt="Your Company" />
    <h2 className="mt-10 
    text-center 
    text-2xl 
    font-bold 
    leading-9 
    tracking-tight 
    text-gray-900 
    uppercase">
    Create  your account
        </h2>
      </div>
      <div className="mt-10 
        sm:mx-auto 
        sm:w-full 
        sm:max-w-sm">
      <form 
      onSubmit={submitForm}
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
            text-gray-900">First Name</label>
             <div className="mt-2">
              <input  
              type="text" 
              autoComplete="email" 
              required 
              onChange={createaccount}
              value={newuser.firstName}
              name="firstName"
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
              text-gray-900">Last Name</label>
              <div className="mt-2">
              <input
              type="text" 
              autoComplete="current-email" 
              required 
              onChange={createaccount}
              value={newuser.lastName}
              name="lastName"
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
              p-[10px] bg-[#E8F0FE]"/>
            </div>
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
              text-gray-900">Email Address</label>
            </div>
            <div className="mt-2">
              <input
              type="email" 
              autoComplete="current-email" 
              required 
              onChange={createaccount}
              value={newuser.email}
              name="email"
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
              p-[10px] bg-[#E8F0FE]"/>
            </div>
          </div>
          {/*Password input */}
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
              text-gray-900">Create Password</label>
            </div>
            <div className="mt-2">
              <input 
              type="password" 
              autoComplete="current-password" 
              required 
              onChange={createaccount}
              value={newuser.password}
              name="password"
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
          {/* Submit button */}
          <div>
            <button 
            type="submit" 
            className="flex 
            w-full 
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
            focus-visible:outline-indigo-600">Signup</button>
            {
              isLoding?<Loder/>:<></>
            }
          
          </div>
        </form>
        <div 
        className='flex 
        justify-center 
        items-center 
        my-[12px]'>
          <p
          className="text-center 
          text-sm 
          text-gray-500">Already have an account ?</p>
          <span 
          className="font-semibold 
          leading-6 
          text-pink-600
           hover:text-purple-900 
           mx-[10px]">
            <NavLink to="/">Login</NavLink>
          </span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Signup;
