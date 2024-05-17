import React from 'react'
<<<<<<< HEAD
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
=======
import Layout from '../Layout/Layout'

const Dashboard = () => {
  return (
    <Layout/>
>>>>>>> 6a41b5031287c7be5191be2a0fe2211376df7f22
  )
}

export default Dashboard