import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("buyer");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "seller") {
      localStorage.setItem('sellerId', email);  // ✅ Set seller ID
      navigate('/seller');
    } else {
      localStorage.removeItem('sellerId');      // ✅ Clear seller ID for buyers
      navigate('/buyer');
    }
  };

  const handleForgotPassword = () => {
    if (!email) {
      alert("Please enter your email first.");
      return;
    }
    alert(`Password reset link sent to ${email}`);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const styles = {
    body: {
      margin: 0,
      fontFamily: 'Arial, sans-serif',
      background: "url('https://wallpaperaccess.com/full/3158925.jpg') no-repeat center center fixed",
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    container: {
      width: '450px',
      padding: '30px',
      backgroundColor: 'rgba(255,255,255,0.95)',
      borderRadius: '10px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    },
    logoImage: {
      width: '140px',
      height: '140px',
      objectFit: 'contain',
      display: 'block',
      margin: '0 auto 20px auto',
    },
    formHeader: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#1d4570',
      textAlign: 'center',
      marginBottom: '10px',
    },
    formDescription: {
      fontSize: '14px',
      color: '#555',
      textAlign: 'center',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '5px',
      display: 'block',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    passwordWrapper: {
      position: 'relative',
    },
    toggleText: {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      fontSize: '13px',
      color: '#1d4570',
    },
    formActions: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#1d4570',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    link: {
      fontSize: '14px',
      color: '#1d4570',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    footerText: {
      textAlign: 'center',
      fontSize: '14px',
      marginTop: '15px',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <img src={logo} alt="Logo" style={styles.logoImage} />
        <div style={styles.formHeader}>Welcome Back!</div>
        <div style={styles.formDescription}>Sign in to your account.</div>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              required
              placeholder="Enter email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordWrapper}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                required
                placeholder="Enter password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span style={styles.toggleText} onClick={togglePasswordVisibility}>
                {passwordVisible ? 'Hide' : 'Show'}
              </span>
            </div>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={styles.input}
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <div style={styles.formActions}>
            <span style={styles.link} onClick={handleForgotPassword}>
              Forgot Password?
            </span>
            <button type="submit" style={styles.button}>
              Sign In
            </button>
          </div>
        </form>
        <div style={styles.footerText}>
          Don't have an account?{" "}
          <a href="/signup" style={styles.link}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
