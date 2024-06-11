import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../Context/firebase';
import Card from '../Components/Card'
import Loaders from '../Components/Loaders'

export default function Categories() {

  const [data, setdata] = useState([]);
  const [load, setload] = useState(false);
  
  const params = useParams();
  const [pet, setpet] = useState(params.id);

    useEffect(() => {
      setpet(params.id);
      console.log(pet)
    },[params.id])

    useEffect(() => {
      const fetchpets = async () => {
        try {
          setload(true)
          const petSnapshot = await db.collection('Pet').where('typef', '==', pet).limit(30).get();
          const petData = petSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setdata(petData);
          setTimeout(() => {
            setload(false)
          }, 1200);
        } catch (error) {
          console.error('Error fetching pets:', error);
        }
      };
      fetchpets();
    }, [params.id]);

  return (
    <>
    {load ? 
      <Loaders/>

      :
      <div className='bg-transparent my-5'>
      <h1 className='text-3xl font-extrabold bg-clip-text text-center text-transparent bg-gradient-to-l from-blue-400 to-blue-600'>
       Your {pet}s here
      </h1>
      <div className='my-5 mx-4 grid lg:grid-cols-3 sm:grid-cols-1'>
      {data.map((pet) => (
        <div key={pet.id}>
          <Card img={pet.imgurl} alt={pet.bref} head={pet.petname}
          desc={pet.desf} price={pet.prf} own={pet.ownname} /> 
        </div>
      ))}
      </div>
      </div>
    }
    </>
  )
}
