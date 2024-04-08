import React from 'react'
import Contact from './Contact'
import Sign from './Sign'
import Home from './Home';
import '../CSS/index.css';
import {Routes,Route} from 'react-router-dom';

export default function Pages() {
  return (
    <Routes>  
        <Route  path="/"  element={<Home/>}></Route>      
        <Route path="/contact"  element={<Contact/>} />
        <Route path="/signin"  element={<Sign/>} />
    </Routes>
  )
}
