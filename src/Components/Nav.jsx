import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../Context/firebase';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [menu, setMenu] = useState('home');
  const[name, setname] = useState("")
  const [width, setWidth] = useState(668);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [user, setUser] = useState(null); 
  const nav = useNavigate();
  const handlelogout = () => {
    auth.signOut()
    .then(() => {
      setUser(null);
      nav('/login');
    })
    .catch((error) => {
      console.error('Error while logging out:', error);
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);        
        const userDoc = await db.collection('users').doc(currentUser.uid).get();
          const userData = userDoc.data();
          setname(userData.username);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []); 

  useEffect(() => {
    if (user) {
      nav('/'); 
    }
  }, [user]);

  window.addEventListener("resize", function(e) {
    setWidth(document.body.clientWidth);
  })  

  return (
    <nav className={`${(width < 667) ? 'bg-blue-950' : 'bg-blue-950'} py-2`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <Link to="/" onClick={() => setMenu('home')} className="flex">
              <img src='./logopet.png' alt='logo' className='w-12 h-auto' />
              <h2 className='text-3xl p-1 font-bold text-white cursor-pointer'><span className='hover:text-green-300 transition-all duration-200'>PetMe</span></h2>
            </Link>
          <div className="flex items-center m-auto">
            <div className="hidden md:block ml-auto">
              <div className="flex items-center space-x-4 text-center">
                <Link to='/' className={`text-white transition-all duration-300 px-3 py-2 rounded-md text-md font-medium ${menu === 'home' ? 'bg-gradient-to-b from-blue-500 to-blue-900' : ''}`} onClick={() => setMenu('home')}><span className='transition-all duration-200 hover:text-green-300'>Home</span></Link>
                <Link to='/about' className={`text-white transition-all duration-300 hover:text-black px-3 py-2 rounded-md text-md font-medium ${menu === 'about' ? 'bg-gradient-to-b from-blue-500 to-blue-900' : ''}`} onClick={() => setMenu('about')}><span className='transition-all duration-200 hover:text-green-300'>About</span></Link>
                <Link to='/sell' className={`text-white transition-all duration-300 px-3 py-2 rounded-md text-md font-medium ${menu === 'sell' ? 'bg-gradient-to-b from-blue-500 to-blue-900' : ''}`} onClick={() => setMenu('sell')}><span className='transition-all duration-200 hover:text-green-300'>Sell Pet</span></Link>
                <Link to='/features' className={`text-white transition-all duration-300 hover:text-red-500 px-3 py-2 rounded-md text-md font-medium ${menu === 'features' ? 'bg-gradient-to-b from-blue-500 to-blue-900' : ''}`} onClick={() => setMenu('features')}><span className='transition-all duration-200 hover:text-green-300'>Features</span></Link>
                <Link to='/contact' className={`text-white transition-all duration-300 hover:text-red-500 px-3 py-2 rounded-md text-md font-medium ${menu === 'contact' ? 'bg-gradient-to-b from-blue-500 to-blue-900' : ''}`} onClick={() => setMenu('contact')}><span className='transition-all duration-200 hover:text-green-300'>Contact</span></Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6" onClick={()=> setMenu("")}>
              {!user ? 
                <>
                <Link to='/signin' className="text-white bg-gradient-to-b from-blue-600 to-blue-900 px-3 py-[14px] rounded-md text-md font-medium flex">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 mx-2' viewBox="0 0 448 512"><path fill="white" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                  <span className='transition-all duration-200 hover:text-green-300'>Sign-Up</span></Link>
                  </>

                  :

                  <>
                   <div className="flex mx-2 text-white bg-gradient-to-b from-blue-600 to-blue-900 px-2 rounded-md text-md font-medium hover:fill-sky-400">
                   <svg xmlns="http://www.w3.org/2000/svg" className='w-4 mx-2' viewBox="0 0 448 512"><path fill="white" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                      <h2 className='text-white p-3 hover:text-red-400'><span className='transition-all duration-200 hover:text-green-300'>{name}</span></h2>
                  </div>

                   <Link to='/cart' className="flex mx-2 text-white bg-gradient-to-b from-blue-600 to-blue-900 px-2 rounded-md text-md font-medium hover:fill-sky-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-auto' viewBox="0 0 576 512"><path fill='white' d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                      <h1 className='text-white p-3 hover:text-red-400'><span className='transition-all duration-200 hover:text-green-300'>Cart</span></h1>
                  </Link>

                  <button onClick={handlelogout} className="text-white bg-gradient-to-b from-blue-600 to-blue-900 px-3 py-[14px] rounded-md text-md font-medium flex">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 mx-2' viewBox="0 0 512 512"><path fill='white' d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                  <span className='transition-all duration-200 hover:text-green-300'>Log-Out</span></button>
                  </>
                }
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              <svg className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <svg className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden m-auto`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 m-auto text-center mt-5">
          <Link to='/' className={`text-white  block px-3 py-2 rounded-md text-base font-medium ${(menu === 'home' ? 'bg-gradient-to-b from-blue-600 to-blue-900' : '')}`} onClick={()=>setMenu('home')}><span className='hover:text-green-300'>Home</span></Link>
          <Link to='/about' className={`text-white  block px-3 py-2 rounded-md text-base font-medium ${(menu === 'about' ? 'bg-gradient-to-b from-blue-600 to-blue-900' : '')}`} onClick={()=>setMenu('about')}><span className='hover:text-green-300'>About</span></Link>
          <Link to='/sell' className={`text-white  block px-3 py-2 rounded-md text-base font-medium ${(menu === 'sell' ? 'bg-gradient-to-b from-blue-600 to-blue-900' : '')}`} onClick={()=>setMenu('sell')}><span className='hover:text-green-300'>Sell Pet</span></Link>
          <Link to='/features' className={`text-white  block px-3 py-2 rounded-md text-base font-medium ${(menu === 'features' ? 'bg-gradient-to-b from-blue-600 to-blue-900' : '')}`} onClick={()=>setMenu('features')}><span className='hover:text-green-300'>Features</span></Link>
          <Link to='/contact' className={`text-white  block px-3 py-2 rounded-md text-base font-medium ${(menu === 'contact' ? 'bg-gradient-to-b from-blue-600 to-blue-900' : '')}`} onClick={()=>setMenu('contact')}><span className='hover:text-green-300'>Contact</span></Link>
        </div>
        <div className="pt-4 pb-3 m-auto">
          <div className="flex items-center px-5 justify-center align-middle">
          <div className="m-1 flex items-center md:ml-6" onClick={()=> setMenu("")}>
          {!user ? 
                <>
                <Link to='/signin' className="text-white bg-gradient-to-b from-blue-600 to-blue-900 px-3 py-[14px] rounded-md text-md font-medium flex">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 mx-2' viewBox="0 0 448 512"><path fill="white" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                  <span className='transition-all duration-200 hover:text-green-300'>Sign-Up</span></Link>
                  </>

                  :

                  <>
                   <div>
                    <div className="flex m-2 text-white bg-gradient-to-b from-blue-600 to-blue-900 px-2 rounded-md text-md font-medium hover:fill-sky-400">
                   <svg xmlns="http://www.w3.org/2000/svg" className='w-4 mx-2' viewBox="0 0 448 512"><path fill="white" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                      <h2 className='text-white p-3 hover:text-red-400'><span className='transition-all duration-200 hover:text-green-300'>{name}</span></h2>
                  </div>

                   <Link to='/cart' className="flex mx-2 text-white bg-gradient-to-b from-blue-600 to-blue-900 px-2 rounded-md text-md font-medium hover:fill-sky-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-auto' viewBox="0 0 576 512"><path fill='white' d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                      <h1 className='text-white p-3 hover:text-red-400'><span className='transition-all duration-200 hover:text-green-300'>Cart</span></h1>
                  </Link>
                  </div>

                  <button onClick={handlelogout} className="text-white bg-gradient-to-b from-blue-600 to-blue-900 px-3 py-[14px] rounded-md text-md font-medium flex">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 mx-2' viewBox="0 0 512 512"><path fill='white' d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                  <span className='transition-all duration-200 hover:text-green-300'>Log-Out</span></button>
                  </>
                }
            </div>
            </div>
        </div>
      </div>
    </nav>
  );
}
