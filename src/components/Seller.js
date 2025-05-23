import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Seller = ({ addProduct }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    foodType: "",
    organic: "Organic",
    image: null,
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price) {
      alert("Please fill all required fields!");
      return;
    }

    addProduct(product);
    setSuccessMessage("Product added successfully!");

    setTimeout(() => {
      setSuccessMessage("");
      navigate("/products");
    }, 2000);

    setProduct({
      name: "",
      price: "",
      description: "",
      foodType: "",
      organic: "Organic",
      image: null,
    });
  };

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
        
        <input type="text" placeholder="Search products..." 
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

      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Sell a Product</h2>

      {successMessage && <p style={{ color: "green", textAlign: "center", fontWeight: "bold" }}>{successMessage}</p>}

      {/* Product Form */}
      <form onSubmit={handleSubmit} style={{
        maxWidth: "500px",
        margin: "20px auto",
        padding: "20px",
        background: "white",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column"
      }}>
        <input type="text" placeholder="Name" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} required
          style={{ width: "100%", padding: "10px", marginTop: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />

        <input type="text" placeholder="Price" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} required
          style={{ width: "100%", padding: "10px", marginTop: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />

        <input type="text" placeholder="Food Type (e.g., Fruits, Vegetables)" value={product.foodType} onChange={(e) => setProduct({ ...product, foodType: e.target.value })}
          style={{ width: "100%", padding: "10px", marginTop: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />

        <select value={product.organic} onChange={(e) => setProduct({ ...product, organic: e.target.value })}
          style={{ width: "100%", padding: "10px", marginTop: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}>
          <option value="Organic">Organic</option>
          <option value="Non-Organic">Non-Organic</option>
        </select>

        <input type="file" accept="image/*" onChange={(e) => setProduct({ ...product, image: URL.createObjectURL(e.target.files[0]) })}
          style={{ width: "100%", padding: "10px", marginTop: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />

        <textarea placeholder="Description" value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })}
          style={{ width: "100%", padding: "10px", marginTop: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }} />

        <button type="submit"
          style={{
            marginTop: "15px",
            padding: "10px",
            border: "none",
            backgroundColor: "#3e8e41",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "0.3s"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#2e6c31"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#3e8e41"}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Seller;
