import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db, auth } from '../Context/firebase';
import Card from '../Components/Card';
import Loaders from '../Components/Loaders';
import { useNavigate } from 'react-router-dom';

export default function Categories() {
    const nav = useNavigate();
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const params = useParams();
    const [pet, setPet] = useState(params.id);

    useEffect(() => {
        setPet(params.id);
        console.log(pet);
    }, [params.id]);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                setLoad(true);
                const petSnapshot = await db.collection('Pet').where('typef', '==', pet).limit(30).get();
                const petData = petSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setData(petData);
                setTimeout(() => {
                    setLoad(false);
                }, 1200);
            } catch (error) {
                console.error('Error fetching pets:', error);
            }
        };
        fetchPets();
    }, [pet]);

    const navdethere = (tag) => {
        console.log(tag);
        nav(`/details/${tag}`);
    };

    const removecartItem = async (itemId) => {
        try {
            const user = auth.currentUser;
            if (user) {
                const userRef = db.collection('users').doc(user.uid);
                const userDoc = await userRef.get();
                if (userDoc.exists) {
                    const userData = userDoc.data();
                    const updatedCart = userData.cartArray.filter(item => item.img !== itemId);
                    await userRef.update({
                        cartArray: updatedCart,
                    });
                    console.log('Item removed from cart');
                }
            }
        } catch (error) {
            console.error('Error removing item from cart: ', error);
        }
    };

    return (
        <>
            {load ? 
                <Loaders /> :
                <div className='bg-transparent my-5'>
                    <h1 className='text-3xl font-extrabold bg-clip-text text-center text-transparent bg-gradient-to-l from-blue-400 to-blue-600'>
                        Your {pet}s here
                    </h1>
                    <div className='my-5 mx-4 grid lg:grid-cols-3 sm:grid-cols-1'>
                        {data.map((pet) => (
                            <div key={pet.id}>
                                <Card 
                                    img={pet.imgurl} 
                                    alt={pet.bref} 
                                    head={pet.petname}
                                    desc={pet.desf} 
                                    price={pet.prf} 
                                    own={pet.ownname} 
                                    tag={pet.tag}
                                    navdethere={navdethere}
                                    removecartItem={removecartItem}
                                    itemId={pet.imgurl}
                                /> 
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    );
}
