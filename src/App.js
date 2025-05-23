import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Help from './components/Help';
import Footer from './components/Footer';
import Login from './components/Login';
import EcommercePage from './components/EcommercePage';
import SignUp from './components/SignUp';
import Seller from './components/Seller';
import Products from "./components/Products";
import ProductDetails from './components/ProductDetails';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]); // State to store products

  // Function to add a product
  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, { ...product, id: prevProducts.length + 1 }]);
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
          <Route path="/ecommercepage" element={<EcommercePage />} />
          <Route path="/seller" element={<Seller addProduct={addProduct} />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;