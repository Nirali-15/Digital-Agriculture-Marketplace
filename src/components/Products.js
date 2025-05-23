import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Products = ({ products }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search input
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "20px" }}>
      {/* Navbar */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#222",
        padding: "10px 20px",
        color: "white"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={logo} alt="FarmFlow Logo" style={{ height: "50px" }} />
          <h1 style={{ fontSize: "24px", margin: 0 }}>FarmFlow</h1>
        </div>
        
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            width: "400px",
            fontSize: "16px"
          }} 
        />
        
        <ul style={{ listStyle: "none", display: "flex", gap: "20px", margin: 0, padding: 0 }}>
          <li><a href="/products" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>Products</a></li>
          <li><a href="/orders" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>Orders</a></li>
          <li><a href="/account" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>Account</a></li>
        </ul>
      </nav>

      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Available Products</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "15px",
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} style={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
              padding: "15px",
              textAlign: "center",
              transition: "transform 0.2s ease-in-out"
            }}>
              {product.image && <img src={product.image} alt={product.name} style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "5px"
              }} />}
              <h3 style={{ fontSize: "16px", marginBottom: "5px" }}>{product.name}</h3>
              <p style={{ fontSize: "14px", margin: "3px 0" }}>Price: ₹{product.price}</p>
              <p style={{ fontSize: "13px", margin: "3px 0" }}>Type: {product.foodType || "N/A"}</p>
              <p style={{ fontSize: "12px", color: "#555" }}>{product.organic}</p>
              <button
                style={{
                  backgroundColor: "#3e8e41",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  marginTop: "10px",
                  cursor: "pointer",
                  fontSize: "14px",
                  borderRadius: "5px",
                  transition: "0.3s"
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#2e6c31")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#3e8e41")}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                Know More
              </button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "16px", color: "#555" }}>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
