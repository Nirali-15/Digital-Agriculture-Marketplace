// SellerHomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // adjust as per your structure

const SellerHomePage = () => {
  const advantages = [
    {
      title: 'Wider Reach',
      image: 'https://cdn-icons-png.flaticon.com/512/2331/2331970.png',
      description: 'Sell across the nation with our digital platform.'
    },
    {
      title: 'Real-time Inventory',
      image: 'https://cdn-icons-png.flaticon.com/512/2769/2769758.png',
      description: 'Manage products in real-time from anywhere.'
    },
    {
      title: 'Secure Payments',
      image: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png',
      description: 'Fast and secure payment system with full transparency.'
    },
    {
      title: 'Customer Insights',
      image: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
      description: 'Know what your customers love through data.'
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        padding: '1rem 2rem',
        color: 'white'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          <h2 style={{ margin: 0, color: 'white' }}>FarmFlow</h2>
        </div>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1.5rem',
          margin: 0,
          padding: 0
        }}>
          <li><Link to="/seller" style={navLink}>Home</Link></li>
          <li><Link to="/seller/add-product" style={navLink}>Add Product</Link></li>
          <li><Link to="/products" style={navLink}>Products</Link></li>
          <li><Link to="/help" style={navLink}>Help</Link></li>
          <li><Link to="/account" style={navLink}>Account</Link></li>
        </ul>
      </nav>

      {/* Hero Background */}
      <div style={{
        backgroundImage: 'url("https://w0.peakpx.com/wallpaper/824/628/HD-wallpaper-green-wheat-crops-green-wheat-nature-field-crops-thumbnail.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '3rem' }}>Welcome to Your Seller Dashboard</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem', maxWidth: '700px' }}>
          Manage your listings, track orders, and grow your farm's reach with our seamless digital platform.
        </p>
      </div>

      {/* Advantage Cards Section */}
      <div style={{ padding: '4rem 2rem', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Sell with Us?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {advantages.map((adv, idx) => (
            <div key={idx} style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <img src={adv.image} alt={adv.title} style={{ width: '100px', height: '100px', marginBottom: '1rem' }} />
              <h3>{adv.title}</h3>
              <p>{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const navLink = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold'
};

export default SellerHomePage;
