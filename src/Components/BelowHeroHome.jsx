import React, { useEffect, useState } from 'react'
import Card from './Card'
import { db } from '../Context/firebase';

export default function BelowHeroHome() {

  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]); 

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const dogSnapshot = await db.collection('Pet').where('typef', '==', 'dog').limit(6).get();
        const dogData = dogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDogs(dogData);
      } catch (error) {
        console.error('Error fetching dogs:', error);
      }
    };

    fetchDogs();
  }, []);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const catSnapshot = await db.collection('Pet').where('typef', '==', 'cat').limit(6).get();
        const catData = catSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCats(catData);
      } catch (error) {
        console.error('Error fetching cats:', error);
      }
    };

    fetchCats();
  }, []);

  return (
    <>
      <div className='bg-transparent'>
        <h1 className='text-3xl font-extrabold bg-clip-text text-center text-transparent bg-gradient-to-l from-blue-100 to-blue-300'>Most Loved Dogs</h1>
        <div className='my-5 mx-4 grid lg:grid-cols-3 sm:grid-cols-1'>
        {dogs.map((dog) => (
          <div key={dog.id}>
            <Card img={dog.imgurl} alt={dog.bref} head={dog.petname}
            desc={dog.desf} price={dog.prf} own={dog.ownname} /> 
          </div>
        ))}
        </div>
        <h1 className='text-3xl font-extrabold bg-clip-text text-center text-transparent bg-gradient-to-l from-blue-100 to-blue-300'>Most Loved Cats</h1>
        <div className='my-5 mx-4 grid lg:grid-cols-3 sm:grid-cols-1'>
        {cats.map((cat) => (
          <div key={cat.id}>
            <Card img={cat.imgurl} alt={cat.bref} head={cat.petname}
            desc={cat.desf} price={cat.prf} own={cat.ownname}/> 
          </div>
        ))}
        </div>
      </div> 
    </>
  )
}
