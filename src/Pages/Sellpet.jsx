import React from 'react'
import { Link } from 'react-router-dom'

export default function Sellpet() {
  return (
    <>
        <section className="bg-gradient-to-tr from-blue-400 to-blue-600 mt-3 mx-5 rounded-md">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400 textr text-center">Add a new Pets</h2>
                <form action="#">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label for="name" className="block mb-2 font-semibold text-gray-900 dark:text-blue-700 text-bold text-xl">Owner Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border mb-3 border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-200 text-bold text-xl dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                            <label for="name" className="block mb-2  font-semibold text-gray-900 dark:text-blue-700 text-bold text-xl">Product Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-700 text-bold text-xl dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                        </div>
                        <div className="w-full">
                            <label for="brand" className="block mb-2  font-semibold text-gray-900 dark:text-blue-700 text-bold text-xl">Brand</label>
                            <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-700 text-bold text-xl dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required />
                        </div>
                        <div className="w-full">
                            <label for="price" className="block mb-2  font-semibold text-gray-900 dark:text-blue-700 text-bold text-xl">Price</label>
                            <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-700 text-bold text-xl dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Rs.19999" required />
                        </div>
                        <div>
                            <label for="category" className="block mb-2  font-semibold text-gray-900 dark:text-blue-700 text-bold text-xl">Category</label>
                            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-400 text-bold text-xl dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="" disabled>Select Type</option>
                                <option value="TV">A Dog</option>
                                <option value="PC">A Cat</option>
                                <option value="GA">A Bird</option>
                                <option value="PH">Others</option>
                            </select>
                        </div>
                        <div>
                            <label for="item-weight" className="block mb-2  font-semibold text-gray-900 dark:text-blue-700 text-bold text-xl">Item Weight (kg)</label>
                            <input type="number" name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-700 text-bold text-xl dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required />
                        </div> 
                        <div className="sm:col-span-2">
                            <label for="description" className="block mb-2  font-semibold text-gray-900 dark:text-blue-700 text-bold text-xl">Description</label>
                            <textarea id="description" rows="8" className="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:slate-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-700 text-bold text-xl dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                        </div>
                    </div>
                    <Link to="/" className="relative mt-3 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-semibold transition-all bg-white rounded hover:bg-white group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-blue text-xl font-bold transition-colors duration-300 ease-in-out group-hover:text-white">Add Pet</span>
                    </Link>
                </form>
            </div>
        </section>
    </>
  )
}
