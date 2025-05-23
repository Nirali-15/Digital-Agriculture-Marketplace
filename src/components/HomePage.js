import React, { useState } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // For routing
// import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap');
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import vegies from '../assets/vegies.jpg'; 
 // Image for the new About Us section
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
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};


const HomePage = () => {
  const [isAboutUsVisible, setAboutUsVisible] = useState(false);

  const handleAboutUsToggle = () => {
    setAboutUsVisible(!isAboutUsVisible);
  };

  const styles = {
    homepage: {
      textAlign: 'center',
      backgroundColor: '#f4f4f9',
    },
    hero: {
      background: `url('https://www.hdwallpapers.in/download/green_grass_farm_field_sunbeam_tree_under_black_clouds_blue_sky_4k_hd_nature-3840x2160.jpg') no-repeat center center/cover`,
      color: 'white',
      padding: '6rem 2rem',
      height: '100vh', // Adjusted height to cover the entire screen
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: "'Oswald', sans-serif",
      fontSize: '28px',
    },
    heroTitle: {
      fontSize: '3rem',
      marginBottom: '1rem',
      fontWeight: 'bold',
    },
    ctaButton: {
      padding: '0.5rem 2.5rem',
      paddingBottom: '0.5rem',
      marginTop: '1 rem',
      fontSize: '1.3rem',
      backgroundColor: '#32CD32',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      top: '10px',
    },
    section: {
      padding: '4rem 2rem',
      backgroundColor: 'white',
      margin: '2rem 0',
    },
    imageHolder: {
      width: '100%',
      height: '250px',
      background: '#e0e0e0',
      borderRadius: '15px',
      marginBottom: '1rem',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    circularImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      margin: '0 auto',
      backgroundImage: `url(${vegies})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'transform 0.3s ease',
    },
    aboutUsImage: {
      flex: 1,
      minWidth: '300px',
      maxWidth: '500px',
      height: '300px', // Fixed height to contain the images
      overflow: 'hidden', // Ensures no overflow
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    sliderImage: {
      width: '100%',
      height: '100%', // Ensures the image takes up the container space
      objectFit: 'cover', // Ensures proper scaling
      borderRadius: '10px',
    },
    newsletterSection: {
      marginTop: '3rem',
      backgroundColor: '#e0f7fa',
      padding: '2rem',
    },
    inputField: {
      padding: '0.8rem',
      fontSize: '1rem',
      marginRight: '10px',
      borderRadius: '5px',
    },
    submitButton: {
      padding: '0.8rem 2rem',
      fontSize: '1rem',
      backgroundColor: '#32CD32',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    aboutUsSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '4rem 2rem',
      backgroundColor: 'white',
      marginTop: '2rem',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      flexWrap: 'wrap',
    },
    aboutUsText: {
      width: '50%',
      paddingRight: '2rem',
      fontSize: '1.1rem',
      lineHeight: '1.6',
    },
    learnMoreButton: {
      padding: '0.7rem 2rem',
      fontSize: '1rem',
      backgroundColor: '#32CD32',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '2rem',
    },
    transitionText: {
      display: 'inline-block',
      opacity: 0,
      transform: 'translateX(-100px)',
      transition: 'opacity 1s ease, transform 1s ease',
    },
    transitionTextVisible: {
      opacity: 1,
      transform: 'translateX(0)',
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
            Welcome to Digital Agriculture Marketplace, an innovative platform designed to transform the agricultural landscape by connecting farmers and buyers directly. In an industry where middlemen often control pricing, we aim to empower farmers by providing them with a direct route to buyers, ensuring fair pricing and better profits. Our marketplace bridges the gap between local farmers and global buyers, helping improve the accessibility, transparency, and efficiency of agricultural trade.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Why It’s Important: Agriculture plays a vital role in the global economy, but it is often plagued with inefficiencies. Our platform tackles these issues by offering farmers a digital marketplace where they can connect with buyers without the interference of middlemen, ensuring transparency and fairness.
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
              <p>
                For Farmers: Farmers can list their produce, track inventory, set prices, and gain access to a wide range of buyers.
              </p>
              <p>
                For Buyers: Buyers can easily discover fresh, high-quality agricultural products directly from local farmers. With secure payment options and real-time order tracking, buyers are assured of a trustworthy and convenient shopping experience.
              </p>
              <p>
                Our Aim: Increase the income of farmers by eliminating middlemen and ensuring sustainable practices by promoting local, fresh produce.
              </p>
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
          style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        />
      ))}
    </Slider>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
