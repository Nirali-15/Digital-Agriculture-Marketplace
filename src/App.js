import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Help from './components/Help';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SellerHomePage from './components/SellerHomePage';
import BuyerHomePage from './components/BuyerHomePage';
import AddProduct from './components/AddProduct';
import SellerProductPage from './components/SellerProductPage';
import BuyerProductPage from './components/BuyerProductPage';
import ProductDetails from './components/ProductDetails'; // ✅ Added
import Footer from './components/Footer'; // ✅ Add this only if Footer exists
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
          {/* Static Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Role-based HomePages */}
          <Route path="/BuyerHomePage" element={<BuyerHomePage />} />
          <Route path="/SellerHomePage" element={<SellerHomePage />} />
          <Route path="/buyer" element={<BuyerHomePage />} />
          <Route path="/seller" element={<SellerHomePage />} />

          {/* Seller Routes */}
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

          {/* Buyer Route */}
          <Route
            path="/buyer/products"
            element={<BuyerProductPage products={products} onAddToCart={handleAddToCart} />}
          />

          {/* ✅ Product Details Route */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>

        {/* Optional footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
