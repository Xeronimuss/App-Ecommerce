import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Pages/Cart';
import CartProvider from './components/CartProvider';
import ProductDetail from './components/Pages/ProductDetail';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AuthProvider, { AuthContext } from './components/auth/AuthContext';
import CategoryPage from './components/Pages/CategoryPage';
import Home from './components/Pages/Home';
import ContactUs from './components/Pages/ContactUs';
import Checkout from './components/Pages/Checkout';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div>
            <Navbar />
            <div className='pt-16'>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path="/ProductList" element={<PrivateRoute><ProductList /></PrivateRoute>} />
                <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
                <Route path="/product/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>} />
                <Route path='/category/:category' element={<PrivateRoute><CategoryPage/></PrivateRoute>}/>
                <Route path='/contact' element={<PrivateRoute><ContactUs/></PrivateRoute>}/>
                <Route path='/checkout' element={<PrivateRoute><Checkout/></PrivateRoute>}/>
              </Routes>
            </div>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
