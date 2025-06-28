import React from 'react';

const ProductsPage = ({ products }) => {
  const safeProducts = products || [];

  if (safeProducts.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
        <h3>No products added yet. Please add some from the Seller Page.</h3>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🛒 Products</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {safeProducts.map((product, index) => (
          <div key={index} style={{
            border: '1px solid #ddd',
            borderRadius: '12px',
            padding: '1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            backgroundColor: '#fff'
          }}>
            <img src={product.imageUrl} alt={product.name} style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '1rem'
            }} />
            <h3 style={{ color: '#1c1c1c' }}>{product.name}</h3>
            <p style={{ color: '#388e3c', fontWeight: 'bold', fontSize: '1.1rem' }}>₹{product.price}</p>
            <p style={{ color: '#555' }}>{product.description}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
              <button style={cardBtn}>Add to Cart</button>
              <button style={cardBtn}>Order Now</button>
              <button style={cardBtnSecondary}>Review</button>
              <button style={cardBtnSecondary}>Any Doubts?</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const cardBtn = {
  padding: '0.5rem',
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

const cardBtnSecondary = {
  padding: '0.5rem',
  backgroundColor: '#e0f2f1',
  color: '#000',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

export default ProductsPage;
