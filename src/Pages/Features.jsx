import React from 'react';

export default function Features() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center p-4">
      <h1 className="text-3xl text-blue-400 font-bold mb-8">Features</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <img src="./2.png" alt="Browse Pets" className="mb-4 w-full h-48 object-cover rounded-md"/>
          <h2 className="text-2xl font-semibold mb-4">Browse Pets</h2>
          <p>Explore our categories for dogs, cats, and birds. Each category has a variety of pets for you to view.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <img src="./1.png" alt="Sell Pets" className="mb-4 w-full h-48 object-cover rounded-md"/>
          <h2 className="text-2xl font-semibold mb-4">Sell Pets</h2>
          <p>If you are a seller, list your pets for sale in the "Sell Pets" section. Help others find their new best friend.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <img src="./3.png" alt="Product Details" className="mb-4 w-full h-48 object-cover rounded-md"/>
          <h2 className="text-2xl font-semibold mb-4">View Product Details</h2>
          <p>Click on any pet to view detailed information, including age, breed, and more.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <img src="./4.png" alt="Add to Cart" className="mb-4 w-full h-48 object-cover rounded-md"/>
          <h2 className="text-2xl font-semibold mb-4">Add to Cart</h2>
          <p>Add pets to your cart, and your selections will be remembered even if you leave the site and come back later.</p>
        </div>
      </div>
    </div>
  );
}
