import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "buyer",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const styles = {
    body: {
      margin: 0,
      fontFamily: "Arial, sans-serif",
      background:
        "url('https://wallpaperaccess.com/full/3158925.jpg') no-repeat center center fixed",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      padding: "40px 20px",
      boxSizing: "border-box",
    },
    container: {
      width: "100%",
      maxWidth: "460px",
      padding: "30px",
      backgroundColor: "rgba(255,255,255,0.95)",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    },
    logoImage: {
      width: "120px",
      height: "120px",
      objectFit: "contain",
      display: "block",
      margin: "0 auto 15px auto",
    },
    formHeader: {
      fontSize: "26px",
      fontWeight: "bold",
      color: "#1d4570",
      textAlign: "center",
      marginBottom: "10px",
    },
    formDescription: {
      fontSize: "14px",
      color: "#555",
      textAlign: "center",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "18px",
    },
    label: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "6px",
      display: "block",
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      outline: "none",
    },
    formActions: {
      textAlign: "center",
      marginTop: "20px",
    },
    button: {
      padding: "10px 24px",
      backgroundColor: "#1d4570",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
    },
    link: {
      fontSize: "14px",
      color: "#1d4570",
      textDecoration: "none",
    },
    errorText: {
      color: "red",
      fontSize: "12px",
      marginTop: "5px",
    },
    passwordToggle: {
      position: "absolute",
      right: "12px",
      top: "35px",
      cursor: "pointer",
      fontSize: "13px",
      color: "#1d4570",
    },
    passwordWrapper: {
      position: "relative",
    },
    footerText: {
      textAlign: "center",
      fontSize: "14px",
      marginTop: "20px",
    },
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    if (Object.keys(newErrors).length === 0) {
      // ✅ Store role
      localStorage.setItem("userRole", formData.role);

      // ✅ Navigate based on role
      if (formData.role === "seller") {
        navigate("/seller");
      } else {
        navigate("/buyer");
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <img src={logo} alt="Logo" style={styles.logoImage} />
        <div style={styles.formHeader}>Login</div>
        <div style={styles.formDescription}>Access your account.</div>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.email && <div style={styles.errorText}>{errors.email}</div>}
          </div>

          <div style={{ ...styles.formGroup, ...styles.passwordWrapper }}>
            <label style={styles.label}>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
            <span
              style={styles.passwordToggle}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
            {errors.password && (
              <div style={styles.errorText}>{errors.password}</div>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />{" "}
              Remember me
            </label>
            <span style={{ float: "right" }}>
              <a href="/forgot-password" style={styles.link}>
                Forgot Password?
              </a>
            </span>
          </div>

          <div style={styles.formActions}>
            <button type="submit" style={styles.button}>
              Login
            </button>
          </div>
        </form>
        <div style={styles.footerText}>
          Don’t have an account?{" "}
          <a href="/signup" style={styles.link}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
