import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../ProductItem';  // Asegúrate de importar el componente ProductItem
import { CartContext } from '../CartProvider';
import { useContext } from 'react';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')  // Obtener solo los primeros 5 productos para mostrar como destacados
      .then(response => response.json())
      .then(data => {
        setFeaturedProducts(data);
      })
      .catch(error => console.error('Error al obtener productos destacados:', error));
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gray-800 text-white">
    <header className="text-center my-12">
      <h1 className="text-5xl font-bold mb-4">Welcome to our store</h1>
      <p className="text-xl text-gray-400">Find the best product at the best prices.</p>
    </header>

    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>

  </div>
  );
};

export default Home;
