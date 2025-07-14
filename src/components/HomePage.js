import React, { useState } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import vegies from '../assets/vegies.jpg';
import farm1 from "../assets/farm1.jpg";
import farm2 from "../assets/farm2.jpg";
import farm3 from "../assets/farm3.jpg";
import maize from "../assets/maize.jpg";

import member1 from '../assets/member1.jpg';
import member2 from '../assets/member2.jpg';
import member3 from '../assets/member3.jpg';
import member4 from '../assets/member4.jpg';

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Open+Sans&display=swap';
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
      fontFamily: "'Open Sans', sans-serif",
      backgroundColor: '#f9f9f9',
    },
    hero: {
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 100, 0, 0.5)), url('https://www.hdwallpapers.in/download/green_grass_farm_field_sunbeam_tree_under_black_clouds_blue_sky_4k_hd_nature-3840x2160.jpg') center/cover no-repeat`,
      color: 'white',
      height: '85vh', // Slightly reduced height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 2rem',
    },
    heroTitle: {
      fontSize: '4rem',
      fontWeight: '700',
      letterSpacing: '1px',
      marginBottom: '1rem',
      textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
    },
    heroSubText: {
      fontSize: '1.5rem',
      maxWidth: '800px',
    },
    ctaButton: {
      marginTop: '2rem',
      padding: '0.8rem 2.5rem',
      fontSize: '1.2rem',
      backgroundColor: '#00a651',
      color: '#fff',
      border: 'none',
      borderRadius: '30px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    aboutUsSection: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '4rem 2rem',
      background: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      gap: '2rem',
      margin: '3rem auto',
      maxWidth: '1200px',
    },
    aboutUsText: {
      flex: 1,
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
    },
    learnMoreButton: {
      marginTop: '1.5rem',
      padding: '0.6rem 1.8rem',
      fontSize: '1rem',
      backgroundColor: '#1b5e20',
      color: '#fff',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
    },
    extendedInfo: {
      marginTop: '1rem',
      background: '#e8f5e9',
      padding: '1rem',
      borderRadius: '10px',
      color: '#2e7d32',
      fontSize: '1rem',
    },
    cardWrapper: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    card: {
      backgroundColor: '#fff',
      padding: '1.5rem',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      textAlign: 'center',
      flexBasis: '22%',
      minWidth: '250px',
    },
    teamCard: {
      backgroundColor: '#f4f4f4',
      padding: '2rem',
      borderRadius: '15px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      flexBasis: '22%',
      minWidth: '250px',
    }
  };

  return (
    <div style={styles.homepage}>
      <Navbar />

      {/* Hero Section */}
      <section style={styles.hero}>
        <motion.h1 style={styles.heroTitle} initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Welcome to FarmFlow
        </motion.h1>
        <motion.p style={styles.heroSubText} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          Empowering farmers, connecting markets, and revolutionizing agriculture through seamless digital trade.
        </motion.p>
        <Link to="/login">
          <motion.button whileHover={{ scale: 1.1 }} style={styles.ctaButton}>Get Started</motion.button>
        </Link>
      </section>

      {/* About Us Section */}
      <section style={styles.aboutUsSection}>
        <div style={styles.aboutUsText}>
          <motion.h2 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>About Us</motion.h2>
          <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 1 }}>
            We are a digital agriculture marketplace eliminating middlemen, ensuring fair pricing for farmers, and delivering farm-fresh produce to consumers.
          </motion.p>
          <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 1 }}>
            Our mission is to digitize agriculture, connect rural economies, and ensure a sustainable future for all.
          </motion.p>
          <button onClick={handleAboutUsToggle} style={styles.learnMoreButton}>
            {isAboutUsVisible ? 'Show Less' : 'Learn More'}
          </button>

          {isAboutUsVisible && (
            <motion.div style={styles.extendedInfo} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <p><strong>🌾 For Farmers:</strong> List your crops, manage orders, and gain insights through AI-powered price predictions.</p>
              <p><strong>🛒 For Buyers:</strong> Access fresh, locally-sourced produce directly from trusted growers.</p>
              <p><strong>📱 Digital Tools:</strong> Easy mobile access, transparent tracking, and multilingual support.</p>
              <p><strong>🌱 Sustainability:</strong> Promoting organic, local, and eco-friendly practices.</p>
            </motion.div>
          )}
        </div>

        <div style={styles.aboutUsImage}>
          <Slider {...sliderSettings}>
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Farm Slide ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
            ))}
          </Slider>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: '#f0f9f0', padding: '4rem 2rem' }}>
        <motion.h2 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem', color: '#2e7d32' }}>
          Voices from the Fields & Markets
        </motion.h2>

        <div style={styles.cardWrapper}>
          {[
            {
              name: 'Ramesh Bhai',
              role: 'Farmer, Nashik',
              img: 'https://randomuser.me/api/portraits/men/33.jpg',
              quote: 'FarmFlow helped me double my income by directly connecting me to buyers.'
            },
            {
              name: 'Lalita Devi',
              role: 'Farmer, Punjab',
              img: 'https://randomuser.me/api/portraits/women/44.jpg',
              quote: 'Fair pricing and instant updates make selling hassle-free.'
            },
            {
              name: 'Anjali Shah',
              role: 'Buyer, Ahmedabad',
              img: 'https://randomuser.me/api/portraits/women/68.jpg',
              quote: 'I always get fresh produce directly from farms, and it feels good to support our farmers.'
            },
            {
              name: 'Vikram Jain',
              role: 'Buyer, Delhi',
              img: 'https://randomuser.me/api/portraits/men/41.jpg',
              quote: 'The platform is transparent and reliable. No middlemen, no overpaying!'
            },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} style={styles.card}>
              <img src={item.img} alt={item.name} style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '1rem' }} />
              <h4 style={{ margin: '0.5rem 0', color: '#1b5e20' }}>{item.name}</h4>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>{item.role}</p>
              <p style={{ fontSize: '1rem', color: '#444' }}>“{item.quote}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#ffffff' }}>
        <motion.h2 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          style={{ textAlign: 'center', fontSize: '2.5rem', color: '#2e7d32', marginBottom: '2rem' }}>
          Meet the Minds Behind FarmFlow
        </motion.h2>

        <div style={styles.cardWrapper}>
          {[
            {
              name: 'Nirali Bhanvadiya',
              role: 'Frontend Developer & UI Designer',
              img: member1,
              desc: 'Passionate about building intuitive, accessible user interfaces that make tech easier for everyone.'
            },
            {
              name: 'Ankit Mehta',
              role: 'Backend Developer',
              img: member2,
              desc: 'Focused on building robust and scalable backend systems for smooth data operations.'
            },
            {
              name: 'Ravi Desai',
              role: 'Agri-Tech Analyst',
              img: member3,
              desc: 'Bridging the gap between traditional farming and emerging technology for better adoption.'
            },
            {
              name: 'Pooja Verma',
              role: 'Marketing & Outreach',
              img: member4,
              desc: 'Spreading awareness and driving trust among rural farmers and urban consumers alike.'
            }
          ].map((person, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} transition={{ delay: 0.2 * i }} style={styles.teamCard}>
              <img src={person.img} alt={person.name} style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '1rem' }} />
              <h4 style={{ margin: '0.5rem 0', color: '#1b5e20' }}>{person.name}</h4>
              <p style={{ fontWeight: 'bold', color: '#555' }}>{person.role}</p>
              <p style={{ fontSize: '0.95rem', color: '#333' }}>{person.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
