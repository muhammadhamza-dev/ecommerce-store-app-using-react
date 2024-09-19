// src/routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Conatct from './pages/Contact';
import Product from './pages/Product';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Conatct/>} />
        <Route path="/product" element={<Product/> } />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/account" element={<Login/> } />
        <Route path="/login" element={<Login/> } />
        <Route path="/signup" element={<Signup/> } />

      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
