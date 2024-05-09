import React from 'react'
import {Routes,Route} from "react-router-dom";
import Login from './Pages/login/Login';
import Signup from './Pages/Signup/Signup';

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
   </Routes>
  )
}

export default App