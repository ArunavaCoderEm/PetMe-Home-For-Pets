import React from 'react'
import Card from './Card'

export default function BelowHeroHome() {
  return (
    <>
      <div className='bg-transparent'>
        <h1 className='text-3xl font-extrabold bg-clip-text text-center text-transparent bg-gradient-to-l from-blue-100 to-blue-300'>Most Loved Dogs</h1>
        <div className='my-5 mx-4 grid lg:grid-cols-3 sm:grid-cols-1'>
          <Card/>
        </div>
        <h1 className='text-3xl font-extrabold bg-clip-text text-center text-transparent bg-gradient-to-l from-blue-100 to-blue-300'>Most Loved Cats</h1>
        <div className='my-5 mx-4 grid lg:grid-cols-3 sm:grid-cols-1'>
          <Card/>
        </div>
      </div> 
    </>
  )
}
