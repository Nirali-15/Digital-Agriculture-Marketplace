// src/components/ProductDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const selected = storedProducts.find((p) => String(p.id) === productId);
    setProduct(selected);

    const allReviews = JSON.parse(localStorage.getItem('reviews')) || {}; // { productId: [review1, review2, ...] }
    setReviews(allReviews[productId] || []);
  }, [productId]);

  if (!product) return <div style={{ padding: '2rem' }}>Loading product details...</div>;

  return (
    <>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="FarmFlow" style={styles.logo} />
          <span style={styles.logoText}>FarmFlow</span>
        </div>
        <div style={styles.navLinks}>
          <Link to="/SellerHomePage" style={styles.navItem}>Home</Link>
          <Link to="/seller/products" style={styles.navItem}>My Products</Link>
        </div>
      </nav>

      <div style={styles.container}>
        <h2 style={styles.heading}>{product.name}</h2>
        <div style={styles.content}>
          <div style={styles.imageSection}>
            {product.images?.map((src, i) => (
              <img key={i} src={src} alt={`Product ${i}`} style={styles.image} />
            ))}
          </div>

          <div style={styles.details}>
            <p><b>Price:</b> ₹{product.price}</p>
            <p><b>Quantity:</b> {product.quantity} {product.unit}</p>
            <p><b>Harvest Date:</b> {product.harvestDate}</p>
            <p><b>Location:</b> {product.location}</p>
            <p><b>Organic:</b> {product.organic ? 'Yes' : 'No'}</p>
            <p><b>Storage:</b> {product.storage}</p>
            <p><b>Description:</b> {product.description}</p>
          </div>
        </div>

        <div style={styles.reviewsSection}>
          <h3>Buyer Reviews</h3>
          {reviews.length === 0 ? (
            <p>No reviews yet for this product.</p>
          ) : (
            <ul>
              {reviews.map((rev, index) => (
                <li key={index} style={styles.reviewItem}>
                  <p><b>{rev.buyerName}</b> ({rev.date})</p>
                  <p>{rev.text}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button onClick={() => navigate(-1)} style={styles.backBtn}>← Go Back</button>
      </div>
    </>
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
    flexWrap: 'wrap',
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
  },
  navItem: {
    backgroundColor: '#fff',
    color: '#2e7d32',
    padding: '8px 14px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  container: {
    padding: '2rem',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#2e7d32',
  },
  content: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  imageSection: {
    flex: '1',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  image: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  details: {
    flex: '1',
    fontSize: '1rem',
    color: '#333',
  },
  reviewsSection: {
    marginTop: '2rem',
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
  },
  reviewItem: {
    borderBottom: '1px solid #ddd',
    paddingBottom: '0.5rem',
    marginBottom: '0.5rem',
  },
  backBtn: {
    marginTop: '2rem',
    padding: '10px 20px',
    backgroundColor: '#2e7d32',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductDetails;