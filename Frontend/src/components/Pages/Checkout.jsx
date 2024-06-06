import React, { useState, useContext } from 'react';
import { CartContext } from '../CartProvider';

const Checkout = () => {
  const { cartItems, removeFromCart, updateCartQuantity } = useContext(CartContext);
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };
  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return;
    updateCartQuantity(productId, quantity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Details:', formDetails);
    console.log('Cart Items:', cartItems);
  };
  const calculateTotalPrice = (item) => {
    const price = parseFloat(item.price); 
    const quantity = parseInt(item.quantity, 10);
    return price * quantity; 
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + calculateTotalPrice(item), 0).toFixed(2);
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + (parseInt(item.quantity, 10) || 0), 0);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const price = item.totalPrice && typeof item.totalPrice === 'string'
      ? parseFloat(item.totalPrice.slice(1))
      : 0;
    return total + price;
  }, 0);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/3">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <ul className="space-y-4">
          {cartItems.length === 0 && <p className="text-gray-600">No items in the cart</p>}
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
              <div className="flex-1">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-600">Size: {item.size}</p>
                <p className="text-gray-600">Quantity: 
                {item.quantity}
                </p>
                <p className="text-gray-800 font-semibold">${calculateTotalPrice(item)}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t pt-4">
          <h3 className="text-lg font-semibold">Total: ${calculateSubtotal()}</h3>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-2/3">
        <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formDetails.firstName}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formDetails.lastName}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formDetails.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formDetails.phone}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formDetails.address}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formDetails.city}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formDetails.state}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formDetails.zip}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
