import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { useTranslation } from 'react-i18next';

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
    //{
    //   title: 'Real-time Tracking',
    //   image: 'https://cdn-icons-png.flaticon.com/512/554/554795.png',
    //   description: 'Track your order journey from farm dispatch to doorstep.'
    // },
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
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#34495e',
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
          <li><Link to="/buyer" style={navLink}>Home</Link></li>
          <li><Link to="/products" style={navLink}>Shop</Link></li>
          <li><Link to="/orders" style={navLink}>Orders</Link></li>
          <li><Link to="/help" style={navLink}>Help</Link></li>
          <li><Link to="/account" style={navLink}>Account</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section style={{
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
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '1rem',
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: '10px 20px',
          borderRadius: '12px'
        }}>
          Empowering Farmers, Enriching Buyers
        </h1>
        <p style={{
          fontSize: '1.3rem',
          maxWidth: '800px',
          marginBottom: '2rem',
          backgroundColor: 'rgba(0,0,0,0.3)',
          padding: '10px',
          borderRadius: '10px'
        }}>
          A seamless marketplace where transparency meets trust. Shop directly from India’s verified growers.
        </p>
        <div>
          <Link to="/products" style={ctaButton}>Start Shopping</Link>
          <Link to="/help" style={{
            ...ctaButton,
            backgroundColor: '#ffffff',
            color: '#2e7d32',
            marginLeft: '1rem'
          }}>Need Help?</Link>
        </div>
      </section>

      {/* Enhanced Feature Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f2f2f2' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#2e7d32' }}>Why Choose FarmFlow?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((item, index) => (
            <div key={index} style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '2rem 1.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
            }}>
              <img src={item.image} alt={item.title} style={{ width: '70px', height: '70px', marginBottom: '1rem' }} />
              <h3 style={{ color: '#2e7d32', fontSize: '1.2rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#444' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const navLink = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1rem'
};

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

export default BuyerHomePage;
