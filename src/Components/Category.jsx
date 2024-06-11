import React from 'react'
import {Link} from 'react-router-dom'

export default function Category() {
    return (
    <>
    <section id='explore'>
        <h1 className='text-3xl font-extrabold bg-clip-text text-center text-transparent bg-gradient-to-l from-blue-400 to-blue-700'>Pets Category</h1>
        <div className="grid grid-cols-3 mt-10 mb-10 m-2 rounded-md">

            <Link to='/category/dog' className="text-white bg-blue-600 font-bold m-auto transition-all duration-200 rounded-full my-2 hover:scale-90">
                <div className="pics w-24">
                    <img src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717977600&semt=sph" className='rounded-full' alt="" />
                </div>
                <div className=" text-white text-center mb-3 text-semibold font-mono tracking-wider">
                    Dogs
                </div>
            </Link>
            <Link to='/category/cat' className="text-white bg-blue-600 font-bold m-auto transition-all duration-200 rounded-full my-2 hover:scale-90">
                <div className="pics w-24">
                    <img src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" className='rounded-full' alt="" />
                </div>
                <div className="text-white font-boldt text-center mb-3 text-semibold font-mono tracking-wider">
                    Cats
                </div>
            </Link>
            <Link to='/category/bird' className="text-white font-bold m-auto transition-all duration-200 bg-blue-600 rounded-full my-2 hover:scale-90">
                <div className="pics w-24">
                    <img src="https://t3.ftcdn.net/jpg/06/24/36/76/360_F_624367681_qVj6lIHIR0XETF5ZdgpqlJKO2SsrER9j.jpg" className='rounded-full' alt="" />
                </div>
                <div className="text-white font-boldt text-center mb-3 text-semibold font-mono tracking-wider">
                    Birds
                </div>
            </Link>
        </div>
        </section>
    </>
    )
}

