// Products.js
import React from 'react';

const Products = ({ products }) => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>All Products</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
        }}>
          {products.map((prod, index) => (
            <div key={index} style={{
              border: '1px solid #ddd',
              padding: '1rem',
              borderRadius: '10px',
              backgroundColor: '#fff'
            }}>
              {prod.image && <img src={prod.image} alt={prod.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />}
              <h3>{prod.name}</h3>
              <p>₹{prod.price}</p>
              <p>{prod.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
