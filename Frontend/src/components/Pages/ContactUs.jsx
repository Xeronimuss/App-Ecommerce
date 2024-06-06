import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario a un servidor o API
    console.log('Formulario enviado:', form);
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-800 text-white">
      <header className="text-center my-12">
        <h1 className="text-5xl font-bold mb-4">Contact us</h1>
        <p className="text-xl text-gray-400">Do you have any questions or problems? We are here to help you.</p>
      </header>

      {submitted ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Thank you for contacting us!</h2>
          <p className="text-lg text-gray-400">We will contact you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-700 p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-600 text-white focus:ring-4 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-600 text-white focus:ring-4 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 rounded bg-gray-600 text-white focus:ring-4 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded focus:outline-none focus:ring-4 focus:ring-blue-500">
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
