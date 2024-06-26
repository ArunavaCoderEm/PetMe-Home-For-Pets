import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Search() {

  const[sear, setsear] = useState("");
  const nav = useNavigate();

  const handlesub = (e) => {
    e.preventDefault();
    nav(`/details/${conv(sear)}`)
    setsear("")
  }

  function conv(str) {
    return str.replace(/\s+/g, '').toLowerCase();
}

  return (
    <>
    <form className="m-auto w-80 flex rounded-md justify-center mt-3 bg-white sha" onSubmit={handlesub}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-6 m-2'><path fill='#87ceeb' d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg>
        <input
        onChange={(e) => setsear(e.target.value)}
        value = {sear}
        className='h-10 w-full rounded-md focus:ring-0 focus:outline-none focus:border-green-600 placeholder:text-green-600 px-2 text-center border-solid border-2 ' placeholder='Search Your Pet Here ...' />
        <button type='submit'>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 mx-2 cursor-pointer hover:fill-blue-600 transition-all duration-300' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </button>
    </form>
    </>
  )
}
