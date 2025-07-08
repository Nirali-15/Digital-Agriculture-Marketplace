import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { FaShoppingCart } from 'react-icons/fa'; // icon for cart

const BuyerHomePage = () => {
  const features = [
    {
      title: 'Verified Sellers',
      image: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
      description: 'Shop confidently from government-verified and authentic farmers.'
    },
    {
      title: 'Fresh & Organic',
      image: 'https://cdn-icons-png.flaticon.com/512/135/135620.png',
      description: 'Get farm-fresh, chemical-free produce straight from the source.'
    },
    {
      title: 'Affordable Bulk Deals',
      image: 'https://st2.depositphotos.com/1005951/10723/i/950/depositphotos_107231244-stock-photo-grains-in-bulk-bags.jpg',
      description: 'Buy in bulk and save more with special wholesale prices.'
    },
    {
      title: 'Secure Payments',
      image: 'https://cdn-icons-png.flaticon.com/512/891/891462.png',
      description: 'Choose from multiple secure payment options like UPI, wallets, and cards.'
    },
    {
      title: '24/7 Buyer Support',
      image: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
      description: 'Get instant support for queries, cancellations, or issues.'
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh' }}>
      
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <span style={styles.logoText}>FarmFlow</span>
        </div>
        <div style={styles.navLinks}>
          <Link to="/buyer" style={styles.navItem}>Home</Link>
          <Link to="/buyer/products" style={styles.navItem}>Shop</Link>
          <Link to="/orders" style={styles.navItem}>Orders</Link>
          <Link to="/cart" style={styles.navItem}>
            <FaShoppingCart style={{ marginRight: '6px' }} />
            Cart
          </Link>
          <Link to="/help" style={styles.navItem}>Help</Link>
          <Link to="/account" style={styles.navItem}>Account</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Empowering Farmers, Enriching Buyers</h1>
        <p style={styles.heroText}>
          A seamless marketplace where transparency meets trust. Shop directly from India’s verified growers.
        </p>
        <div>
          <Link to="/buyer/products" style={ctaButton}>Start Shopping</Link>
          <Link to="/help" style={{ ...ctaButton, backgroundColor: '#ffffff', color: '#2e7d32', marginLeft: '1rem' }}>Need Help?</Link>
        </div>
      </section>

      {/* Feature Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f2f2f2' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#2e7d32' }}>Why Choose FarmFlow?</h2>
        <div style={styles.grid}>
          {features.map((item, index) => (
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

// Reusable Styles
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
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center'
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

export default BuyerHomePage;
