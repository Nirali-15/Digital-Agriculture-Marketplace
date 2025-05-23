import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 style={{ textAlign: "center", color: "#ff4d4d" }}>Product not found</h2>;
  }

  const containerStyle = {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    maxHeight: "250px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const buttonContainer = {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  };

  const buttonStyle = {
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  };

  const buyNowStyle = { ...buttonStyle, backgroundColor: "#ff9800", color: "white" };
  const cartStyle = { ...buttonStyle, backgroundColor: "#3f51b5", color: "white" };
  const wishlistStyle = { ...buttonStyle, backgroundColor: "#e91e63", color: "white" };

  const starRating = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: "#333", marginBottom: "10px" }}>{product.name}</h2>
      {product.image && <img src={product.image} alt={product.name} style={imageStyle} />}
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Food Type:</strong> {product.foodType}</p>
      <p><strong>Category:</strong> {product.organic}</p>

      <p><strong>Reviews:</strong> {starRating(product.rating || 4)}</p>

      <div style={buttonContainer}>
        <button style={buyNowStyle}>Buy Now</button>
        <button style={cartStyle}>Add to Cart</button>
        <button style={wishlistStyle}>Wishlist</button>
      </div>

      {/* Navigating to Contact Page on Click */}
      <p style={{ marginTop: "15px" }}>
        <button
          onClick={() => navigate("/contact")}
          style={{
            background: "none",
            border: "none",
            color: "#007bff",
            cursor: "pointer",
            fontSize: "14px",
            textDecoration: "underline",
          }}
        >
          Have any doubt?
        </button>
      </p>
    </div>
  );
};

export default ProductDetails;
