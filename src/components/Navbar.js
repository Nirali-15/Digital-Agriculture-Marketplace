import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Adjust the path to match your project structure

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={leftLogoStyle}>
        <img src={logo} alt="FarmFlow Logo" style={logoImageStyle} />
        <h5 style={logoTextStyle}>FarmFlow</h5>
      </div>
      <ul style={rightMenuStyle}>
        <li style={menuItemStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/services" style={linkStyle}>Services</Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/help" style={linkStyle}>Help</Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/login" style={loginBtnStyle}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

const navStyle = {
  backgroundColor: '#333',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const leftLogoStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '34px',
};

const logoImageStyle = {
  height: '50px', // Increased the height for a bigger logo
  objectFit: 'contain',
  marginRight: '10px', // Adds spacing between the logo and the text
};

const logoTextStyle = {
  color: 'white',
  wordSpacing: '2px',
  fontSize: '28px', // Larger font size
  fontWeight: 'bold',
  fontFamily: `'Poppins', sans-serif`, // Modern, clean font
};

const rightMenuStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
};

const menuItemStyle = {
  margin: '0 15px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '18px',
  fontWeight: 'bold',
  transition: 'color 0.3s ease',
};

const loginBtnStyle = {
  textDecoration: 'none',
  color: '#fff',
  fontSize: '18px',
  fontWeight: 'bold',
  backgroundColor: '#32CD32', // Green color for the login button
  padding: '8px 15px',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
};

export default Navbar;