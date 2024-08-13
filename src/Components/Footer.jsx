import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-blue-800 bottom-0 relative left-0 mt-10'>
        <h1 className='text-white text-center p-2'>Made by <Link to='https://meard.vercel.app/' target='_blank' className='mx-1 text-blue-300'>Godard</Link> with - Vite+React, Tailwind & 💜 </h1>
    </div>
  )
}
