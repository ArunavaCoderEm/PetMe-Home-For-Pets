import React from 'react'
import Navbar from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Search from './Components/Search'
import Footer from './Components/Footer'
import Sellpet from './Pages/Sellpet'

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
    </Routes>
    <Footer/>
    </div>
  )
}
