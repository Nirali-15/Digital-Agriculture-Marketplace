import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const SellerHomePage = () => {
  const advantages = [
    {
      title: 'Wider Market Reach',
      image: 'https://cdn-icons-png.flaticon.com/512/2331/2331970.png',
      description: 'Connect with buyers across India and boost your sales digitally.'
    },
    {
      title: 'Real-time Inventory',
      image: 'https://cdn-icons-png.flaticon.com/512/2769/2769758.png',
      description: 'Update your stock and manage availability on the go.'
    },
    {
      title: 'Secure & Instant Payments',
      image: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png',
      description: 'Experience quick and transparent payment transactions.'
    },
    {
      title: 'Insightful Analytics',
      image: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
      description: 'Gain valuable insights into customer preferences and market trends.'
    },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh' }}>
      {/* Updated Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <span style={styles.logoText}>FarmFlow</span>
        </div>
        <div style={styles.navLinks}>
          <Link to="/seller" style={styles.navItem}>Home</Link>
          <Link to="/seller/add-product" style={styles.navItem}>Add Product</Link>
          <Link to="/seller/products" style={styles.navItem}>My Products</Link>
          <Link to="/notifications" style={styles.navItem}>Notifications</Link>
          <Link to="/buyer-requests" style={styles.navItem}>Buyer Requests</Link>
          <Link to="/analytics" style={styles.navItem}>Analytics</Link>
          <Link to="/account" style={styles.navItem}>Account</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>
          Grow Your Reach, Grow Your Farm
        </h1>
        <p style={styles.heroText}>
          Join the FarmFlow marketplace to connect with genuine buyers and manage your produce efficiently.
        </p>
        <div>
          <Link to="/seller/add-product" style={ctaButton}>Add Your Products</Link>
          <Link to="/help" style={{ ...ctaButton, backgroundColor: '#ffffff', color: '#2e7d32', marginLeft: '1rem' }}>Need Help?</Link>
        </div>
      </section>

      {/* Advantages Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f2f2f2' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#2e7d32' }}>Why Sell with FarmFlow?</h2>
        <div style={styles.grid}>
          {advantages.map((item, index) => (
            <div key={index} style={styles.card}>
              <img src={item.image} alt={item.title} style={styles.cardImage} />
              <h3 style={{ color: '#2e7d32', fontSize: '1.2rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#444' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Common Styles
const ctaButton = {
  padding: '0.8rem 1.5rem',
  backgroundColor: '#2e7d32',
  color: '#fff',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '1rem',
  transition: 'background-color 0.3s ease'
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#2e7d32',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    flexWrap: 'wrap'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  logo: {
    height: '40px',
    borderRadius: '50%'
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none'
  },
  navLinks: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  navItem: {
    backgroundColor: '#fff',
    color: '#2e7d32',
    padding: '8px 14px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  heroSection: {
    backgroundImage: 'url("https://juagrisciences.com/uploads/blog/category/17107590941jpeg.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: '2rem'
  },
  heroTitle: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: '10px 20px',
    borderRadius: '12px'
  },
  heroText: {
    fontSize: '1.3rem',
    maxWidth: '800px',
    marginBottom: '2rem',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: '10px',
    borderRadius: '10px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  },
  card: {
    background: '#ffffff',
    borderRadius: '12px',
    padding: '2rem 1.5rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    textAlign: 'center',
    transition: 'transform 0.3s ease'
  },
  cardImage: {
    width: '70px',
    height: '70px',
    marginBottom: '1rem'
  }
};

export default SellerHomePage;
