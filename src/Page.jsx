import React from 'react'
import Navbar from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Search from './Components/Search'

export default function Page() {
  return (
    <>
    <Navbar/>
    <Search/>
    <Routes>
      <Route path='/signin' element={<Signup/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </>
  )
}
