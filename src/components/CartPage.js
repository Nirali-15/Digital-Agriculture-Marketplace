import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems = [], removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => {
    const qty = item.quantity || 1;
    return sum + item.price * qty;
  }, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p style={styles.empty}>Your cart is empty.</p>
      ) : (
        <div style={styles.cartWrapper}>
          {/* Cart Items */}
          <div style={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.card}>
                <img
                  src={item.images?.[0] || 'https://via.placeholder.com/120'}
                  alt={item.name}
                  style={styles.image}
                />
                <div style={styles.details}>
                  <h3 style={styles.name}>{item.name}</h3>
                  <p style={styles.desc}>{item.description}</p>
                  <p style={styles.price}>₹{item.price}</p>
                  <div style={styles.qtyRow}>
                    <span>Qty: {item.quantity || 1}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={styles.removeBtn}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Panel */}
          <div style={styles.summaryBox}>
            <h3 style={styles.summaryHeading}>Order Summary</h3>
            <div style={styles.summaryContent}>
              <div style={styles.row}>
                <span>Subtotal</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div style={styles.row}>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr />
              <div style={{ ...styles.row, fontWeight: 'bold', fontSize: '1.1rem' }}>
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <button
                style={styles.checkoutBtn}
                onClick={() => navigate('/checkout')}
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem 3rem',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
    color: '#2e7d32',
  },
  empty: {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#666',
  },
  cartWrapper: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  cartItems: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  card: {
    display: 'flex',
    gap: '1.5rem',
    padding: '1rem',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    alignItems: 'flex-start',
  },
  image: {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '0.2rem',
  },
  desc: {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
  },
  price: {
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: '0.5rem',
  },
  qtyRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  removeBtn: {
    padding: '6px 14px',
    backgroundColor: '#e53935',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.85rem',
  },
  summaryBox: {
    flex: 1,
    minWidth: '280px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
    padding: '1.5rem',
    height: 'fit-content',
  },
  summaryHeading: {
    fontSize: '1.3rem',
    color: '#2e7d32',
    marginBottom: '1rem',
  },
  summaryContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    color: '#333',
  },
  checkoutBtn: {
    marginTop: '1rem',
    padding: '12px',
    backgroundColor: '#2e7d32',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.2s',
  },
};

export default CartPage;
