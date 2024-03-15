import { useState } from 'react'
import Nav from '../Components/Nav'
import Contact from '../Components/Contact'
import Search from '../Components/Search'
import Caraousal from '../Components/Caraousal'
import  '../CSS/index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      <Router>
        <Nav/>
        <Caraousal/>
        <Search/>
        <Switch>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
