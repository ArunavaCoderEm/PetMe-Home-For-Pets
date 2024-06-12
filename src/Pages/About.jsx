import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center p-4">
      <h1 className="text-3xl text-blue-400 font-bold mb-8">Welcome to Petme</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl">
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">1. Browse Pets</h2>
          <p>Explore our categories for dogs, cats, and birds. Each category has a variety of pets for you to view.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">2. Search Pets</h2>
          <p>Use our search functionality to find specific pets or items quickly and easily.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">3. Sell Pets</h2>
          <p>As we dont have much pet data in stock so if you are a seller, list your pets for sale in the "Sell Pets" section. Help others find their new best friend.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">4. View Product Details</h2>
          <p>Click on any pet to view detailed information, including age, breed, and more.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">5. Add & Remove Cart</h2>
          <p>Add or remove pets to your cart, and your selections will be remembered even if you leave the site and come back later.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">6. Login/Signup</h2>
          <p>Create an account or log in to manage your profile, view your cart, and check out faster.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">7. Payment</h2>
          <p>You have a payment option of Cash On Delivery or netbancking or UPI but obviously those are fake.</p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">8. Place Order</h2>
          <p>After all the payment and everything done you can place order from our website</p>
        </div>
      </div>
    </div>
  );
}
