// SignUp.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const SignUp = () => {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState({ question: "", answer: "" });
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    captchaAnswer: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  useEffect(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ question: `${a} + ${b}`, answer: (a + b).toString() });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "password") checkPasswordStrength(value);
  };

  const checkPasswordStrength = (password) => {
    if (password.length < 6) setPasswordStrength("Weak");
    else if (password.match(/^(?=.*[A-Z])(?=.*[0-9])/)) setPasswordStrength("Strong");
    else setPasswordStrength("Medium");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    if (!formData.acceptTerms)
      newErrors.acceptTerms = "Please accept the terms and conditions.";

    if (formData.captchaAnswer !== captcha.answer)
      newErrors.captchaAnswer = "Captcha answer is incorrect.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", formData);
      navigate("/Login");
    } else {
      setErrors(formErrors);
    }
  };

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
    footerText: {
      textAlign: "center",
      fontSize: "14px",
      marginTop: "20px",
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
    strengthText: {
      fontSize: "12px",
      marginTop: "5px",
      color:
        passwordStrength === "Strong"
          ? "green"
          : passwordStrength === "Medium"
          ? "orange"
          : "red",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <img src={logo} alt="Logo" style={styles.logoImage} />
        <div style={styles.formHeader}>Create an Account</div>
        <div style={styles.formDescription}>Sign up to get started.</div>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              style={styles.input}
            />
            {errors.fullName && <div style={styles.errorText}>{errors.fullName}</div>}
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              style={styles.input}
            />
            {errors.username && <div style={styles.errorText}>{errors.username}</div>}
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={styles.input}
            />
            {errors.email && <div style={styles.errorText}>{errors.email}</div>}
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              style={styles.input}
            />
            {errors.phone && <div style={styles.errorText}>{errors.phone}</div>}
          </div>
          <div style={{ ...styles.formGroup, ...styles.passwordWrapper }}>
            <label style={styles.label}>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              style={styles.input}
            />
            <span
              style={styles.passwordToggle}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
            <div style={styles.strengthText}>
              Strength: {passwordStrength || "N/A"}
            </div>
            {errors.password && <div style={styles.errorText}>{errors.password}</div>}
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              style={styles.input}
            />
            {errors.confirmPassword && (
              <div style={styles.errorText}>{errors.confirmPassword}</div>
            )}
          </div>
          <div style={styles.formGroup}>
            <label>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
              />{" "}
              I accept the{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer" style={styles.link}>
                terms and conditions
              </a>
            </label>
            {errors.acceptTerms && (
              <div style={styles.errorText}>{errors.acceptTerms}</div>
            )}
          </div>
          {/* <div style={styles.formGroup}>
            <label style={styles.label}>Captcha: {captcha.question}</label>
            <input
              type="text"
              name="captchaAnswer"
              value={formData.captchaAnswer}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Answer"
            />
            {errors.captchaAnswer && (
              <div style={styles.errorText}>{errors.captchaAnswer}</div>
            )}
          </div> */}
          <div style={styles.formActions}>
            <button type="submit" style={styles.button}>
              Sign Up
            </button>
          </div>
        </form>
        <div style={styles.footerText}>
          Already have an account?{" "}
          <a href="/login" style={styles.link}>
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
