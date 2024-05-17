import React from 'react'
import { Outlet } from 'react-router-dom'
import { useGlobalContext } from '../DataStore/ContextProvider'
import Dashboardcontext from './Dashboardcontext'

const Maincontent = () => {
 const {dashboard} = useGlobalContext()
  return (
    <>
        <div className='w-[78%] p-[20px] flex justify-center items-center'>
          {
            dashboard==="/dashboard"?
            <Dashboardcontext/>
            :<Outlet/>
          }
        
      </div>
    </>
  )
}

export default Maincontent