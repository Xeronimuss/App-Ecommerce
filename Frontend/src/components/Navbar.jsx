import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './auth/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json));
  }, []);

  const handleLogout = () => {
    logout();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink exact to="/" className={`text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out ${selectedCategory === '' ? 'border-b-2 border-white' : ''}`} activeClassName="border-b-2 border-white" onClick={() => setSelectedCategory('')}>Home</NavLink>
                {categories.map(category => (
                  <NavLink key={category} to={`/category/${category}`} className={`text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out ${selectedCategory === category ? 'border-b-2 border-white' : ''}`} activeClassName="border-b-2 border-white" onClick={() => setSelectedCategory(category)}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </NavLink>
                ))}
                <NavLink to="/contact" className={`text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out ${selectedCategory === 'contact' ? 'border-b-2 border-white' : ''}`} activeClassName="border-b-2 border-white" onClick={() => setSelectedCategory('contact')}>Contact us</NavLink>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <NavLink to="/cart" className="relative text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </NavLink>
            <button
              className="ml-3 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl flex items-center gap-2 hidden sm:flex"
              onClick={handleLogout}
            >
              <span>Logout</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Contenido del menú desplegable para dispositivos móviles */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink exact to="/" className="block text-white px-3 py-2 rounded-md text-base font-medium" activeClassName="border-b-2 border-white">Home</NavLink>
            {categories.map(category => (
              <NavLink key={category} to={`/category/${category}`} className="block text-white px-3 py-2 rounded-md text-base font-medium" activeClassName="border-b-2 border-white">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </NavLink>
            ))}
            <NavLink to="/contact" className="block text-white px-3 py-2 rounded-md text-base font-medium" activeClassName="border-b-2 border-white">Contact us</NavLink>
            <NavLink to="/cart" className="block text-white px-3 py-2 rounded-md text-base font-medium">Cart</NavLink>
          </div>
          <div className="px-2 py-2">
            <button
              className="w-full px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl flex items-center justify-between gap-2"
              onClick={handleLogout}
            >
              <span>Logout</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
