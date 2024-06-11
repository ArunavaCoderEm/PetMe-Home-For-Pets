import React from 'react';
import Navbar from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Search from './Components/Search'
import Footer from './Components/Footer'
import Sellpet from './Pages/Sellpet'
import Details from './Pages/Details';
import Categories from './Pages/Categories';
import Cart from './Pages/Cart';

export default function Page() {

  return (
    <div className='bg-gradient-to-b from-blue-200 to-blue-500'>
    <Navbar/>
    <Search/>
    <Routes>
      <Route path='/signin' element={<Signup/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/sell' element={<Sellpet/>}></Route>
      <Route path='/details/:res' element={<Details/>}></Route>
      <Route path='/category/:id' element={<Categories/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    <Footer/>
    </div>
  )
}
