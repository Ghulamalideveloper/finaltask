import React from 'react'
import {Routes,Route} from "react-router-dom";
import Login from './Pages/login/Login';
import Signup from './Pages/Signup/Signup';
import Dashboard from './Pravite/Dashboard';
import Errorpage from "./Pages/ErrorPage/Errorpage"
import Addproducat from './Pravite/Addproducat';
import Praevate from './Praevate';
import Viewproducts from './Pravite/Viewproducts';
import Updateproduct from './Pravite/Updateproduct';
import Productdetail from './Pravite/Productdetail';




const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='*' element={<Errorpage/>}/>
    <Route  element={<Praevate/>}>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/addproducat' element={<Addproducat/>}/>
    <Route path='/viewproducts' element={<Viewproducts/>}/>
    <Route path='/productdetails' element={<Productdetail/>}/>
    <Route path='/updateproduct' element={<Updateproduct/>}/>
    </Route>
   </Routes>
  )
}

export default App