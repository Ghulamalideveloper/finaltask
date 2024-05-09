import React from 'react'
import { useGlobalContext } from '../../DataStore/ContextProvider'


const Login = () => {
    const {name}=useGlobalContext();
  return (
    <div>
        Login

        <h2>Welcome user {name}</h2>

    </div>
  )
}

export default Login