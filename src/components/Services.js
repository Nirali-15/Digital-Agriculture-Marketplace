import React from 'react';
import Navbar from '../components/Navbar'; // adjust path if needed

const Services = () => {
  const servicesData = [
    {
      title: 'Secure Transactions',
      description: 'Multiple payment options with a secure payment gateway and transparent transaction records.',
      icon: '💳',
    },
    {
      title: 'User Registration & Role Management',
      description: 'Seamless registration and role-based access for sellers and buyers.',
      icon: '👥',
    },
    {
      title: 'Product Listing & Management',
      description: 'Upload and manage products with name, quantity, price, certifications, and harvest time.',
      icon: '📦',
    },
    {
      title: 'Price Optimization Tool',
      description: 'Suggests ideal pricing based on market trends and competitor prices.',
      icon: '📈',
    },
    {
      title: 'Feedback & Review System',
      description: 'Ratings and reviews for both sellers and buyers to build trust.',
      icon: '⭐',
    },
    {
      title: 'Customer Support',
      description: '24/7 support through chatbots, email, or phone for any issues.',
      icon: '📞',
    },
  ];

  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7f8',
    color: '#1f2d3d',
    minHeight: '100vh',
    padding: '30px 20px',
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '10px',
  };

  const subHeadingStyle = {
    textAlign: 'center',
    fontSize: '1.1rem',
    marginBottom: '40px',
    color: '#6c7a89',
  };

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    justifyItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '25px',
    textAlign: 'center',
    transition: 'transform 0.3s',
  };

  const iconStyle = {
    fontSize: '2.5rem',
    marginBottom: '15px',
    color: '#3e5879',
  };

  const titleStyle = {
    fontSize: '1.3rem',
    marginBottom: '10px',
    color: '#213555',
  };

  const descriptionStyle = {
    fontSize: '0.95rem',
    color: '#6b7c93',
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <h1 style={headingStyle}>Our Services</h1>
      <p style={subHeadingStyle}>Explore the tools and features we offer to enhance your marketplace experience.</p>
      <div style={cardContainerStyle}>
        {servicesData.map((service, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              transform: 'translateY(0)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div style={iconStyle}>{service.icon}</div>
            <h3 style={titleStyle}>{service.title}</h3>
            <p style={descriptionStyle}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
