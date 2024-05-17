import React from 'react'
import {Routes,Route} from "react-router-dom";
import Login from './Pages/login/Login';
import Signup from './Pages/Signup/Signup';
<<<<<<< HEAD
import Dashboard from './Pravite/Dashboard';
import Errorpage from "./Pages/ErrorPage/Errorpage"
import Addproducat from './Pravite/Addproducat';
import Praevate from './Praevate';
import Viewproducts from './Pravite/Viewproducts';
import Updateproduct from './Pravite/Updateproduct';
import Productdetail from './Pravite/Productdetail';


=======
import Pravite from './Auth/Pravite';
import Dashboard from './Pravite/Dashboard';
import Users from './Pravite/Users';
import AddProduct from './Pravite/AddProduct';
>>>>>>> 6a41b5031287c7be5191be2a0fe2211376df7f22


const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
<<<<<<< HEAD
    <Route path='*' element={<Errorpage/>}/>
    <Route  element={<Praevate/>}>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/addproducat' element={<Addproducat/>}/>
    <Route path='/viewproducts' element={<Viewproducts/>}/>
    <Route path='/productdetails' element={<Productdetail/>}/>
    <Route path='/updateproduct' element={<Updateproduct/>}/>
=======
    <Route element={<Pravite/>}>
      <Route path='/dashboard' element={<Dashboard/>}/> 
      <Route path='/products' element={<Users/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
>>>>>>> 6a41b5031287c7be5191be2a0fe2211376df7f22
    </Route>
   </Routes>
  )
}

export default App