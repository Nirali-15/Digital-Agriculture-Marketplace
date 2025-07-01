import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Help from './components/Help';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SellerHomePage from './components/SellerHomePage';
import Contact from './components/Contact';
import BuyerHomePage from './components/BuyerHomePage';
import AddProduct from './components/AddProduct';
import SellerProductPage from './components/SellerProductPage';
import BuyerProductPage from './components/BuyerProductPage';

import './i18n.js';
import './App.css';

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const handleDeleteProduct = (indexToDelete) => {
    setProducts((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/help" element={<Help />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buyer" element={<BuyerHomePage />} />
          <Route path="/seller" element={<SellerHomePage />} />
          <Route path="/seller/add-product" element={<AddProduct onAddProduct={addProduct} />} />

          <Route
            path="/seller/products"
            element={
              <SellerProductPage
                products={products}
                setProducts={setProducts}
                onDeleteProduct={handleDeleteProduct}
              />
            }
          />

          <Route
            path="/buyer/products"
            element={<BuyerProductPage products={products} onAddToCart={handleAddToCart} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
