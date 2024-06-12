import React from 'react'

export default function Contact() {
  return (
    <section className="">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-900 dark:text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-normal text-center text-blue-800 dark:text-blue-800 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
        <form action="#" className="space-y-8 bg-blue-500 p-5 rounded-md ">
            <div>
                <label for="email" className="block mb-2 text-sm font-medium text-blue-900 dark:text-slate-300">Your email</label>
                <input type="email" id="email" className="shadow-sm bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@gmail.com" required/>
            </div>
            <div>
                <label for="subject" className="block mb-2 text-sm font-medium text-blue-900 dark:text-slate-300">Subject</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-blue-900 bg-blue-50 rounded-lg border border-blue-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
            </div>
            <div className="sm:col-span-2">
                <label for="message" className="block mb-2 text-sm font-medium text-slate-300 dark:text-slate-300">Your message</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-blue-900 bg-blue-50 rounded-lg shadow-sm border border-blue-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 bg-blue-700  hover:bg-blue-600 transition-all duration-200 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
    </div>
    </section>
  )
}
