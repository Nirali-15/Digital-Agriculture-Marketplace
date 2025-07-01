import React, { useState } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import vegies from '../assets/vegies.jpg';
import farm1 from "../assets/farm1.jpg";
import farm2 from "../assets/farm2.jpg";
import farm3 from "../assets/farm3.jpg";
import maize from "../assets/maize.jpg";

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const images = [farm1, farm2, farm3, maize];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  pauseOnHover: true,
};

const HomePage = () => {
  const [isAboutUsVisible, setAboutUsVisible] = useState(false);

  const handleAboutUsToggle = () => {
    setAboutUsVisible(!isAboutUsVisible);
  };

  const styles = {
    homepage: {
      fontFamily: "'Oswald', sans-serif",
      textAlign: 'center',
      backgroundColor: '#f4f4f9',
    },
    hero: {
      background: `url('https://www.hdwallpapers.in/download/green_grass_farm_field_sunbeam_tree_under_black_clouds_blue_sky_4k_hd_nature-3840x2160.jpg') no-repeat center center/cover`,
      color: 'white',
      padding: '6rem 2rem',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: '28px',
    },
    heroTitle: {
      fontSize: '3rem',
      marginBottom: '1rem',
      fontWeight: 'bold',
    },
    ctaButton: {
      padding: '0.6rem 2.5rem',
      fontSize: '1.3rem',
      backgroundColor: '#32CD32',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '1rem',
    },
    aboutUsSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '2rem',
      padding: '4rem 2rem',
      backgroundColor: '#ffffff',
      marginTop: '2rem',
      borderRadius: '10px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      flexWrap: 'wrap',
    },
    aboutUsText: {
      flex: 1,
      textAlign: 'left',
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: '#333',
    },
    aboutUsImage: {
      flex: 1,
      minWidth: '300px',
      maxWidth: '500px',
      height: '320px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    },
    learnMoreButton: {
      padding: '0.7rem 2rem',
      fontSize: '1rem',
      backgroundColor: '#388e3c',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '1.5rem',
    },
  };

  return (
    <div style={styles.homepage}>
      <Navbar />

      {/* Hero Section */}
      <header style={styles.hero}>
        <motion.h1
          style={styles.heroTitle}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to FarmFlow
        </motion.h1>
        <p>
          Empowering farmers, connecting markets, and revolutionizing agriculture through seamless digital trade.
        </p>
        <Link to="/login">
          <button style={styles.ctaButton}>Get Started</button>
        </Link>
      </header>

      {/* About Us Section */}
      <section id="about-us" style={styles.aboutUsSection}>
        <div style={styles.aboutUsText}>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            We are a digital agriculture marketplace aiming to eliminate middlemen, ensure fair pricing for farmers, and bring fresh produce directly to consumers.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Our platform bridges gaps, empowers rural communities, and makes agriculture accessible, transparent, and efficient.
          </motion.p>
          <button onClick={handleAboutUsToggle} style={styles.learnMoreButton}>
            {isAboutUsVisible ? "Show Less" : "Learn More"}
          </button>
          {isAboutUsVisible && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <p><strong>For Farmers:</strong> List your produce, track inventory, and connect with genuine buyers directly.</p>
              <p><strong>For Buyers:</strong> Discover and purchase fresh, quality products directly from local farms.</p>
              <p><strong>Our Goal:</strong> Fair trade, better profits, and a transparent agricultural system for everyone.</p>
            </motion.div>
          )}
        </div>

        <div style={styles.aboutUsImage}>
          <Slider {...sliderSettings}>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
              />
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
