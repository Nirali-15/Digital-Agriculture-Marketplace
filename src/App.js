// src/App.js
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
import ProductDetails from './components/ProductDetails';
import SelNotification from './components/SelNotification';
import BuyerRequest from './components/BuyerRequest';
import Account from './components/Account';
import BuyerOrdersPage from './components/BuyerOrdersPage';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import CheckoutPage from './components/CheckoutPage';
import { CartProvider } from './components/CartContext';
import Newsletter from './components/Newsletter';
import RequestSellerPage from './components/RequestSellerPage';

import './i18n.js';
import './App.css';

function App() {
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('products');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Invalid JSON in localStorage:", e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('products', JSON.stringify(products));
    } catch (e) {
      console.error("Error saving to localStorage:", e);
    }
  }, [products]);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const handleDeleteProduct = (indexToDelete) => {
    setProducts((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Static Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsletter" element={<Newsletter />} />

            {/* Auth */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            {/* Dashboards */}
            <Route path="/buyer" element={<BuyerHomePage />} />
            <Route path="/seller" element={<SellerHomePage />} />
            <Route path="/BuyerHomePage" element={<BuyerHomePage />} />
            <Route path="/SellerHomePage" element={<SellerHomePage />} />
            <Route path="/request-seller" element={<RequestSellerPage />} />

            {/* Seller */}
            <Route path="/seller/add-product" element={<AddProduct onAddProduct={addProduct} />} />
            <Route path="/seller/products" element={
              <SellerProductPage
                products={products}
                setProducts={setProducts}
                onDeleteProduct={handleDeleteProduct}
              />
            } />
            <Route path="/notifications" element={<SelNotification />} />
            <Route path="/buyer-requests" element={<BuyerRequest />} />

            {/* Buyer */}
            <Route path="/buyer/products" element={<BuyerProductPage products={products} />} />
            <Route path="/orders" element={<BuyerOrdersPage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />

            {/* Product Details */}
            <Route path="/product/:id" element={<ProductDetails products={products} />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

