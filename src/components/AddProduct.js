// AddProduct.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: '',
    image: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.price) {
      onAddProduct(product); // Pass data to parent
      navigate('/products'); // Navigate to product list
    } else {
      alert('Please fill all required fields.');
    }
  };

  return (
    <div style={formContainer}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Add Product</button>
      </form>
    </div>
  );
};

const formContainer = {
  padding: '2rem',
  maxWidth: '500px',
  margin: 'auto',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
};

const inputStyle = {
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  padding: '10px',
  fontSize: '1rem',
  backgroundColor: '#32CD32',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default AddProduct;
