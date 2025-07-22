import React from 'react';
import Navbar from './Navbar';
import bannerImg from '../assets/Banner.jpg';
import team1 from '../assets/member1.jpg';
import team2 from '../assets/member2.jpg';
import team3 from '../assets/member3.jpg';
import team4 from '../assets/member4.jpg'; // New member image

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      {/* Banner */}
      <div style={styles.bannerContainer}>
        <img src={bannerImg} alt="Farm Banner" style={styles.bannerImage} />
        <div style={styles.bannerOverlay}>
          <h1 style={styles.bannerText}> Empowering Farmers, Connecting Markets</h1>
        </div>
      </div>

      {/* Mission, Vision, Solution Section */}
      <div style={styles.circleSection}>
        <div style={{ ...styles.circle, alignSelf: 'flex-start' }}>
          <h2 style={styles.circleTitle}>🌱 Our Mission</h2>
          <p style={styles.circleText}>
            Our aim is to address the real challenges farmers face — unfair prices, limited access to markets, and lack of timely guidance. FarmFlow connects sellers and buyers directly, removing middlemen and ensuring transparency in every transaction. With AI-powered support, farmers receive smart crop suggestions and price insights to make confident decisions. We are committed to helping every farmer earn fairly, grow wisely, and live with dignity.
          </p>
        </div>
        <div style={{ ...styles.circle, alignSelf: 'center' }}>
          <h2 style={styles.circleTitle}>🚀 Our Vision</h2>
          <p style={styles.circleText}>
            Our vision is to uplift every farmer’s life through smart technology and honest connections.
            We strive to create a world where no farmer feels unheard or undervalued.
            By empowering growers with knowledge and market access, we build hope and prosperity.
            Together, we cultivate a future where agriculture thrives and communities flourish.
          </p>
        </div>
        <div style={{ ...styles.circle, alignSelf: 'flex-end' }}>
          <h2 style={styles.circleTitle}>💡 The Solution</h2>
          <p style={styles.circleText}>
            FarmFlow is a digital platform connecting sellers and buyers for seamless trade.
            It uses AI-powered crop recommendations tailored to local conditions for higher yields.
            Sellers can list their produce, and buyers can purchase confidently with AI insights.
            Real-time price updates help everyone make quick, profitable decisions.
            FarmFlow makes agriculture smarter, easier, and more profitable for all.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div style={styles.teamSection}>
        <h2 style={styles.teamTitle}>👥 Meet the Team</h2>
        <div style={styles.teamCards}>
          <div style={styles.teamCard}>
            <img src={team1} alt="Team Member 1" style={styles.teamImage} />
            <h3 style={styles.teamName}>Nirali Bhanvadiya</h3>
            <p style={styles.teamRole}>Frontend Developer & UI Designer</p>
          </div>
          <div style={styles.teamCard}>
            <img src={team2} alt="Team Member 2" style={styles.teamImage} />
            <h3 style={styles.teamName}>Rahul Joshi</h3>
            <p style={styles.teamRole}>Blockchain Developer</p>
          </div>
          <div style={styles.teamCard}>
            <img src={team3} alt="Team Member 3" style={styles.teamImage} />
            <h3 style={styles.teamName}>Ayesha Patel</h3>
            <p style={styles.teamRole}>Backend & Cloud Specialist</p>
          </div>
          <div style={styles.teamCard}>
            <img src={team4} alt="Team Member 4" style={styles.teamImage} />
            <h3 style={styles.teamName}>Ravi Mehta</h3>
            <p style={styles.teamRole}>Data Analyst & Strategy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  bannerContainer: {
    position: 'relative',
    height: '80vh',
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(60%)',
  },
  bannerOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  },
  bannerText: {
    fontSize: '3.2rem',
    fontWeight: '700',
    fontFamily: `'Playfair Display', serif`,
    maxWidth: '90%',
    lineHeight: '1.4',
  },

  // 🎨 Updated with gradient background
  circleSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '60px 0',
    gap: '40px',
    padding: '60px 20px',
    background: 'linear-gradient(135deg, #e6f4ea, #f4fdf8)',
  },
  circle: {
    width: '70%',
    maxWidth: '650px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    padding: '40px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
  },
  circleTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#2a7f44',
  },
  circleText: {
    fontSize: '17px',
    lineHeight: '1.6',
    color: '#333',
  },

  teamSection: {
    padding: '60px 20px',
    backgroundColor: '#f7fdf9',
    textAlign: 'center',
  },
  teamTitle: {
    fontSize: '34px',
    fontWeight: 'bold',
    marginBottom: '50px',
    color: '#207b40',
    fontFamily: `'Poppins', sans-serif`,
  },
  teamCards: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  teamCard: {
    width: '270px',
    padding: '25px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
  },
  teamImage: {
    width: '100%',
    height: '230px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  teamName: {
    fontSize: '21px',
    fontWeight: 'bold',
    color: '#1f1f1f',
  },
  teamRole: {
    fontSize: '15px',
    color: '#777',
    marginTop: '6px',
  },
};

export default AboutUs;
