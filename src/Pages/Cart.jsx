import React, { useEffect, useState } from 'react';
import { auth, db } from '../Context/firebase';
import Cartcard from '../Components/Cartcard';
import Loaders from "../Components/Loaders"

export default function Cart() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const[pay, setpay] = useState("")
  const[pd, setpd] = useState(false)
  const[load, setload] = useState(false)
  const[ord, setord] = useState(false)

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

  const paydone = () => {
    setpd(true);
    setload(true)
    setTimeout(() => {
        setload(false)
    }, 3000);
  }

  const order = async () => {
    setload(true);
    setTotalPrice(0);
    const user = auth.currentUser;
    if (!user) {
        console.error('User not logged in.');
        return;
    }
    const userRef = db.collection('users').doc(user.uid);
    try {
        await userRef.update({
            cartArray: []
        });
        console.log('Cart emptied from database successfully');
        setCartItems([]);
        setload(false);
        setord(true);
    } catch (error) {
        console.error('Error emptying cart from database: ', error);
    }

  }


  const removeCartItem = async (itemId) => {
    const updatedCartItems = cartItems.filter((_, index) => index !== itemId); 
    setCartItems(updatedCartItems);
    const user = auth.currentUser;
    if (!user) {
      console.error('User not logged in.');
      return;
    }
    const userRef = db.collection('users').doc(user.uid);
    try {
      await userRef.update({
        cartArray: updatedCartItems
      });
      console.log('Item removed from cart and database updated successfully');
    } catch (error) {
      console.error('Error removing item from cart and updating database: ', error);
    }
  };

  return (
    <>
      <h1 className='text-center text-4xl my-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800'>Your Cart</h1>
    {(cartItems.length !== 0) && 
    <div className="grid lg:grid-cols-2 sm:grid-cols-1">
    <div className='backdrop-blur-sm bg-white/30 sha m-2 rounded-lg'>
    <h2 className='text-center m-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700'>Ordered Items</h2>
        <>
            {cartItems.map((item, index) => (
                <Cartcard 
                  itemId={index} 
                  head={item.head} 
                  src={item.img} 
                  desc={item.desc} 
                  price={item.price} 
                  key={index} 
                  removeCartItem={removeCartItem}         
                />
          ))}
        </>
     
    </div>
      <div className='backdrop-blur-sm bg-white/30 sha m-2 rounded-lg'>
        <h1 className='text-center m-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700'>Your Checkout Box</h1>
        <h2 className='text-center text-lg text-blue-800'>Your Address</h2>
        <input type="text" placeholder='Enter Your Address & Details' className='sha placeholder-blue-400 text-center text-blue-400 ring-0 rounded-md focus:border-0 focus:outline-none focus:ring-0 w-2/3 m-auto flex my-3 justify-center h-10' required />

        <h2 className='text-center text-lg text-blue-800'>Order Details</h2>
        <ul className='backdrop-blur-sm bg-white/30 rounded-md sha m-3'>
        {cartItems.map((item, index) => (
            <div key={index} className='flex'> 
                <li key={index} className='m-2 w-full text-blue-500 font-semibold'>{item.head}</li>
                <li className='m-2 flex justify-end text text-blue-600 w-full'>Rs.<span className='text-blue-700 font-semibold'>{item.price}</span></li>
            </div>
          ))} 
        </ul>

        <ul className='backdrop-blur-sm bg-white/30 rounded-md sha m-3'>
            <div className='flex'> 
                <li  className='m-2 w-full text-blue-500 font-semibold'>Total Price : </li>
                <li className='m-2 flex justify-end text text-blue-600 w-full'>Rs. <span className='text-blue-700 ml-1 font-semibold'>{totalPrice}</span></li>
            </div>
            <div className='flex'> 
                <li  className='m-2 w-full text-blue-500 font-semibold'>Delivery Charge : </li>
                <li className='m-2 flex justify-end text text-blue-600 w-full'>Rs. <span className='text-blue-700 ml-1 font-semibold'>{(totalPrice / 200).toFixed(2)}</span></li>
            </div>
            <div className='flex'> 
                <li  className='m-2 w-full text-blue-500 font-semibold'>GST : </li>
                <li className='m-2 flex justify-end text text-blue-600 w-full'><span className='text-blue-700 ml-1 font-semibold'>12 %</span></li>
            </div>
            <div className='flex'> 
                <li  className='m-2 w-full text-blue-500 font-semibold'>Discount : </li>
                <li className='m-2 flex justify-end text text-blue-600 w-full'><span className='text-blue-700 ml-1 font-semibold'>3 %</span></li>
            </div>
        </ul>
        <ul className='backdrop-blur-sm bg-white/30 rounded-md sha m-3'>
            <div className='flex'> 
                <li  className='m-2 w-full text-blue-500 font-semibold'>Payable Charge : </li>
                <li className='m-2 flex justify-end text text-blue-600 w-full'>Rs. <span className='text-blue-700 ml-1 font-semibold'>{(((totalPrice * 0.12) + totalPrice + (totalPrice / 200).toFixed(2)) - (0.03 * totalPrice)).toFixed(2)}
                </span></li>
            </div>
        </ul>     
        <ul className='backdrop-blur-sm bg-white/30 rounded-md sha m-3'>
            <div className='flex'> 
                <li  className='m-2 w-full text-blue-500 font-semibold'>Payment Options : </li>
                <li className='m-2 flex justify-end text text-blue-600 w-full'>
                <select 
                    onChange={(e) => {
                        setpay(e.target.value)
                    }}
                    value={pay}
                    id="category" className="w-36 text-center rounded-lg ">
                        <option className='cursor-pointer' disabled >Select Type</option>
                        <option className='cursor-pointer' value="cod">Cash on delivery</option>
                        <option className='cursor-pointer' value="nb">Net banking</option>
                        <option className='cursor-pointer' value="upi">With UPI</option>
                    </select>
                </li>
            </div>
        </ul>
        {pay === "upi" && !pd &&
            <>
            <div className='flex'>
                <input type="text" placeholder='Enter UPI Id here' className='sha placeholder-blue-400 text-center text-blue-400 ring-0 rounded-md focus:border-0 focus:outline-none focus:ring-0 w-2/3 m-auto flex my-3 justify-center h-10' required />     
                <button onClick={paydone} className='m-auto p-2 bg-blue-500 rounded-md sha text-white font-semibold'>Pay Now</button>
            </div>
            </>
        }
        {pay === "nb" && !pd &&
            <>
                <div className='flex'>
                <input type="text" placeholder='Enter Net Banking here' className='sha placeholder-blue-400 text-center text-blue-400 ring-0 rounded-md focus:border-0 focus:outline-none focus:ring-0 w-2/3 m-auto flex my-3 justify-center h-10' required/>     
                <button onClick={paydone} className='m-auto p-2 bg-blue-500 rounded-md sha text-white font-semibold'>Pay Now</button>
            </div>
            </>
        }
        {pd && 
        <>
        {load ?
            <Loaders />
            :
            <div className='backdrop-blur-sm bg-white/30 rounded-md sha m-3'>
            <h1 className='text-center font-semibold text-blue-500 text-xl'>Payment Done Thanks From Petme !!</h1>
            </div>
        }
        </>
        }
        <div className='flex justify-center my-2'>
            {! ord ?
            <button onClick={order} className='m-auto p-2 bg-blue-500 rounded-md sha text-white font-semibold'>Place Order</button>
            : 
            <h1 className='text-center font-semibold text-blue-500 text-xl'>PETME : Order placed, now it's wait time.</h1>
            }
        </div>
      </div>
    </div>
    }
        {!cartItems.length &&
        <div className='backdrop-blur-sm bg-white/30 w-1/2 m-auto rounded-lg'>
        <h1 className='text-3xl text-center my-5 p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800'>Your cart is empty.</h1>
        </div>
        }
    </>
  );
}