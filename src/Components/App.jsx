import { useState } from 'react'
import Nav from '../Components/Nav'
import Contact from '../Components/Contact'
import Search from '../Components/Search'
import Caraousal from '../Components/Caraousal'
import  '../CSS/index.css'
import { Route,Routes } from 'react-router-dom';

function App() {

  // caraousal
  onload  = start;
  function start(){	
  var i = 1;
  function Move(){ 	
    i = (i%4)+1; 
    document.getElementById('i'+i).checked = true;
  }
  setInterval(Move,3000);
  }

  return (
    <>
      <Nav/>
      <Search/>
      <Routes>  
        <Route  path="/"  element={<Caraousal/>}></Route>      
        <Route path="/contact"  element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
