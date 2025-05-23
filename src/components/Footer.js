import React from "react";

const Footer = () => {
  return (
    <footer style={{
      width: "100%",
      backgroundColor: "#f8f9fa",
      textAlign: "center",
      padding: "10px 0",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
      marginTop: "auto"
    }}>
      <div style={{ 
        maxWidth: "900px", 
        margin: "auto", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        padding: "0 20px"
      }}>
        <div style={{ textAlign: "left" }}>
          <p style={{ color: "#666", marginBottom: "5px" }}></p>
          <div>
            <a href="#" style={{ color: "#000", textDecoration: "none", fontSize: "14px", marginRight: "10px" }}>Overview</a>
            <a href="#" style={{ color: "#000", textDecoration: "none", fontSize: "14px", marginRight: "10px" }}>Features</a>
            <a href="#" style={{ color: "#000", textDecoration: "none", fontSize: "14px" }}>Help</a>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <a href="#" style={{ display: "block", color: "#000", textDecoration: "none", fontSize: "14px", marginBottom: "5px" }}>Contact Us</a>
          <a href="#" style={{ display: "block", color: "#000", textDecoration: "none", fontSize: "14px", marginBottom: "5px" }}>About Us</a>
          <a href="#" style={{ display: "block", color: "#000", textDecoration: "none", fontSize: "14px" }}>Newsletter</a>
        </div>
      </div>
      <p style={{ marginTop: "8px", color: "#666", fontSize: "12px" }}>© 2025 FarmFlow. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
