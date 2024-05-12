import React from 'react'
import {Routes,Route} from "react-router-dom";
import Login from './Pages/login/Login';
import Signup from './Pages/Signup/Signup';
import Pravite from './Auth/Pravite';
import Dashboard from './Pravite/Dashboard';
import Users from './Pravite/Users';
import AddProduct from './Pravite/AddProduct';


const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route element={<Pravite/>}>
      <Route path='/dashboard' element={<Dashboard/>}/> 
      <Route path='/products' element={<Users/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
    </Route>
   </Routes>
  )
}

export default App