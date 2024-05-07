import React from 'react'

export default function Loader() {
  return (
    <>
    <div class='w-screen bg-gradient-to-t from-blue-700 via-blue-400 to-blue-700 z-50 overflow-hidden h-screen fixed'>
    <div class="bg-transparent w-80 h-80 absolute top-0 right-0 left-0 bottom-0 m-auto mb-6">
        <img src='./paw.png' class='paw w-20 m-auto absolute top-0 bottom-0 left-0 right-0 mb-8' />
        <h2 class='w-full font-semibold text-white text-2xl p-5 text-center'>Pet a pet : A simple profound joy.</h2>
    </div>
    </div>
    </>
  )
}
