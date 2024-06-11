import React, { useEffect, useState } from 'react';
import { auth, db } from '../Context/firebase';
import Cartcard from '../Components/Cartcard';

export default function Cart() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => total + parseInt(item.price), 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchCartItems(currentUser.uid);
      } else {
        setUser(null);
        setCartItems([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchCartItems = async (uid) => {
    const userRef = db.collection('users').doc(uid);

    try {
      const userDoc = await userRef.get();
      if (userDoc.exists) {
        const userData = userDoc.data();
        setCartItems(userData.cartArray || []);
      } else {
        console.log('No cart found for this user');
      }
    } catch (error) {
      console.error('Error fetching cart items: ', error);
    }
  };

  return (
    <>
      <h1 className='text-center text-4xl my-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800'>Your Cart</h1>
    <div className="grid lg:grid-cols-2 sm:grid-cols-1">
    <div>
      {(cartItems.length != 0) && 
        <>
            {cartItems.map((item, index) => (
                <Cartcard head={item.head} src={item.img} desc={item.desc} price={item.price} key={index}/>
          ))}
        </>
      }
    </div>
      <div className='backdrop-blur-sm bg-white/30 sha m-2 rounded-lg'>
        <h1 className='text-center m-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700'>Your Checkout Box</h1>
        <h2 className='text-center text-lg text-blue-800'>Your Address</h2>
        <input type="text" placeholder='Enter Your Address & Details' className='sha placeholder-blue-400 text-center text-blue-400 ring-0 rounded-md focus:border-0 focus:outline-none focus:ring-0 w-2/3 m-auto flex my-3 justify-center h-10' />

        <h2 className='text-center text-lg text-blue-800'>Order Details</h2>
        <ul className='backdrop-blur-sm bg-white/30 rounded-md sha m-3'>
        {cartItems.map((item, index) => (
            <div className='flex'>
                <li key={index} className='m-2 w-full font-semibold'>{item.head}</li>
                <li className='m-2 flex justify-end text text-blue-600 w-full'>Rs.<span className='text-blue-700 font-semibold'>{item.price}</span></li>
            </div>
          ))} 
        </ul>
          <h1>Total Price : {totalPrice}</h1>
      </div>
    </div>
        {!cartItems.length &&
        <div className='backdrop-blur-sm bg-white/30 w-1/2 m-auto rounded-lg'>
        <h1 className='text-3xl text-center my-5 p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800'>Your cart is empty.</h1>
        </div>
        }
    </>
  );
}