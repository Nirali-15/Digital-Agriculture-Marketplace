import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Make sure the logo path is correct

function HomePage() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#121212', // Dark grey/black
    padding: '14px 28px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#f1f1f1',
    fontWeight: 'bold',
    fontSize: '1.6rem',
  };

  const logoImageStyle = {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    marginRight: '12px',
    border: '2px solid #f1f1f1',
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '18px',
  };

  const linkStyle = {
    textDecoration: 'none',
    backgroundColor: '#2e2e2e',
    color: '#f0f0f0',
    padding: '10px 18px',
    borderRadius: '6px',
    fontWeight: '500',
    border: '1px solid #555',
    transition: '0.3s ease-in-out',
  };

  const loginButtonStyle = {
    ...linkStyle,
    backgroundColor: '#1e88e5',
    color: '#fff',
    border: 'none',
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={navbarStyle}>
        <Link to="/" style={logoContainerStyle}>
          <img src={logo} alt="Logo" style={logoImageStyle} />
          FarmFlow
        </Link>

        <div style={linkContainerStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About Us</Link>
          <Link to="/help" style={linkStyle}>Help</Link>
          <Link to="/services" style={linkStyle}>Services</Link>
          <Link to="/login" style={loginButtonStyle}>Login</Link>
        </div>
      </nav>
    </div>
  );
}

export default HomePage;
