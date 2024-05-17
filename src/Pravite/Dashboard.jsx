import React from 'react'
import "./dashboard.css"

import { Navigate } from 'react-router-dom';
import Header from './Header';
import Sidemenu from './Sidemenu';
import Footer from "./Footer"
import Maincontent from './Maincontent'


const Dashboard = () => {
  const user = localStorage.getItem('user');
  const user_auth = JSON.parse(user)
  return(
    <>
    {
      user_auth?.access_token?
      <>
       <div className='w-[90%] m-auto h-full flex justify-center items-center'>
      <div className='w-full h-[100%]  relative flex flex-wrap gap-[8px]'>
      <Header/>
      <Sidemenu/>
      <Maincontent/>
      <Footer/>
      </div>
      </div>
      </>
      :<Navigate to="/"></Navigate>
    }

    </>
  )
}

export default Dashboard