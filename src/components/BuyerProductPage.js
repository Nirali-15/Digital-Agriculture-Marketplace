import React, { useEffect, useState, useCallback } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './CartContext'; // Adjust path if needed
import banner1 from '../assets/rice.jpg';
import banner2 from '../assets/vegetables.jpeg';
import banner3 from '../assets/diary.jpeg';
import banner4 from '../assets/grains.jpeg';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const categories = ['All', 'Fruits', 'Vegetables', 'Grains', 'Dairy', 'Livestock', 'Organic Products'];

const BuyerProductPage = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('');
  const [onlyOrganic, setOnlyOrganic] = useState(false);
  const { addToCart } = useCart();
  const banners = [banner1, banner2, banner3, banner4];

  const filterProducts = useCallback(() => {
    let filtered = products.filter((p) =>
      (selectedCategory === 'All' || p.category === selectedCategory) &&
      (p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!onlyOrganic || p.organic)
    );

    if (sortBy === 'price') filtered = filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === 'latest') filtered = filtered.sort((a, b) => b.id - a.id);

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, onlyOrganic, sortBy]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="FarmFlow" style={styles.logo} />
          <span style={styles.logoText}>FarmFlow</span>
        </div>
        <div style={styles.navLinks}>
          <Link to="/buyer" style={styles.navItem}>Home</Link>
          <Link to="/buyer/products" style={{ ...styles.navItem, backgroundColor: '#c8e6c9' }}>Shop</Link>
          <Link to="/orders" style={styles.navItem}>Orders</Link>
          <Link to="/cart" style={styles.navItem}>
            <FaShoppingCart style={{ marginRight: '6px' }} />
            Cart
          </Link>
          <Link to="/account" style={styles.navItem}>Account</Link>
        </div>
      </nav>

      {/* Category Buttons */}
      <div style={styles.categoryContainer}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              ...styles.categoryButton,
              backgroundColor: selectedCategory === cat ? '#2e7d32' : '#fff',
              color: selectedCategory === cat ? '#fff' : '#2e7d32',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div style={styles.filterSection}>
        <input
          type="text"
          placeholder="Search by product name or description"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />

        <div style={styles.filterRow}>
          <label>
            <input type="checkbox" checked={onlyOrganic} onChange={() => setOnlyOrganic(!onlyOrganic)} />
            Organic
          </label>

          <select onChange={(e) => setSortBy(e.target.value)} style={styles.select}>
            <option value="">Sort By</option>
            <option value="price">Price (Low to High)</option>
            <option value="latest">Latest Added</option>
          </select>
        </div>
      </div>

      {/* Banners */}
      <div style={styles.bannerGrid}>
        {banners.map((img, index) => (
          <img key={index} src={img} alt={`Banner ${index + 1}`} style={styles.bannerImage} />
        ))}
      </div>

      {/* Product Grid */}
      <h2 style={styles.heading}>Explore Products</h2>
      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No products available.</p>
      ) : (
        <div style={styles.grid}>
          {filteredProducts.map((prod, index) => {
            const imageSrc = prod.images?.[0] || '';
            return (
              <div key={index} style={styles.card}>
                <img
                  src={imageSrc}
                  alt={prod.name}
                  style={styles.image}
                  onClick={() => setSelectedProduct(prod)}
                />
                <h3 style={styles.name}>{prod.name}</h3>
                <p style={styles.price}>₹{prod.price}</p>
                <button style={styles.cartBtn} onClick={() => handleAddToCart(prod)}>Add to Cart</button>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal View */}
      {selectedProduct && (
        <div style={styles.modalOverlay} onClick={() => setSelectedProduct(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProduct.name}</h2>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {selectedProduct.images?.map((img, i) => (
                <img key={i} src={img} alt={`img-${i}`} style={styles.modalImage} />
              ))}
            </div>
            <p><b>Description:</b> {selectedProduct.description}</p>
            <p><b>Price:</b> ₹{selectedProduct.price}</p>
            <p><b>Discounted Price:</b> ₹{(selectedProduct.price * 0.9).toFixed(2)} (10% off)</p>
            <p><b>Quantity:</b> {selectedProduct.quantity} {selectedProduct.unit}</p>
            <p><b>Organic:</b> {selectedProduct.organic ? 'Yes' : 'No'}</p>
            <p><b>Seller Info:</b> Seller ID: {selectedProduct.sellerId}</p>
            <p><b>Shipping Info:</b> Ships in 3–5 business days</p>
            <button style={styles.cartBtn} onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</button>
          </div>
        </div>
      )}
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
  categoryContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '0.5rem',
    padding: '1rem',
    backgroundColor: '#e8f5e9',
  },
  categoryButton: {
    padding: '0.6rem 1.2rem',
    border: '1px solid #2e7d32',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  filterSection: {
    padding: '1rem',
    textAlign: 'center',
  },
  searchInput: {
    padding: '10px 20px',
    width: '80%',
    maxWidth: '500px',
    borderRadius: '30px',
    border: '1px solid #ccc',
    marginBottom: '1rem',
  },
  filterRow: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  select: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  bannerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    padding: '1rem 2rem',
    textAlign: 'center',
  },
  bannerImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '12px',
  },
  heading: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '2rem',
    fontSize: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
    padding: '2rem',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  name: {
    fontSize: '1.2rem',
    color: '#333',
    margin: '0.5rem 0',
  },
  price: {
    color: '#27ae60',
    fontWeight: 'bold',
  },
  cartBtn: {
    padding: '8px 14px',
    backgroundColor: '#2e7d32',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    marginTop: '10px',
    cursor: 'pointer',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  modalImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
};

export default BuyerProductPage;
