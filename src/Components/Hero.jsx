import React, { useState } from 'react'

export default function Hero() {

    const [width, setWidth] = useState(668);

    window.addEventListener("resize", function(e) {
        setWidth(document.body.clientWidth);
      })  

  return (
    <>
      <div className="bg-gradient-to-b from-blue-500 to-blue-800 rounded-md m-3 p-2">
        <h1 className='lg:text-4xl px-5 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-300 sm:text-2xl text-center mt-5'>
            "Discover Your Perfect Pet Match : Welcome to PetMe - Where Furry Dreams Come True !"
        </h1>
        <section className="text-white body-font">
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl lg:text-left sm:text-center mb-4 font-extrabold"> Buy And Sell The Pets
                    <br className="hidden lg:inline-block"/>Of Your Choice.
                </h1>
                {(width > 768) && (
                    <>
                <ul className='mx-5 my-2 text-left'>
                    <li className='my-2 lg:list-disc sm:list-none lg:text-left sm:text-center'>We have all varieties of pets like dogs, cats, birds, etc.</li>
                    <li className='my-2 list-disc'>We have the facility to deliver your desired pets to your<br/> doorstep safe and sound.</li>
                    <li className='my-2 list-disc'>You can sell pets any moment you want based on health<br/> checkup of those pets from doorstep.</li>
                    <li className='my-2 list-disc'>Every pet that you buy or sell will be finely verified<br/> by PetMe team.</li>
                </ul>
                    </>
                )}
                {(width <= 768) && (
                    <p className='text-center text-lg'>We have all varieties of pets like dogs, cats, birds, etc.</p>
                )}
            </div>
                <div className="lg:max-w-2xl lg:w-full md:w-screen w-5/6">
                <img className="object-center object-cover rounded-md sha" alt="hero" src="https://img.freepik.com/premium-photo/cute-pets-domestic-animals-nature-small-purebred-dog-playing-together-generated-by-artificial-intelligence_188544-83545.jpg"/>
                </div>
            </div>
            <div className="bg-white absolute w-4/5 mx-auto h-44 rounded-md left-0 right-0 mt-[-30px]">

            </div>
            </section>
      </div>
    </>
  )
}
