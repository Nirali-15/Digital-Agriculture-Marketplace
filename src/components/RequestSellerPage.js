import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const RequestSellerPage = () => {
  const [formData, setFormData] = useState({
    product: '',
    quantity: '',
    unit: '',
    note: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Request submitted for ${formData.quantity} ${formData.unit} of ${formData.product}`);
    // You can add API integration here
    setFormData({ product: '', quantity: '', unit: '', note: '' });
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="FarmFlow" style={styles.logo} />
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
          <Link to="/request-seller" style={{ ...styles.navItem, backgroundColor: '#c8e6c9' }}>Request Seller</Link>
          <Link to="/account" style={styles.navItem}>Account</Link>
        </div>
      </nav>

      {/* Request Form */}
      <div style={styles.container}>
        <h2 style={styles.title}>Request a Product from Seller</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>Product Name:</label>
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Unit:</label>
          <select
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="">Select Unit</option>
            <option value="kg">Kg</option>
            <option value="L">Litre</option>
            <option value="packets">Packets</option>
            <option value="pieces">Pieces</option>
            <option value="bunches">Bunches</option>
          </select>

          <label style={styles.label}>Additional Notes:</label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            style={styles.textarea}
            placeholder="Mention any specific details like quality, delivery expectations..."
          />

          <button type="submit" style={styles.submitBtn}>Submit Request</button>
        </form>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  page: {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f9f9fb',
    minHeight: '100vh'
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#2e7d32',
    flexWrap: 'wrap'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  logo: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
  },
  navLinks: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  navItem: {
    backgroundColor: '#fff',
    color: '#2e7d32',
    padding: '8px 14px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    maxWidth: '600px',
    margin: '3rem auto',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  title: {
    textAlign: 'center',
    color: '#2e7d32',
    marginBottom: '2rem',
    fontSize: '1.8rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem'
  },
  label: {
    fontWeight: 'bold',
    color: '#444'
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  },
  select: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  },
  textarea: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    minHeight: '100px',
    resize: 'vertical'
  },
  submitBtn: {
    backgroundColor: '#2e7d32',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }
};

export default RequestSellerPage;
