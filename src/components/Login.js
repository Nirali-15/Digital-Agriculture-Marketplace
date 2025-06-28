import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from "../assets/logo.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("buyer"); // Default role set to "buyer"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "buyer") {
      navigate('/buyer'); // Navigate to the e-commerce page
    } else if (role === "seller") {
      navigate('/seller'); // Navigate to the seller page
    }
  };

  const styles = {
    body: {
      margin: 0,
      fontFamily: 'Arial, sans-serif',
      backgroundImage: 'url("https://wallpaperaccess.com/full/3158925.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'rgba(247, 243, 243, 0.9)',
    },
    container: {
      display: 'flex',
      width: '1000px',
      height: '500px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    sideImage: {
      width: '60%',
      backgroundImage: `url(${logo})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    },
    formContainer: {
      width: '60%',
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    formHeader: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px',
      textAlign: 'center',
    },
    formDescription: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '20px',
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#333',
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    select: {
      width: '100%',
      padding: '10px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    formActions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    link: {
      fontSize: '14px',
      color: '#007bff',
      textDecoration: 'none',
    },
    formButton: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    signupText: {
      textAlign: 'center',
      fontSize: '14px',
      marginTop: '10px',
    },
    signupLink: {
      color: '#007bff',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Side Image */}
        <div style={styles.sideImage}></div>

        {/* Form Section */}
        <div style={styles.formContainer}>
          <div style={styles.formHeader}>Welcome Back!</div>
          <div style={styles.formDescription}>
            Sign in to access your account and explore our features.
          </div>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="email">
                Email Address
              </label>
              <input
                style={styles.input}
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="password">
                Password
              </label>
              <input
                style={styles.input}
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="role">
                Select Role
              </label>
              <select
                style={styles.select}
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <div style={styles.formActions}>
              <a style={styles.link} href="#signin">
                Forgot Password?
              </a>
              <button style={styles.formButton} type="submit">
                Sign In
              </button>
            </div>
          </form>
          <div style={styles.signupText}>
            Don't have an account?{' '}
            <a style={styles.signupLink} href="/signup">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
