import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your query has been submitted. We'll get back to you soon!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  const containerStyle = {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f5f5dc",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = { color: "#4CAF50", marginBottom: "10px" };
  const labelStyle = { fontWeight: "bold", color: "#654321", display: "block", marginBottom: "5px" };
  const inputStyle = {
    width: "90%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #8B5A2B",
    borderRadius: "5px",
  };
  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact Us</h2>
      <p style={{ color: "#333" }}>📞 Phone: <strong>+91 98765 43210</strong></p>
      <p style={{ color: "#333" }}>📧 Email: <strong>support@farmconnect.com</strong></p>

      <h3 style={{ color: "#8B5A2B", marginTop: "15px" }}>Have a Doubt? Ask Us!</h3>
      
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Your Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />

        <label style={labelStyle}>Your Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />

        <label style={labelStyle}>Your Doubt</label>
        <textarea name="message" value={formData.message} onChange={handleChange} style={{ ...inputStyle, height: "100px" }} required />

        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
