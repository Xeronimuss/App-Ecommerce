import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SuccessMessage from "./SuccessMessage"

const ProductItem = ({ product, addToCart }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); 
  };

  return (
    <div className="relative group bg-gray-800 shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      {showSuccessMessage && <SuccessMessage message="Added to cart successfully!" onClose={() => setShowSuccessMessage(false)} />}
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden rounded-lg h-64 bg-gray-200">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </Link>
      <div className="mt-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-medium text-white">
            <Link to={`/product/${product.id}`}>
              {product.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-400">{product.category}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-semibold text-white">${product.price}</p>
          <a 
            href="#" 
            onClick={() => handleAddToCart(product)}
            className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

