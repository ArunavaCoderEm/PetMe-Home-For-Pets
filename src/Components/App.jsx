import { useState } from 'react'
import Nav from '../Components/Nav'
import Caraousal from '../Components/Caraousal'
import  '../CSS/index.css'

function App() {
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
    <Caraousal/>
    </>
  )
}

export default App
