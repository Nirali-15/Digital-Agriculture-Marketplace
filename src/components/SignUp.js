import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Replace with your image path
//import logo from "../image/Preview.png"; // Replace with your logo path

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      navigate("/EcommercePage");
    } else {
      setErrors(formErrors);
    }
  };

  const styles = {
    body: {
      margin: "0",
      fontFamily: "Arial, sans-serif",
      background:
        "url('https://wallpaperaccess.com/full/3158925.jpg') no-repeat center center fixed",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    container: {
      display: "flex",
      width: "1000px",
      height: "600px",
      boxShadow: "0 4px 8px rgba(11, 9, 9, 0.2)",
      borderRadius: "8px",
      overflow: "hidden",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
    sideImage: {
          width: '60%',
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        },
    formContainer: {
      width: "50%",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    formHeader: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "10px",
      textAlign: "center",
    },
    formDescription: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "20px",
      textAlign: "center",
    },
    formGroup: {
      marginBottom: "20px",
    },
    formLabel: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#333",
      display: "block",
      marginBottom: "5px",
    },
    formInput: {
      width: "100%",
      padding: "10px",
      fontSize: "14px",
      border: "1px solid #dabcbc",
      borderRadius: "4px",
    },
    formError: {
      color: "red",
      fontSize: "12px",
      marginTop: "5px",
    },
    formActions: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    formButton: {
      padding: "10px 20px",
      backgroundColor: "#1d4570",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
    },
    signupText: {
      textAlign: "center",
      fontSize: "14px",
      marginTop: "10px",
    },
    signupLink: {
      color: "#1d4570",
      textDecoration: "none",
      fontWeight: "bold",
    },
    logo: {
      display: "block",
      margin: "0 auto 20px",
      width: "100px",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.sideImage}></div>
        <div style={styles.formContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <div style={styles.formHeader}>Create an Account</div>
          <div style={styles.formDescription}>
            Sign up to get started and explore our features.
          </div>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel} htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                style={styles.formInput}
                required
              />
              {errors.fullName && (
                <div style={styles.formError}>{errors.fullName}</div>
              )}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel} htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                style={styles.formInput}
                required
              />
              {errors.email && (
                <div style={styles.formError}>{errors.email}</div>
              )}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel} htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                style={styles.formInput}
                required
              />
              {errors.password && (
                <div style={styles.formError}>{errors.password}</div>
              )}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel} htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                style={styles.formInput}
                required
              />
              {errors.confirmPassword && (
                <div style={styles.formError}>{errors.confirmPassword}</div>
              )}
            </div>
            <div style={styles.formActions}>
              <button type="submit" style={styles.formButton}>
                Sign Up
              </button>
            </div>
          </form>
          <div style={styles.signupText}>
            Already have an account?{" "}
            <a href="/login" style={styles.signupLink}>
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
