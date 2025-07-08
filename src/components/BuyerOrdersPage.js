import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { FaTruck, FaHistory, FaCheckCircle, FaTimesCircle, FaShoppingCart } from 'react-icons/fa';

const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case 'delivered': return <FaCheckCircle color="#2e7d32" />;
    case 'shipped': return <FaTruck color="#f1c40f" />;
    case 'cancelled': return <FaTimesCircle color="#c0392b" />;
    default: return <FaHistory color="#777" />;
  }
};

const BuyerOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = [
          {
            id: 'ORD123456',
            productName: 'Organic Basmati Rice',
            quantity: '50 Kg',
            price: '₹3,500',
            status: 'Delivered',
            date: '2025-07-01',
          },
          {
            id: 'ORD123457',
            productName: 'Fresh Onions',
            quantity: '30 Kg',
            price: '₹1,800',
            status: 'Shipped',
            date: '2025-07-03',
          },
          {
            id: 'ORD123458',
            productName: 'Wheat Flour',
            quantity: '20 Kg',
            price: '₹1,000',
            status: 'Cancelled',
            date: '2025-06-29',
          }
        ];
        setOrders(data);
      } catch (err) {
        console.error('Failed to fetch orders:', err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <span style={styles.logoText}>FarmFlow</span>
        </div>
        <div style={styles.navLinks}>
          <Link to="/buyer" style={styles.navItem}>Home</Link>
          <Link to="/buyer/products" style={styles.navItem}>Shop</Link>
          <Link to="/orders" style={{ ...styles.navItem, backgroundColor: '#c8e6c9' }}>Orders</Link>
          <Link to="/cart" style={styles.navItem}>
            <FaShoppingCart style={{ marginRight: '6px' }} />
            Cart
          </Link>
          <Link to="/account" style={styles.navItem}>Account</Link>
        </div>
      </nav>

      {/* Order Section */}
      <div style={styles.container}>
        <h2 style={styles.heading}><FaHistory style={{ marginRight: '10px' }} />My Orders</h2>

        {orders.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666', marginTop: '2rem' }}>You have no orders yet.</p>
        ) : (
          <div style={styles.orderList}>
            {orders.map((order) => (
              <div key={order.id} style={styles.orderCard}>
                <div style={styles.iconBox}>{getStatusIcon(order.status)}</div>
                <div style={styles.orderInfo}>
                  <div style={styles.productTitle}>{order.productName}</div>
                  <div style={styles.detailLine}><strong>Order ID:</strong> {order.id}</div>
                  <div style={styles.detailLine}><strong>Quantity:</strong> {order.quantity}</div>
                  <div style={styles.detailLine}><strong>Date:</strong> {order.date}</div>
                </div>
                <div style={styles.statusBox}>
                  <div style={styles.statusText}>{order.status}</div>
                  <div style={styles.price}>{order.price}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
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
  container: {
    maxWidth: '1000px',
    margin: '3rem auto',
    padding: '0 1rem'
  },
  heading: {
    fontSize: '2rem',
    color: '#2e7d32',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem'
  },
  orderList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '1.5rem 2rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  iconBox: {
    fontSize: '1.8rem',
    marginRight: '1.5rem'
  },
  orderInfo: {
    flex: '1',
    minWidth: '250px'
  },
  productTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#2e7d32'
  },
  detailLine: {
    fontSize: '0.95rem',
    margin: '4px 0',
    color: '#555'
  },
  statusBox: {
    textAlign: 'right',
    minWidth: '130px'
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    marginBottom: '0.3rem'
  },
  price: {
    fontSize: '1rem',
    color: '#444'
  }
};

export default BuyerOrdersPage;
