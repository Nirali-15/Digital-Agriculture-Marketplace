import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Adjust the path to match your project structure
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav style={navStyle}>
      <div style={leftLogoStyle}>
        <img src={logo} alt="FarmFlow Logo" style={logoImageStyle} />
        <h5 style={logoTextStyle}>FarmFlow</h5>
      </div>

      <ul style={rightMenuStyle}>
        <li style={menuItemStyle}>
          <Link to="/" style={linkStyle}>{t("Home")}</Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/services" style={linkStyle}>{t("Services")}</Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/help" style={linkStyle}>{t("Help")}</Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/login" style={loginBtnStyle}>{t("Login")}</Link>
        </li>
        <li style={menuItemStyle}>
          <select
            onChange={handleLanguageChange}
            value={i18n.language}
            style={langDropdownStyle}
          >
            <option value="en">🌐 EN</option>
            <option value="hi">🇮🇳 HI</option>
            <option value="gu">🇮🇳 GU</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

const navStyle = {
  backgroundColor: '#333',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const leftLogoStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '34px',
};

const logoImageStyle = {
  height: '50px',
  objectFit: 'contain',
  marginRight: '10px',
};

const logoTextStyle = {
  color: 'white',
  wordSpacing: '2px',
  fontSize: '28px',
  fontWeight: 'bold',
  fontFamily: `'Poppins', sans-serif`,
};

const rightMenuStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
};

const menuItemStyle = {
  margin: '0 10px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '18px',
  fontWeight: 'bold',
  transition: 'color 0.3s ease',
};

const loginBtnStyle = {
  textDecoration: 'none',
  color: '#fff',
  fontSize: '18px',
  fontWeight: 'bold',
  backgroundColor: '#32CD32',
  padding: '8px 15px',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
};

const langDropdownStyle = {
  padding: '6px',
  fontSize: '15px',
  fontWeight: 'bold',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#fff',
  cursor: 'pointer',
};

export default Navbar;
