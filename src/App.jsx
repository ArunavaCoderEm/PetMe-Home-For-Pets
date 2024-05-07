import React, { useState } from 'react'
import './CSS/index.css'
import Page from './Page'
import Loader from './Components/Loader'

function App() {

  const [loading,setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2500);

  return (
    <>
    {(loading)  ? 
      <Loader/> :
      <Page/>
    }
    </>
  )
}

export default App
