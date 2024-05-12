import axios from 'axios';
import React, { createContext, useContext, useRef, useState } from 'react'
import { json, useNavigate } from 'react-router-dom';
import { createUser,userlogin} from '../Api/ApiStore';



const AppContext = createContext();
const ContextProvider = ({children}) => {
  const userImage = useRef()
 const navigate = useNavigate();
 const [productImage,setProductImage]=useState()
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



  const [product,setProduct]=useState({
      name: "",
      type: "",
      url: "",
      details: "",
      price: "",
      userId: ""
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
      navigate("/layout")
      setIsLoding(false)
      setError(respance.data.Messege)
    }catch(error) {
      
    } 
  }

  //=====add product function=====//
  const adProducthandle=(e)=>{
    const{name,value}=e.target;
    setProduct((product)=>{
      return{
        ...product,
        [name] : value,
      }
    })
  }

  const handleImage=(e)=>{
    setProductImage(e.target.files[0]);
  }

  const addProductfun=(e)=>{
    e.preventDefault();
  }



  const handleFile=()=>{
    userImage.current.click();
  }



  //===logout user====//
  const logoutuser=()=>{
    localStorage.removeItem("user");
    navigate("/")
    setUserLogin({
      email:"",
      password:"",
    })
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
      addProductfun,
      product,
      adProducthandle,
      handleImage,
      userImage,
      handleFile,
      logoutuser,
     
      }}>
        {children}
    </AppContext.Provider>
  )
}
const useGlobalContext = () => {
    return useContext(AppContext);
}
export  {AppContext, ContextProvider, useGlobalContext}