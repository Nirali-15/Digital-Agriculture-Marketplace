import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const AddProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editingProduct = location.state?.product || null;

  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    category: '',
    unit: '',
    quantity: '',
    harvestDate: '',
    organic: false,
    stock: true,
    description: '',
    storage: '',
    location: '',
    images: [],
    imagePreviews: [],
    sellerId: '',
  });

  const [errors, setErrors] = useState({});
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const categories = ['Vegetables', 'Fruits', 'Grains', 'Dairy', 'Livestock', 'Organic Products'];

  useEffect(() => {
    if (editingProduct) {
      setProduct({
        ...editingProduct,
        imagePreviews: editingProduct.images || [],
        images: editingProduct.images || [],
      });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setProduct((prev) => ({
      ...prev,
      images: files,
      imagePreviews: previews,
    }));
  };

  // --- Fetch-based Seller Price Prediction ---
  const handlePredictPrice = async () => {
    if (!product.name || !product.harvestDate) {
      alert('Please enter Product Name and Harvest Date first');
      return;
    }

    try {
      // Convert harvestDate to [year, month, day]
      const date = new Date(product.harvestDate);
      const featuresArray = [date.getFullYear(), date.getMonth() + 1, date.getDate()];

      const response = await fetch('http://127.0.0.1:5000/predict/seller', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          commodity: product.name,   // exactly matches backend
          features: featuresArray,   // exactly matches backend
        }),
      });

      if (!response.ok) throw new Error('Prediction failed');

      const data = await response.json();
      setPredictedPrice(data.seller_price);
      setShowPopup(true);

    } catch (error) {
      console.error(error);
      alert('Failed to predict price. Check API or product name.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ['name', 'price', 'category', 'unit', 'quantity', 'harvestDate', 'description', 'location'];
    const fieldErrors = {};

    requiredFields.forEach((field) => {
      if (!product[field]) fieldErrors[field] = `${field} is required.`;
    });

    if (!editingProduct && product.images.length === 0) {
      fieldErrors.images = 'At least one image is required.';
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    const sellerId = localStorage.getItem('sellerId');
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

    const finalProduct = {
      ...product,
      id: editingProduct?.id || Date.now(),
      sellerId,
    };

    const updatedProducts = editingProduct
      ? existingProducts.map((p) => (p.id === editingProduct.id ? finalProduct : p))
      : [...existingProducts, finalProduct];

    localStorage.setItem('products', JSON.stringify(updatedProducts));
    navigate('/seller/products');
  };

  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <span style={styles.logoText}>FarmFlow</span>
        </div>
        <div style={styles.navLinks}>
          <Link to="/SellerHomePage" style={styles.navItem}>Home</Link>
          <Link to="/seller/add-product" style={styles.navItem}>Add Product</Link>
          <Link to="/seller/products" style={styles.navItem}>My Products</Link>
        </div>
      </nav>

      <div style={styles.body}>
        <div style={styles.container}>
          <h2 style={styles.heading}>{editingProduct ? 'Edit Product' : 'Add Farm Product'}</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input name="name" placeholder="Product Name" value={product.name} onChange={handleChange} style={styles.input} />
            {errors.name && <div style={styles.errorText}>{errors.name}</div>}

            <input type="number" name="price" placeholder="Price (₹)" value={product.price} onChange={handleChange} style={styles.input} />
            {errors.price && <div style={styles.errorText}>{errors.price}</div>}

            <input name="quantity" type="number" placeholder="Quantity" value={product.quantity} onChange={handleChange} style={styles.input} />
            {errors.quantity && <div style={styles.errorText}>{errors.quantity}</div>}

            <input type="date" name="harvestDate" value={product.harvestDate} onChange={handleChange} style={styles.input} />
            {errors.harvestDate && <div style={styles.errorText}>{errors.harvestDate}</div>}

            <select name="category" value={product.category} onChange={handleChange} style={styles.select}>
              <option value="">Select Category</option>
              {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            {errors.category && <div style={styles.errorText}>{errors.category}</div>}

            <button type="button" style={{...styles.button, backgroundColor: '#ffa000'}} onClick={handlePredictPrice}>
              Predict Seller Price
            </button>

            {showPopup && (
              <div style={styles.popupOverlay}>
                <div style={styles.popup}>
                  <h3>Predicted Seller Price</h3>
                  <p>₹ {predictedPrice}</p>
                  <button style={styles.button} onClick={() => setShowPopup(false)}>Close</button>
                </div>
              </div>
            )}

            <button type="submit" style={styles.button}>
              {editingProduct ? 'Update Product' : 'Add Product'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const styles = {
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#2e7d32', color: 'white', flexWrap: 'wrap' },
  logoContainer: { display: 'flex', alignItems: 'center', gap: '10px' },
  logo: { width: '40px', height: '40px', borderRadius: '50%' },
  logoText: { fontSize: '1.5rem', fontWeight: 'bold', color: 'white' },
  navLinks: { display: 'flex', gap: '1rem', flexWrap: 'wrap' },
  navItem: { backgroundColor: '#fff', color: '#2e7d32', padding: '8px 14px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' },
  body: { backgroundColor: '#f4f4f4', minHeight: '100vh', padding: '3rem 0', display: 'flex', justifyContent: 'center' },
  container: { width: '90%', maxWidth: '700px', backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' },
  heading: { textAlign: 'center', color: '#2e7d32', marginBottom: '1.5rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '10px', fontSize: '14px', borderRadius: '5px', border: '1px solid #ccc' },
  select: { padding: '10px', fontSize: '14px', borderRadius: '5px', border: '1px solid #ccc' },
  button: { padding: '12px', backgroundColor: '#2e7d32', color: '#fff', fontSize: '16px', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  errorText: { color: 'red', fontSize: '12px' },
  popupOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  popup: { backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', textAlign: 'center', minWidth: '300px' },
};

export default AddProduct;
