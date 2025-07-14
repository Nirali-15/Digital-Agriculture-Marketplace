import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Subscribe to Our Newsletter</h2>
        <p style={styles.subtext}>
          Stay updated with the latest news, agri market trends, and tips for farmers and buyers!
        </p>

        {submitted ? (
          <p style={{ color: "green", marginTop: "20px", fontWeight: "bold" }}>
            Thank you for subscribing!
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f9ff",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px 40px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
  },
  heading: {
    marginBottom: "10px",
    fontSize: "24px",
    color: "#1565c0",
  },
  subtext: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    padding: "10px 15px",
    width: "100%",
    maxWidth: "350px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    marginBottom: "15px",
    outline: "none",
  },
  button: {
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background 0.3s ease",
  },
};

export default Newsletter;
