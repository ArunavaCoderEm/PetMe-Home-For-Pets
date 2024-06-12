import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { auth, db } from '../Context/firebase';
import Loaders from '../Components/Loaders';

export default function PetDetails() {

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [pet, setPet] = useState("");
  const [cart, setCart] = useState([]);
  const [ci, setci] = useState(false);
  const [user, setUser] = useState(null);
  const [us, setus] = useState(false)

  const params = useParams();

  useEffect(() => {
    setPet(params.res);
  }, [params.res]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setus(true)
        setUser(currentUser.uid);
        const userRef = db.collection('users').doc(currentUser.uid);
        const userDoc = await userRef.get();
        if (userDoc.exists) {
          const userData = userDoc.data();
          const currentCart = userData.cartArray || [];
          const itemInCart = currentCart.some(item => item.img === data[0]?.imgurl);
          setci(itemInCart);
          setCart(currentCart)
          console.log(cart)
        }
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [data]);

  useEffect(() => {
    const fetchPets = async () => {
      if (!pet) return; 
      try {
        setLoad(true);
        const petSnapshot = await db.collection('Pet').where('tag', '==', pet).get();
        const petData = petSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(petData);
        setLoad(false);
      } catch (error) {
        console.error('Error fetching pets:', error);
        setLoad(false);
      }
    };
    fetchPets();
  }, [pet]);

  const addToCart = async () => {
    if (user) {
        const userRef = db.collection('users').doc(user);
        const petDetails = {
          img: data[0].imgurl,
          head: data[0].petname,
          desc: data[0].desf,
          price: data[0].prf,
          own: data[0].ownname,
          tag: data[0].tag 
        };

        try {
            const userDoc = await userRef.get();
            if (userDoc.exists) {
                console.log('User document exists');
                const userData = userDoc.data();
                const currentCart = userData.cartArray || [];
                const updatedCart = [...currentCart, petDetails];
                await userRef.update({
                  cartArray: updatedCart,
                  });
                setCart(updatedCart);
            } else {
                console.log('User document does not exist');
                await userRef.set({ cartArray: [petDetails] });
            }
            console.log('Item added to cart');
            setci(true)
        } catch (error) {
            console.error('Error adding item to cart: ', error);
        }
    } else {
        console.log('User not logged in');
    }
};

const removeItem = async (img) => {
  // Filter out the item with the matching img
  const updatedCartItems = cart.filter(item => item.img !== img);
  setCart(updatedCartItems);

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
    setci(false);
    console.log('Item removed from cart and database updated successfully');
  } catch (error) {
    console.error('Error removing item from cart and updating database: ', error);
  }
};




  return (
    <>
      {load ? 
        <Loaders /> :
        <>
          {data.map((pet, index) => (
            <div key={index} className='w-full grid lg:grid-cols-2 sm:grid-cols-1 my-5'>
              <div key={index+1} className='bg-blue-300 sha flex'>
                <img src={pet.imgurl} className='p-2 m-auto sha w-full rounded-md' alt="" />
              </div>
              <div key={index} className='backdrop-blur-sm sha rounded-lg lg:text-3xl sm:text-xl font-bold text-center bg-white/30 m-2 p-2'>
                <h1 className='text-slate-700'>Pet Name : <span className='mx-1 text-blue-500'>{pet.petname}</span></h1>
                <h2 className='lg:text-xl sm:text-sm my-3 text-center'>Pet Description : <span className='mx-1 font-normal text-blue-500'>{pet.desf}</span></h2>
                <h2 className='lg:text-xl sm:text-sm my-3 text-center'>Pet Owner : <span className='mx-1 text-blue-500'>{pet.ownname}</span></h2>
                <h2 className='lg:text-xl sm:text-sm my-3 text-center'>Pet Price : <span className='mx-1 text-blue-500'>Rs. {pet.prf}</span></h2>
                <h2 className='lg:text-xl sm:text-sm my-3 text-center'>Pet Weight : <span className='mx-1 text-blue-500'>{pet.wgtf} kg.</span></h2>
                <h2 className='lg:text-xl sm:text-sm my-3 text-center'>Pet Breed : <span className='mx-1 text-blue-500'>{pet.bref}</span></h2>
                <h2 className='lg:text-xl sm:text-sm my-3 text-center'>Pet Type : <span className='mx-1 text-blue-500'>{pet.typef}</span></h2>
                <div key={index} className='backdrop-blur-sm sha rounded-lg lg:text-3xl sm:text-xl font-bold text-center bg-white/30 m-2 p-2'>
                {us ? 
                  <>
                  {! ci ?
                    <button onClick={addToCart} className="rounded relative font-thin inline-flex group items-center justify-center p-1 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                      <span className="relative">Add to cart</span>
                    </button>
                      :
                      <button onClick={() => removeItem(pet.imgurl)} className="rounded relative font-thin inline-flex group items-center justify-center p-1 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                      <span className="relative">Remove from cart</span>
                    </button>
                    }
                  </>
                    :
                    <>
                      <Link to="/signin" className="rounded relative font-thin inline-flex group items-center justify-center p-1 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white">
                      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                      <span className="relative">Signin for cart</span>
                    </Link>
                    </>
                }
                </div>
              </div>
            </div>
          ))}
        </>
      }
    </>
  );
}
