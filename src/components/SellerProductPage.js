import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import banner1 from '../assets/rice.jpg';
import banner2 from '../assets/vegetables.jpeg';
import banner3 from '../assets/diary.jpeg';
import banner4 from '../assets/grains.jpeg';
import logo from '../assets/logo.jpg';

const convertToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const categories = ['All', 'Fruits', 'Vegetables', 'Grains', 'Dairy', 'Livestock', 'Organic Products'];

const SellerProductPage = ({ products: initialProducts, setProducts }) => {
  const [products, setLocalProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const currentSellerId = localStorage.getItem('sellerId');
  const banners = [banner1, banner2, banner3, banner4];

  useEffect(() => {
    const prepareInitialProducts = async (rawProducts) => {
      const processed = await Promise.all(
        rawProducts.map(async (prod) => {
          const images = await Promise.all(
            (prod.images || []).map(async (img) => {
              if (typeof img === 'object' && img instanceof File) {
                return await convertToBase64(img);
              }
              return img;
            })
          );
          return { ...prod, images };
        })
      );
      setLocalProducts(processed);
      setProducts(processed);
      localStorage.setItem('products', JSON.stringify(processed));
    };

    const saved = localStorage.getItem('products');
    if (saved) {
      setLocalProducts(JSON.parse(saved));
    } else {
      prepareInitialProducts(initialProducts);
    }
  }, [initialProducts, setProducts]);

  const updateLocal = (list) => {
    setLocalProducts(list);
    setProducts(list);
    localStorage.setItem('products', JSON.stringify(list));
  };

  const handleDeleteProduct = (index) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const updated = products.filter((_, i) => i !== index);
      updateLocal(updated);
    }
  };

  const handleEditProduct = (product) => {
    navigate('/seller/add-product', { state: { product } });
  };

  const filteredProducts = products.filter(
    (p) =>
      p.sellerId === currentSellerId &&
      (selectedCategory === 'All' || p.category === selectedCategory) &&
      (p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="FarmFlow" style={styles.logo} />
          <span style={styles.logoText}>FarmFlow</span>
        </div>
        <div style={styles.navLinks}>
          {[
            { to: '/SellerHomePage', label: 'Home' },
            { to: '/seller/add-product', label: 'Add Product' },
            { to: '/seller/products', label: 'My Products' },
            { to: '/notifications', label: 'Notifications' },
            { to: '/buyer-requests', label: 'Buyer Requests' },
            { to: '/account', label: 'Account' },
            { to: '/analytics', label: 'Analytics' }
          ].map((item) => (
            <Link key={item.to} to={item.to} style={styles.navItem}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Content */}
      <div style={styles.container}>
        <div style={styles.bannerContainer}>
          <h2 style={styles.bannerHeading}>Your Product Highlights</h2>
          <div style={styles.bannerGrid}>
            {banners.map((img, index) => (
              <img key={index} src={img} alt={`Banner ${index + 1}`} style={styles.bannerImage} />
            ))}
          </div>
        </div>

        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search products by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>

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

        <h2 style={styles.heading}>My Products</h2>
        {filteredProducts.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No products in this category.</p>
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
                    onClick={() => navigate(`/product/${prod.id}`)}
                  />
                  <h3 style={styles.name}>{prod.name}</h3>
                  <p style={styles.price}>₹{prod.price}</p>
                  <p style={styles.desc}>{prod.description}</p>
                  <p style={styles.info}><b>Qty:</b> {prod.quantity} {prod.unit}</p>
                  <p style={styles.info}><b>Location:</b> {prod.location}</p>
                  <p style={styles.info}><b>Organic:</b> {prod.organic ? 'Yes' : 'No'}</p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={styles.deleteBtn} onClick={() => handleDeleteProduct(index)}>Delete</button>
                    <button style={styles.editBtn} onClick={() => handleEditProduct(prod)}>Edit</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

// Styles
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#2e7d32',
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
    gap: '10px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  navItem: {
    backgroundColor: '#ffffff',
    color: '#2e7d32',
    fontWeight: 'bold',
    padding: '8px 14px',
    borderRadius: '20px',
    textDecoration: 'none',
    transition: '0.3s ease-in-out',
  },
  container: {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  bannerContainer: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  bannerHeading: {
    fontSize: '1.8rem',
    color: '#2c3e50',
    marginBottom: '1rem',
  },
  bannerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    height: '200px',
    width: '100%',
    maxWidth: '300px',
    objectFit: 'cover',
    borderRadius: '12px',
  },
  searchContainer: {
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  searchInput: {
    padding: '10px 15px',
    width: '80%',
    maxWidth: '500px',
    borderRadius: '30px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  categoryContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '2rem',
  },
  categoryButton: {
    padding: '0.6rem 1.2rem',
    border: '1px solid #2e7d32',
    borderRadius: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: '#fff',
    transition: 'all 0.3s ease',
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
  },
  card: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease-in-out',
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
  desc: {
    color: '#555',
    fontSize: '0.95rem',
    margin: '0.5rem 0',
  },
  info: {
    fontSize: '0.9rem',
    color: '#777',
  },
  deleteBtn: {
    padding: '8px 12px',
    backgroundColor: 'crimson',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  editBtn: {
    padding: '8px 12px',
    backgroundColor: '#0275d8',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default SellerProductPage;
