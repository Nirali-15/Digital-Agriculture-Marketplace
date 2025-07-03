import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const SelNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const data = [
      { id: 1, message: 'New buyer request received.', time: '2 hours ago' },
      { id: 2, message: 'Product stock updated successfully.', time: '1 day ago' },
      { id: 3, message: 'Reminder: Update your harvest details.', time: '3 days ago' },
    ];
    setNotifications(data);
  }, []);

  const handleCheckboxChange = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelected([]);
    } else {
      setSelected(notifications.map((n) => n.id));
    }
    setSelectAll(!selectAll);
  };

  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="FarmFlow" style={styles.logo} />
          <span style={styles.logoText}>FarmFlow</span>
        </div>
        <div style={styles.navLinks}>
          <Link to="/SellerHomePage" style={styles.navItem}>Home</Link>
          <Link to="/seller/products" style={styles.navItem}>My Products</Link>
          <Link to="/seller/add-product" style={styles.navItem}>Add Product</Link>
          <Link to="/buyer-requests" style={styles.navItem}>Buyer Requests</Link>
          <Link to="/analytics" style={styles.navItem}>Analytics</Link>
          <Link to="/account" style={styles.navItem}>Account</Link>
        </div>
      </nav>

      <div style={styles.container}>
        <h2 style={styles.heading}>Notifications</h2>

        {notifications.length > 0 ? (
          <div style={styles.tableContainer}>
            <div style={styles.tableHeader}>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
              <span style={{ marginLeft: 8, fontWeight: 'bold' }}>Select All</span>
            </div>
            {notifications.map((note) => (
              <div key={note.id} style={styles.notificationCard}>
                <input
                  type="checkbox"
                  checked={selected.includes(note.id)}
                  onChange={() => handleCheckboxChange(note.id)}
                />
                <div style={styles.textContent}>
                  <p style={styles.message}>{note.message}</p>
                  <p style={styles.time}>{note.time}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>No notifications available.</p>
        )}
      </div>
    </>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#2e7d32',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
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
  },
  navItem: {
    backgroundColor: '#fff',
    color: '#2e7d32',
    padding: '8px 14px',
    borderRadius: '20px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  container: {
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '1.8rem',
    color: '#2c3e50',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  tableContainer: {
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '1rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  notificationCard: {
    display: 'flex',
    alignItems: 'flex-start',
    borderBottom: '1px solid #e0e0e0',
    padding: '1rem 0',
    gap: '1rem',
  },
  textContent: {
    flex: 1,
  },
  message: {
    margin: 0,
    fontSize: '1rem',
    color: '#333',
  },
  time: {
    margin: 0,
    fontSize: '0.85rem',
    color: '#777',
  },
};

export default SelNotification;
