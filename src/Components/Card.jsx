import React, { useEffect, useState } from 'react';
import { auth, db } from '../Context/firebase';
import { Link } from 'react-router-dom';

export default function Card({ img, alt, head, desc, price, own, removecartItem }) {
    const [user, setUser] = useState(false);
    const [cart, setCart] = useState(false);
    const [uid, setUid] = useState("");
    const [ca, setCa] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                setUid(currentUser.uid);
                setCart(true);
                setUser(true);

                const userRef = db.collection('users').doc(currentUser.uid);
                const userDoc = await userRef.get();
                if (userDoc.exists) {
                    const userData = userDoc.data();
                    const currentCart = userData.cartArray || [];
                    const itemInCart = currentCart.some(item => item.img === img);
                    setCa(itemInCart);
                }
            } else {
                setCart(false);
                setUser(false);
            }
        });
        return () => unsubscribe();
    }, [img]);

    const carthandle = async () => {
        if (user) {
            const userRef = db.collection('users').doc(uid);
            const newItem = {
                img,
                alt,
                head,
                desc,
                price,
                own,
            };

            try {
                const userDoc = await userRef.get();
                if (userDoc.exists) {
                    console.log('User document exists');
                    const userData = userDoc.data();
                    const currentCart = userData.cartArray || [];
                    const updatedCart = [...currentCart, newItem];
                    await userRef.update({
                        cartArray: updatedCart,
                    });
                } else {
                    console.log('User document does not exist');
                    await userRef.set({ cartArray: [newItem] });
                }
                setCa(true);
                console.log('Item added to cart');
            } catch (error) {
                console.error('Error adding item to cart: ', error);
            }
        } else {
            console.log('User not logged in');
        }
    };

    const handleRemoveCart = async () => {
        try {
            await removecartItem(img);
            setCa(false);
        } catch (error) {
            console.error('Error removing item from cart: ', error);
        }
    };

    return (
        <>
            <div className="w-full max-w-sm sha mx-auto my-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md">
                <div>
                    <img className="p-2 rounded-lg sha w-48 mx-auto" src={img} alt={alt} />
                </div>
                <div className="px-5 pb-5">
                    <div className='mt-2'>
                        <h5 className="text-xl font-semibold tracking-tight text-white">{head}</h5>
                        <h6 className="text-sm font-semibold tracking-tight text-slate-400">{desc}</h6>
                    </div>
                    <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
            </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold mr-2 text-white">Rs. {price}</span>

                        {cart ?  
                            <>
                                {!ca &&
                                    <button onClick={carthandle} className="font-semibold hover:bg-green-500 transition-all duration-200 mb-2 rounded-lg text-sm px-3 py-2.5 text-center bg-green-300 text-black">Add to cart</button>
                                }
                                {ca &&
                                    <button onClick={handleRemoveCart} className="font-semibold hover:bg-green-500 transition-all duration-200 mb-2 rounded-lg text-sm px-3 py-2.5 text-center bg-green-300 text-black">Remove</button>
                                }
                            </>
                            :
                            <Link to='/signin' className="font-semibold hover:bg-green-500 transition-all duration-200 rounded-lg text-sm px-5 py-2.5 text-center bg-green-300 text-black">SignIn for cart</Link>
                        }
                    </div>
                    <span className="text-sm font-bold mr-2 text-white">Own: {own}</span>
                </div>
            </div>
        </>
    );
}
