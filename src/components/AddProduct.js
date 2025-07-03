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

  const compressImage = async (file) => {
    if (typeof file === 'string' && file.startsWith('data:image')) {
      return file; // already base64
    }

    return new Promise((resolve) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        img.src = e.target.result;
      };

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxWidth = 800;
        const scaleSize = maxWidth / img.width;
        canvas.width = maxWidth;
        canvas.height = img.height * scaleSize;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          (blob) => {
            const newReader = new FileReader();
            newReader.onloadend = () => resolve(newReader.result);
            newReader.readAsDataURL(blob);
          },
          'image/jpeg',
          0.7
        );
      };

      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
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

    const compressedImages = await Promise.all(
      (product.images.length > 0
        ? product.images
        : editingProduct?.images || []
      ).map((img) => compressImage(img))
    );

    const finalProduct = {
      ...product,
      id: editingProduct?.id || Date.now(),
      images: compressedImages,
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
          <Link to="/notifications" style={styles.navItem}>Notifications</Link>
          <Link to="/buyer-requests" style={styles.navItem}>Buyer Requests</Link>
          <Link to="/analytics" style={styles.navItem}>Analytics</Link>
          <Link to="/account" style={styles.navItem}>Account</Link>
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

            <select name="category" value={product.category} onChange={handleChange} style={styles.select}>
              <option value="">Select Category</option>
              {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            {errors.category && <div style={styles.errorText}>{errors.category}</div>}

            <input name="unit" placeholder="Unit (kg/liters/bunch)" value={product.unit} onChange={handleChange} style={styles.input} />
            {errors.unit && <div style={styles.errorText}>{errors.unit}</div>}

            <input name="quantity" type="number" placeholder="Quantity" value={product.quantity} onChange={handleChange} style={styles.input} />
            {errors.quantity && <div style={styles.errorText}>{errors.quantity}</div>}

            <input type="date" name="harvestDate" value={product.harvestDate} onChange={handleChange} style={styles.input} />
            {errors.harvestDate && <div style={styles.errorText}>{errors.harvestDate}</div>}

            <textarea name="description" placeholder="Product Description" rows="3" value={product.description} onChange={handleChange} style={styles.textarea} />
            {errors.description && <div style={styles.errorText}>{errors.description}</div>}

            <textarea name="storage" placeholder="Storage Instructions (optional)" rows="2" value={product.storage} onChange={handleChange} style={styles.textarea} />

            <input name="location" placeholder="Farm Location" value={product.location} onChange={handleChange} style={styles.input} />
            {errors.location && <div style={styles.errorText}>{errors.location}</div>}

            <div style={styles.checkbox}>
              <input type="checkbox" name="organic" checked={product.organic} onChange={handleChange} />
              <label>Organic Product</label>
            </div>

            <div style={styles.checkbox}>
              <input type="checkbox" name="stock" checked={product.stock} onChange={handleChange} />
              <label>In Stock</label>
            </div>

            <input type="file" multiple accept="image/*" onChange={handleImageChange} />
            {errors.images && <div style={styles.errorText}>{errors.images}</div>}

            {product.imagePreviews.length > 0 && (
              <div style={styles.imageCarousel}>
                {product.imagePreviews.map((src, idx) => (
                  <img key={idx} src={src} alt={`Preview ${idx}`} style={styles.imagePreview} />
                ))}
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
    textDecoration: 'none',
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
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
    padding: '3rem 0',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: '90%',
    maxWidth: '700px',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#2e7d32',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  select: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  checkbox: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  imageCarousel: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  imagePreview: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#2e7d32',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  errorText: {
    color: 'red',
    fontSize: '12px',
  },
};

export default AddProduct;
