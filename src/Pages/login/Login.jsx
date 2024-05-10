import React from 'react';
import { useGlobalContext } from '../../DataStore/ContextProvider';
import logo from "../../assets/images/logo/logo.png";
import { NavLink } from 'react-router-dom';
import Loder from '../lodar/Loder';


const Login = () => {
  const {userLogin,submituserlogin,userlogininput,isLoding,error}=useGlobalContext();
  return (
    <div className="flex 
    min-h-full 
    flex-col 
    justify-center 
    px-6 py-12 
    lg:px-8">
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
    text-gradient from-purple-pink
    uppercase">
    Login in your account
        </h2>
      </div>
      <div className='w-full flex justify-center'>
            <h4 className='text-[red] capitalize'>{error}</h4>
          </div>
      <div className="mt-10 
        sm:mx-auto 
        sm:w-full 
        sm:max-w-sm">
        <form onSubmit={submituserlogin} 
        className="space-y-6">
          <div>
            {/* Email Address input */}
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
              <input id="email"
               type="email" 
               autoComplete="current-email" 
               required 
               onChange={userlogininput}
               value={userLogin.email}
               name="email"
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
                p-[10px] bg-[#E8F0FE]"/>
            </div>
          </div>
          <div>
            {/* Password input */}
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
              text-gray-900">Password</label>
            </div>
            <div className="mt-2">
              <input
               type="password" 
               onChange={userlogininput}
               value={userLogin.password}
               name='password'
               autoComplete="current-password" 
               required 
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
          {/* Submit button */}
          <div className='form_btn'>
            <button type="submit" 
            className="flex
            w-full 
            justify-center 
            rounded-md 
            bg-gradient-to-br 
            from-purple-900 
            to-pink-600 
            px-3 
            py-1.5 
            text-sm 
            font-semibold 
            leading-6 
            text-white 
            shadow-sm 
            hover:bg-green-500">Login</button>
            {
              isLoding?<Loder/>:<></>
            }
          </div>
        </form>
        <div className='flex 
        justify-center 
        items-center 
        my-[12px]'>
          <p 
          className="text-center 
          text-sm 
          text-gray-500">New member</p>
          <span className="font-semibold 
          leading-6 
        text-pink-600 
        hover:text-purple-900 
        mx-[10px]">
        <NavLink to="/signup">Create Account</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
