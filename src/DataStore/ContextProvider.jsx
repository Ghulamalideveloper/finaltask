import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()


const ContextProvider = ({children}) => {
    const [name,setName]=useState("Ghulam ali")
  return (
    <AppContext.Provider value={{name}}>
        {children}
    </AppContext.Provider>
  )
}
const useGlobalContext = () => {
    return useContext(AppContext);
}
export  {AppContext, ContextProvider, useGlobalContext}