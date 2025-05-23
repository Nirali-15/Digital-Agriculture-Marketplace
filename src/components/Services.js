import React from 'react';

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
      description: 'Allows farmers to upload and manage products with details like product name, quantity, price, quality certifications, and expected harvest time.',
      icon: '📦',
    },
    {
      title: 'Price Optimization Tool',
      description: 'Suggests ideal pricing based on market trends and competitor prices.',
      icon: '📈',
    },
    {
      title: 'Feedback & Review System',
      description: 'Rating and review system for both sellers and buyers to ensure transparency and build trust.',
      icon: '⭐',
    },
    {
      title: 'Customer Support',
      description: '24/7 support through chatbots, email, or phone for resolving any issues.',
      icon: '📞',
    },
  ];

  // Inline styles
  const pageStyle = {
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5fefe',
    color: '#213555',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '30px',
  };

  const subHeadingStyle = {
    fontSize: '1.2rem',
    marginBottom: '40px',
    color: '#5879a3',
  };

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Ensures three cards per row
    gap: '30px',
    justifyItems: 'center',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '350px',
    transition: 'transform 0.3s ease',
  };

  const iconStyle = {
    fontSize: '3rem',
    color: '#3e5879',
    marginBottom: '15px',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    color: '#213555',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#5879a3',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Our Services</h1>
      <p style={subHeadingStyle}>
        Explore our range of services designed to make your experience smooth and efficient.
      </p>
      <div style={cardContainerStyle}>
        {servicesData.map((service, index) => (
          <div
            key={index}
            style={cardStyle}
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
