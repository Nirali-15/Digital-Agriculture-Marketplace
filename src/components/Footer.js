import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Adjust the path if needed

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#e0f2f1", // greenish tone
        textAlign: "center",
        padding: "30px 0 15px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.08)",
        marginTop: "auto"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "0 20px",
          flexWrap: "wrap"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
          <img
            src={logo}
            alt="FarmFlow Logo"
            style={{ width: "45px", height: "45px", marginRight: "10px" }}
          />
          <h3 style={{ margin: 0, color: "#00796b" }}>FarmFlow</h3>
        </div>

        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontWeight: "bold", color: "#004d40", marginBottom: "8px" }}>Explore</p>
            <Link to="/" style={linkStyle}>Overview</Link>
            <Link to="/services" style={linkStyle}>Features</Link>
            <Link to="/help" style={linkStyle}>Help</Link>
          </div>

          <div style={{ textAlign: "left" }}>
            <p style={{ fontWeight: "bold", color: "#004d40", marginBottom: "8px" }}>Company</p>
            <Link to="/contact" style={linkStyle}>Contact Us</Link>
            <a href="/#about-us" style={linkStyle}>About Us</a>
            <Link to="/newsletter" style={linkStyle}>Newsletter</Link>
          </div>
        </div>
      </div>

      <p style={{ marginTop: "25px", color: "#4f4f4f", fontSize: "12px" }}>
        © 2025 FarmFlow. All rights reserved.
      </p>
    </footer>
  );
};

const linkStyle = {
  display: "block",
  color: "#2e7d32", // subtle green
  textDecoration: "none",
  fontSize: "14px",
  marginBottom: "6px",
  transition: "color 0.3s ease",
  cursor: "pointer"
};

export default Footer;
