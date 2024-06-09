import React, { useState } from 'react'
import {db, store} from '../Context/firebase'

export default function Sellpet() {

    const[owner, setowner] = useState("")
    const[pet, setpet] = useState("")
    const[img, setimg] = useState(null)
    const[breed, setbreed] = useState("")
    const[price, setprice] = useState(0)
    const[wgt, setwgt] = useState(0)
    const[type, settype] = useState("")
    const[des, setdes] = useState("")

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
          setimg(e.target.files[0]);
        }
      };
    
      const addpet = (e) => {
        e.preventDefault();
        if (!img) {
          console.error("No image selected");
          return;
        }
    
        console.log(owner, pet, img, breed, price, wgt, type, des);
        const upload = store.ref(`petimg/${img.name}`).put(img);
    
        upload.on("state_changed", imgup => {
          const prog = (imgup.bytesTransferred / imgup.totalBytes) * 100;
          console.log(prog);
        }, error => {
          console.error(error);
        }, () => {
          store.ref("petimg").child(img.name).getDownloadURL().then(url => {
            db.collection("Pet").add({
              ownname: owner,
              petname: pet,
              imgurl: url,
              bref: breed,
              wgtf: wgt,
              typef: type,
              desf: des,
              prf: price
            }).then(() => {
              console.log("Pet added successfully");
              setowner("");
              setpet("");
              setbreed("");
              setimg(null);  
              settype("");
              setprice(0);
              setwgt(0);
              setdes("");
            }).catch(error => {
              console.error("Error adding pet: ", error);
            });
          }).catch(error => {
            console.error("Error getting download URL: ", error);
          });
        });
      };


  return (
    <>
        <section className="bg-gradient-to-tr from-blue-400 to-blue-600 mt-3 mx-2 rounded-md">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400 textr text-center">Add a new Pets</h2>
                <form onSubmit={addpet}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 font-semibold text-gray-900 dark:text-blue-700 text-bold text-xl">Owner Name</label>
                            <input type="text"
                            onChange={(e) => {
                                setowner(e.target.value)
                            }}
                            value={owner}
                            name="name" id="name" className="bg-gray-50 border mb-3 border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-600 text-bold text-xl dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                            <label htmlFor="name" className="block mb-2  font-semibold text-gray-900 dark:text-blue-700 text-bold text-xl">Pet Name</label>
                            <input
                            onChange={(e) => {
                                setpet(e.target.value)
                            }}
                            value={pet}
                            type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-700 text-bold text-xl dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="brand" className="block mb-2  font-semibold text-gray-900 dark:text-blue-700 text-bold text-xl">Breed</label>
                            <input 
                            onChange={(e) => {
                                setbreed(e.target.value)
                            }}
                            value={breed}
                            type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-700 text-bold text-xl dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Pet breed" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="price" className="block mb-2  font-semibold text-gray-900 dark:text-blue-700 text-bold text-xl">Price</label>
                            <input 
                            onChange={(e) => {
                                setprice(e.target.value)
                            }}
                            value={price}
                            type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-700 text-bold text-xl dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Rs.19999" required />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2  font-semibold text-gray-900 dark:text-blue-700 text-bold text-xl">Category</label>
                            <select 
                            onChange={(e) => {
                                settype(e.target.value)
                            }}
                            value={type}
                            id="category" className="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-700 text-bold text-xl dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option className='cursor-pointer' selected="" disabled>Select Type</option>
                                <option className='cursor-pointer' value="dog">A Dog</option>
                                <option className='cursor-pointer' value="cat">A Cat</option>
                                <option className='cursor-pointer' value="bird">A Bird</option>
                                <option className='cursor-pointer' value="others">Others</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="item-weight" className="block mb-2  font-semibold text-gray-900 dark:text-blue-700 text-bold text-xl">Item Weight (kg)</label>
                            <input 
                            onChange={(e) => {
                                setwgt(e.target.value)
                            }}
                            value={wgt}
                            type="number" name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-700 text-bold text-xl dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required />
                        </div> 
                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block mb-2  font-semibold text-gray-900 dark:text-blue-700 text-bold text-xl">Description</label>
                            <textarea 
                            onChange={(e) => {
                                setdes(e.target.value)
                            }}
                            value={des}
                            id="description" rows="8" className="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-700 text-bold text-xl dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                        </div>
                        <label htmlFor="name" className="block mb-2 font-semibold text-gray-900 dark:text-blue-700 text-bold text-xl">Pet Image</label>
                            <input 
                            onChange={handleImageChange}
                            type="file" accept='image/*' name="name" id="name" className="bg-gray-50 cursor-pointer border mb-3 border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-600 text-bold text-xl dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                    </div>
                    <button className="relative mt-3 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-semibold transition-all bg-white rounded hover:bg-white group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-blue text-xl font-bold transition-colors duration-300 ease-in-out group-hover:text-white">Add Pet</span>
                    </button>
                </form>
            </div>
        </section>
    </>
  )
}
