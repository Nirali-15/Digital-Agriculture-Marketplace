import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Account = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    district: '',
    village: '',
    address: '',
    pincode: '',
  });

  const [role, setRole] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email') || '';
    const storedName = localStorage.getItem('fullName') || '';
    const storedPhone = localStorage.getItem('phone') || '';
    const storedRole = localStorage.getItem('role') || 'buyer';
    const savedData = JSON.parse(localStorage.getItem('accountData')) || {};
    const savedImage = localStorage.getItem('profileImage');
    const lastSaved = localStorage.getItem('lastUpdated');

    setUserData({
      fullName: storedName || savedData.fullName || '',
      email: storedEmail || savedData.email || '',
      phone: storedPhone || savedData.phone || '',
      state: savedData.state || '',
      district: savedData.district || '',
      village: savedData.village || '',
      address: savedData.address || '',
      pincode: savedData.pincode || '',
    });

    setRole(storedRole);
    setProfileImage(savedImage || null);
    setLastUpdated(lastSaved);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
      localStorage.setItem('profileImage', reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const { fullName, email, phone, state, district, village } = userData;
    if (!fullName || !email || !phone || !state || !district || !village) {
      alert('Please fill all required fields (*)');
      return;
    }

    const date = new Date().toLocaleString();
    localStorage.setItem('accountData', JSON.stringify(userData));
    localStorage.setItem('lastUpdated', date);
    setLastUpdated(date);
    alert('Profile saved successfully!');
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <span style={styles.logoText}>FarmFlow</span>
        </div>
        <div style={styles.navLinks}>
          <Link to="/SellerHomePage" style={styles.navItem}>Home</Link>
          <Link to="/seller/products" style={styles.navItem}>My Products</Link>
          <Link to="/account" style={styles.navItem}>Account</Link>
          <Link to="/notifications" style={styles.navItem}>Notifications</Link>
        </div>
      </nav>

      {/* Body */}
      <div style={styles.page}>
        <div style={styles.leftPane}>
          <img
            src={profileImage || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}
            alt="Profile"
            style={styles.profileImage}
          />
          <label style={styles.uploadLabel}>Change Profile Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <h2 style={styles.name}>{userData.fullName || 'Your Name'}</h2>
          <p style={styles.role}><strong>Role:</strong> {role?.toUpperCase()}</p>
          {lastUpdated && <p style={styles.updated}>Last updated: {lastUpdated}</p>}
          <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
        </div>

        <div style={styles.rightPane}>
          <h2 style={styles.heading}>Account Information</h2>

          {inputField('Full Name *', 'fullName', userData.fullName, handleChange)}
          {inputField('Email *', 'email', userData.email, handleChange, 'email')}
          {inputField('Phone *', 'phone', userData.phone, handleChange, 'tel')}
          {inputField('State *', 'state', userData.state, handleChange)}
          {inputField('District *', 'district', userData.district, handleChange)}
          {inputField('Village/Town *', 'village', userData.village, handleChange)}
          {inputField('Address (optional)', 'address', userData.address, handleChange)}
          {inputField('Pincode (optional)', 'pincode', userData.pincode, handleChange)}

          <button onClick={handleSave} style={styles.saveBtn}>Save Changes</button>
        </div>
      </div>
    </>
  );
};

const inputField = (label, name, value, onChange, type = "text") => (
  <div style={styles.inputGroup}>
    <label style={styles.label}>{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} style={styles.input} />
  </div>
);

const styles = {
  navbar: {
    backgroundColor: '#2e7d32',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    flexWrap: 'wrap',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
  navItem: {
    backgroundColor: '#fff',
    color: '#2e7d32',
    padding: '8px 14px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  page: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Segoe UI, sans-serif',
    padding: '2rem',
    gap: '2rem',
  },
  leftPane: {
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  profileImage: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #2e7d32',
  },
  uploadLabel: {
    marginTop: '1rem',
    fontSize: '14px',
    color: '#555',
    display: 'block',
  },
  name: {
    fontSize: '1.5rem',
    marginTop: '1rem',
    color: '#2e7d32',
  },
  role: {
    fontSize: '1rem',
    color: '#666',
  },
  updated: {
    fontSize: '12px',
    marginTop: '0.5rem',
    color: '#888',
  },
  logoutBtn: {
    marginTop: '1.5rem',
    padding: '10px 20px',
    backgroundColor: '#c0392b',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  rightPane: {
    width: '70%',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '1.8rem',
    color: '#2e7d32',
    marginBottom: '1.5rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
  },
  label: {
    fontWeight: '600',
    marginBottom: '6px',
    color: '#333',
  },
  input: {
    padding: '10px',
    fontSize: '15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  saveBtn: {
    marginTop: '1rem',
    padding: '12px 25px',
    backgroundColor: '#2e7d32',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default Account;
