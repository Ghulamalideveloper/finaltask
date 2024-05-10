import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { json, useNavigate } from 'react-router-dom';
import { createUser,userlogin} from '../Api/ApiStore';



const AppContext = createContext();




const ContextProvider = ({children}) => {
 const navigate = useNavigate();
  const [isLoding,setIsLoding]=useState(false);
  const [error,setError]=useState('')
  const [newuser,setNewUser]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  });

  const [userLogin,setUserLogin]=useState({
    email:"",
    password:"",
  })



  const createaccount=(e)=>{
    const {name,value}=e.target
    setNewUser((newuser)=>{
      return{
        ...newuser,
        [name]:value,
      }
    })
  }
  const submitForm = async(e) => {
    e.preventDefault();
    setIsLoding(true)
    try {
        const response = await axios.post(`${createUser}`,newuser);
        setIsLoding(false)
        setNewUser({
          firstName:"",
          lastName:"",
          email:"",
          password:""
        });
        navigate("/")
        console.log(response.data)
    } catch (error) {
       
    }
}


const  userlogininput=(e)=>{
  const {name,value}=e.target
  setUserLogin((userLogin)=>{
    return{
      ...userLogin,
      [name]:value,
    }
  })
}


  const submituserlogin=async(e)=>{
    e.preventDefault();
    setIsLoding(true)
    try {
      const respance = await axios.post(`${userlogin}`,{
        email:userLogin.email,
        password:userLogin.password,
      })
      localStorage.setItem('user', JSON.stringify(respance.data))
      setIsLoding(false)
      setError(respance.data.Messege)
    }catch(error) {
      
    } 
  }

  return (
    <AppContext.Provider value={{
      newuser,
      createaccount,
      submitForm,
      isLoding,
      userLogin,
      submituserlogin,
      userlogininput,
      error,
      }}>
        {children}
    </AppContext.Provider>
  )
}
const useGlobalContext = () => {
    return useContext(AppContext);
}
export  {AppContext, ContextProvider, useGlobalContext}