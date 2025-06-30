import React, { useState } from 'react';

const Products = ({ products: initialProducts, onAddToCart, isSellerDashboard }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [products, setProducts] = useState(initialProducts);

  const currentSellerId = localStorage.getItem('sellerId');

  const handleImageClick = (imgUrl) => setPreviewImage(imgUrl);
  const handleClosePreview = () => setPreviewImage(null);

  const handleDeleteProduct = (indexToDelete) => {
    const updated = products.filter((_, idx) => idx !== indexToDelete);
    setProducts(updated);
  };

  const styles = {
    container: {
      padding: '2rem',
      background: '#f4f4f4',
      minHeight: '100vh',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
    },
    card: {
      position: 'relative',
      backgroundColor: '#fff',
      padding: '1rem',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    deleteBtn: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: 'red',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: '24px',
      height: '24px',
      fontSize: '16px',
      lineHeight: '20px',
      cursor: 'pointer',
    },
    image: {
      width: '100%',
      height: '180px',
      objectFit: 'cover',
      borderRadius: '8px',
      cursor: 'pointer',
      marginBottom: '10px',
    },
    name: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#1d4570',
      textAlign: 'center',
    },
    price: {
      color: '#444',
      fontWeight: '600',
      marginTop: '5px',
    },
    category: {
      fontSize: '14px',
      color: '#777',
      marginBottom: '10px',
    },
    description: {
      fontSize: '14px',
      color: '#555',
      textAlign: 'center',
      marginBottom: '10px',
    },
    reviews: {
      fontSize: '13px',
      color: '#999',
      marginBottom: '10px',
    },
    button: {
      backgroundColor: '#1d4570',
      color: '#fff',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalImage: {
      maxWidth: '90%',
      maxHeight: '90%',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>All Products</h2>

      {products.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No products added yet.</p>
      ) : (
        <div style={styles.grid}>
          {products.map((prod, index) => {
            let imageSrc = prod.imagePreview;
            if (!imageSrc && prod.images?.[0] instanceof File) {
              imageSrc = URL.createObjectURL(prod.images[0]);
            }

            return (
              <div key={index} style={styles.card}>
                {isSellerDashboard && prod.sellerId === currentSellerId && (
                  <button
                    style={styles.deleteBtn}
                    onClick={() => handleDeleteProduct(index)}
                    title="Delete Product"
                  >
                    ×
                  </button>
                )}

                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt={prod.name}
                    style={styles.image}
                    onClick={() => handleImageClick(imageSrc)}
                  />
                )}

                <div style={styles.name}>{prod.name}</div>
                <div style={styles.price}>₹{prod.price}</div>
                <div style={styles.category}>{prod.category}</div>
                <div style={styles.description}>
                  {prod.description || 'This is a sample product description.'}
                </div>
                <div style={styles.reviews}>⭐ 4.5 (122 reviews)</div>
                <button style={styles.button} onClick={() => onAddToCart(prod)}>
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      )}

      {previewImage && (
        <div style={styles.modal} onClick={handleClosePreview}>
          <img src={previewImage} alt="Preview" style={styles.modalImage} />
        </div>
      )}
    </div>
  );
};

export default Products;
