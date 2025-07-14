import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Adjust if your path differs

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#e3f2fd",
        textAlign: "center",
        padding: "20px 0 10px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
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
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <img
            src={logo}
            alt="FarmFlow Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
          <h3 style={{ margin: 0, color: "#1565c0" }}>FarmFlow</h3>
        </div>

        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontWeight: "bold", color: "#333", marginBottom: "8px" }}>Explore</p>
            <Link to="/" style={linkStyle}>Overview</Link>
            <Link to="/services" style={linkStyle}>Features</Link>
            <Link to="/help" style={linkStyle}>Help</Link>
          </div>

          <div style={{ textAlign: "left" }}>
            <p style={{ fontWeight: "bold", color: "#333", marginBottom: "8px" }}>Company</p>
            <Link to="/contact" style={linkStyle}>Contact Us</Link>
            <a href="/#about-us" style={linkStyle}>About Us</a>
            <Link to="/newsletter" style={linkStyle}>Newsletter</Link>
          </div>
        </div>
      </div>

      <p style={{ marginTop: "20px", color: "#666", fontSize: "12px" }}>
        © 2025 FarmFlow. All rights reserved.
      </p>
    </footer>
  );
};

const linkStyle = {
  display: "block",
  color: "#000",
  textDecoration: "none",
  fontSize: "14px",
  marginBottom: "6px",
  transition: "color 0.3s",
  cursor: "pointer"
};

export default Footer;
