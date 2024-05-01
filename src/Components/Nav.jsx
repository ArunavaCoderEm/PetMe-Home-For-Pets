import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [menu, setMenu] = useState('home');
  
  const [width, setWidth] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  window.addEventListener("resize", function(e) {
    setWidth(document.body.clientWidth);
  })  

  return (
    <nav className={`${(width < 667) ? 'bg-blue-900' : 'backdrop-blur-sm bg-blue-900/30'} py-2`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <div className="flex">
              <img src='./logopet.png' alt='logo' className='w-12 h-auto' />
              <h2 className='text-3xl p-1 font-bold text-white cursor-pointer'>Petme</h2>
            </div>
          <div className="flex items-center m-auto">
            <div className="hidden md:block ml-auto">
              <div className="flex items-center space-x-4 text-center">
                <Link to='/' className={`text-white transition-all duration-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium ${menu === 'home' ? 'bg-gradient-to-b from-blue-500 to-blue-900' : ''}`} onClick={() => setMenu('home')}>Home</Link>
                <Link to='/about' className={`text-white transition-all duration-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium ${menu === 'about' ? 'bg-gradient-to-b from-blue-500 to-blue-900' : ''}`} onClick={() => setMenu('about')}>About</Link>
                <Link to='/' className={`text-white transition-all duration-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium ${menu === 'sell' ? 'bg-gradient-to-b from-blue-500 to-blue-900' : ''}`} onClick={() => setMenu('sell')}>Sell Pet</Link>
                <Link to='/' className={`text-white transition-all duration-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium ${menu === 'features' ? 'bg-gradient-to-b from-blue-500 to-blue-900' : ''}`} onClick={() => setMenu('features')}>Features</Link>
                <Link to='/' className={`text-white transition-all duration-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium ${menu === 'contact' ? 'bg-gradient-to-b from-blue-500 to-blue-900' : ''}`} onClick={() => setMenu('contact')}>Contact</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
                <Link to='/cart' className="flex mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-auto' viewBox="0 0 576 512"><path fill='white' d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    <h1 className='text-white p-3 hover:text-red-400'>Cart</h1>
                </Link>
              <Link to='/' className="text-white bg-gradient-to-b from-blue-600 to-blue-900 hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              <svg className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <svg className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden m-auto`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 m-auto text-center">
          <Link to='/' className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to='/about' className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
          <Link to='/' className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">Services</Link>
          <Link to='/' className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">Pricing</Link>
          <Link to='/' className="text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
        </div>
        <div className="pt-4 pb-3">
          <div className="flex items-center px-5">
            <div className="m-auto mb-2">
              <Link to='/' className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-base font-medium">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
