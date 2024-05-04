import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {
    const [pass,setpass] = useState(false);

    const [email,setemail] = useState("");
    const [passw,setpassw] = useState("");
    const [name,setname] = useState("");
    const [issignin,setissignin] = useState(false);
    const [error,seterror] = useState("");

    const togpass = () => {
        setpass(!pass);
    }



  return (
    <>
    <div className='max-w-[25em] rounded-sm bg-gradient-to-b from-blue-600 to-blue-900 items-center justify-center align-middle mt-10 mx-auto p-2'>
        <h1 className='text-center text-3xl pt-4 font-bold text-white'>Sign Up</h1>
        <form className='m-2 px-3' onSubmit={onsubmithandle}>
            <h2 className='text-xl font-thin my-3 text-white'>Email :</h2>
            <input type='name' className='w-full h-10 text-center rounded-md' placeholder='example@gmail.com' onChange={(e) => setemail(e.target.value)} required/>
            <h2 className='text-xl font-thin my-3 text-white'>Username :</h2>
            <input type='name' className='w-full h-10 text-center rounded-md' placeholder='User Surname' onChange={(e) => setname(e.target.value)} required/>
            <h2 className='text-xl font-thin my-3 text-white'>Password :</h2>
            <div className='flex'>
            <input type= {(pass) ? 'text' : 'password'} className='w-full h-10 text-center rounded-md' placeholder='Enter Password' onChange={(e) => setpassw(e.target.value)} required/>
            {(!pass) ? 
            <svg xmlns="http://www.w3.org/2000/svg"  onClick={togpass} className='w-6 ml-3 cursor-pointer' viewBox="0 0 576 512"><path fill="white" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" onClick={togpass}  className='w-6 ml-3 cursor-pointer' viewBox="0 0 640 512"><path fill="white" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>
        }
            </div>
            <h2 className='text-xl font-thin my-3 text-white'>Confirm Password :</h2>
            <input type='password' className='w-full h-10 text-center rounded-md' placeholder='Confirm Password' required/>
            <button type='submit' className='mx-auto bg-blue-700 transition-all duration-300 hover:bg-blue-600 p-3 text-white rounded-md mt-3'>Create Account</button>
            <hr className='h-1 bg-black my-3' />
        </form>
        <div className='bg-blue-700 text-white transition-all duration-300 hover:bg-blue-600 cursor-pointer m-2 px-2 rounded-md text-center flex justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 m-2 h-auto' viewBox="0 0 488 512"><path fill="white" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
            <h2 className='p-2 font-thin'>Sign Up With Google</h2>
        </div>
            <hr className='h-1 bg-black my-3' />
            <h2 className='p-1 text-center text-white'>Already have an account ? <Link to='/login' className='font-semibold text-sky-500 ml-2'>Log-In</Link></h2>
    </div>
    </>
  )
}
