import React from 'react'
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../DataStore/ContextProvider';
import Dashboard from '../Pravite/Dashboard';


const Pravite = () => {
    const {logoutuser}=useGlobalContext()
   const key = JSON.parse(localStorage.getItem("user"))
  return (
    <div>
    {
        key?.access_token?<Dashboard/>:<Navigate to="/"></Navigate>
    }
        
    </div>
  )
}

export default Pravite