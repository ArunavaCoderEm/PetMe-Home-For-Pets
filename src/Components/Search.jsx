import React from 'react'

export default function Search() {
  return (
    <>
    <form className="m-auto w-80 flex rounded-md justify-center mt-3 bg-white sha">
        <input className='h-10 w-full rounded-md focus:ring-0 focus:outline-none focus:border-green-600 placeholder:text-green-600 px-2 text-center border-solid border-2 ' placeholder='Search Your Pet Here ...' />
        <button type='submit'>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 mx-2 cursor-pointer hover:fill-blue-600 transition-all duration-300' viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </button>
    </form>
    </>
  )
}
