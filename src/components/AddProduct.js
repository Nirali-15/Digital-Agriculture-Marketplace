import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const AddProduct = ({ onAddProduct }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
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
  });

  const [errors, setErrors] = useState({});
  const categories = ['Vegetables', 'Fruits', 'Grains', 'Dairy', 'Livestock', 'Organic Products'];

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
    return new Promise((resolve) => {
      const img = new Image();
      const reader = new FileReader();
      reader.onload = (e) => (img.src = e.target.result);
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxWidth = 800;
        const scaleSize = maxWidth / img.width;
        canvas.width = maxWidth;
        canvas.height = img.height * scaleSize;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          const compressedFile = new File([blob], file.name, { type: 'image/jpeg' });
          resolve(compressedFile);
        }, 'image/jpeg', 0.7);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ['name', 'price', 'category', 'unit', 'quantity', 'harvestDate', 'description', 'location'];
    const fieldErrors = {};

    requiredFields.forEach((field) => {
      if (!product[field]) fieldErrors[field] = `${field[0].toUpperCase() + field.slice(1)} is required.`;
    });

    if (product.images.length === 0) fieldErrors.images = 'At least one image is required.';

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    const compressedImages = await Promise.all(product.images.map(compressImage));
    const previewURLs = compressedImages.map((img) => URL.createObjectURL(img));
    const sellerId = localStorage.getItem('sellerId'); // 🟩 Get seller ID from localStorage

    const productData = {
      ...product,
      images: compressedImages,
      imagePreviews: previewURLs,
      sellerId: sellerId, // 🟩 Add sellerId to product
    };

    onAddProduct(productData);
    navigate('/products');
  };

  const styles = {
    body: {
      margin: 0,
      fontFamily: 'Arial, sans-serif',
      background: "url('https://images.wallpapersden.com/image/wxl-field-farm-crop_15280.jpg') no-repeat center center fixed",
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '30px',
    },
    container: {
      width: '700px',
      padding: '30px',
      backgroundColor: 'rgba(255,255,255,0.95)',
      borderRadius: '10px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    },
    logo: {
      width: '120px',
      height: '120px',
      objectFit: 'contain',
      display: 'block',
      margin: '0 auto 20px',
    },
    heading: {
      fontSize: '26px',
      fontWeight: 'bold',
      color: '#1d4570',
      textAlign: 'center',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
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
    imagePreview: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    imageCarousel: {
      display: 'flex',
      gap: '10px',
    },
    button: {
      padding: '12px',
      backgroundColor: '#1d4570',
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

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <div style={styles.heading}>Add Farm Product</div>
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

          <input name="quantity" type="number" placeholder="Minimum Order Quantity" value={product.quantity} onChange={handleChange} style={styles.input} />
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

          <button type="submit" style={styles.button}>Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
