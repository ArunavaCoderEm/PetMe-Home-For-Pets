import React from 'react'
import Navbar from '../Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'

export default function Page() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/signin' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </>
  )
}
