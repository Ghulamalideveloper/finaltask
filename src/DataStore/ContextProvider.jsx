import axios from 'axios';
<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
=======
import React, { createContext, useContext, useRef, useState } from 'react'
>>>>>>> 6a41b5031287c7be5191be2a0fe2211376df7f22
import { json, useNavigate } from 'react-router-dom';
import { createUser,getproducts,postApi,userlogin} from '../Api/ApiStore';




const AppContext = createContext();
const ContextProvider = ({children}) => {
<<<<<<< HEAD

 const inputRef = useRef()
=======
  const userImage = useRef()
>>>>>>> 6a41b5031287c7be5191be2a0fe2211376df7f22
 const navigate = useNavigate();
 const [productImage,setProductImage]=useState()
  const [isLoding,setIsLoding]=useState(false);
  const [islogout, setIsLogout] = useState(false);
  const [error,setError]=useState('');
  const [dashboard,setDashboard]=useState('/dashboard');
  const [activeLink, setActiveLink] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [getProduct,setgetProduct]=useState([]);
  const [seletedImage,setSelectedImage]=useState([])
  const [userid,setuserid]=useState()
  const [userToken,setUserToken]=useState()
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

const [addProduct,setAddProduct]=useState({
  name:"",
  type:"",
  details:"",
  price:"",
  image:"",
  // userId:id,
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
<<<<<<< HEAD
      localStorage.setItem('user', JSON.stringify(respance.data));
      console.log(userToken)
=======
      localStorage.setItem('user', JSON.stringify(respance.data))
      navigate("/layout")
>>>>>>> 6a41b5031287c7be5191be2a0fe2211376df7f22
      setIsLoding(false)
      setError(respance.data.Messege) 
      navigate('/dashboard')
      setUserLogin(respance.data)
    }catch(error) {
      navigate("/")
      setError(error.Messege)
    } 
  }

<<<<<<< HEAD



//====logout show hide===//
const toggleLogout= () => {
  setIsLogout(!islogout);
};


//==logout user===//

const logoutUser=()=>{
  localStorage.removeItem('user');
  setUserEmail("")
  navigate('/');
  setUserLogin({
    email:"",
    password:"",
  })
  setIsLogout(false)

}


//===active addproduct navlink====//
const activeAddproduct = ()=>{
  setDashboard('/addproducat')
}


//===active sidebar title navlink====//
const activeSidebartitle = ()=>{
  setDashboard('/dashboard');
}

//===handleSetActiveLink====//
const handleSetActiveLink = (link) => {
  console.log(link)
  setActiveLink(link);

};




//====get products dataapi request===//


const fetchData = async (endPint) => {
  try {
    const response = await fetch(endPint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const result = await response.json();
    setgetProduct(result)
  } catch (error) {
    setError(error.message);
  }
};


useEffect(()=>{
  fetchData(getproducts)
},[]);




//=====add product====//


const handleaddproduct =(e)=>{
  const {name,value}=e.target
  setAddProduct((addproducat)=>{
    return{
      ...addproducat,
      [name] : value,
    }
  })
}

//====uplode image===//
const handleImageuplode=()=>{
  inputRef.current.click()
}
const productImage=(event)=>{
  const file = event.target.files[0];
  setAddProduct((prevProduct) => ({
      ...prevProduct,
      image:file,
   }));
}
//====uplode product===//
const addProductsunmit=async(e)=>{
  e.preventDefault();
  try {
      const respnace  = await axios.post(postApi,addProduct,{
        headers:{
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    })
    navigate('/dashboard');
    setAddProduct({
      name:"",
      type:"",
      details:"",
      price:"",
      image:"",
      userId:id,
    })
    console.log(respnace)
  } catch (error) {
    console.log(error)
  }
}
=======
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

>>>>>>> 6a41b5031287c7be5191be2a0fe2211376df7f22

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
<<<<<<< HEAD
      toggleLogout,
      islogout,
      logoutUser,
      dashboard,
      activeAddproduct,
      activeSidebartitle,
      handleSetActiveLink,
      activeLink,
      userEmail,
      getProduct,
      addProductsunmit,
      handleaddproduct,
      addProduct,
      handleImageuplode,
      inputRef,
      productImage,
=======
      addProductfun,
      product,
      adProducthandle,
      handleImage,
      userImage,
      handleFile,
      logoutuser,
     
>>>>>>> 6a41b5031287c7be5191be2a0fe2211376df7f22
      }}>
        {children}
    </AppContext.Provider>
  )
}
const useGlobalContext = () => {
    return useContext(AppContext);
}
export  {AppContext, ContextProvider, useGlobalContext}