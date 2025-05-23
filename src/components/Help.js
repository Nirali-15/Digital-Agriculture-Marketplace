import React, { useState } from 'react';

const Help = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isFeedbackGiven, setIsFeedbackGiven] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const supportData = [
    {
      title: "We're Here To Help",
      description:
        "Encountered an issue or have a question? Our dedicated team is ready to assist you.",
      icon: "📞",
    },
    {
      title: "Immediate Assistance? Chat With Us",
      description:
        "Click the chat icon on the bottom right of your screen to chat with one of our support agents.",
      icon: "💬",
      action: () => setIsChatOpen(true),
    },
    {
      title: "Reach Out Directly",
      description:
        "Prefer to send us an email or give us a call? Email: support@farmflow.com Phone: 9999999999",
      icon: "📧",
    },
    {
      title: "Share Your Experience",
      description:
        "We'd love to hear about your experience. Leave a review to help us improve.",
      icon: "⭐",
      action: () => setIsFeedbackGiven(true),
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
    fontWeight: 'bold',
  };

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: '0 10%',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
  };

  const iconStyle = {
    fontSize: '3rem',
    color: '#3e5879',
    marginBottom: '15px',
  };

  const titleStyle = {
    fontSize: '1.8rem',
    color: '#213555',
    fontWeight: '600',
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    color: '#5879a3',
    marginTop: '10px',
  };

  const chatBoxStyle = {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#e6f7ff',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const chatInputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };

  const buttonStyle = {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#3e5879',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatHistory([...chatHistory, chatMessage]);
      setChatMessage('');
    }
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Support Page</h1>
      <div style={cardContainerStyle}>
        {supportData.map((item, index) => (
          <div
            key={index}
            style={cardStyle}
            onClick={item.action}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <div style={iconStyle}>{item.icon}</div>
            <h3 style={titleStyle}>{item.title}</h3>
            <p style={descriptionStyle}>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Chatbox */}
      {isChatOpen && (
        <div style={chatBoxStyle}>
          <h3>Chat With Us</h3>
          <p>Hello! How can we assist you today?</p>
          {chatHistory.map((message, index) => (
            <div key={index} style={{ padding: '5px 0', textAlign: 'left' }}>
              <strong>You:</strong> {message}
            </div>
          ))}
          <input
            type="text"
            style={chatInputStyle}
            placeholder="Type your message..."
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
          />
          <button style={buttonStyle} onClick={handleSendMessage}>
            Send
          </button>
          <button style={buttonStyle} onClick={() => setIsChatOpen(false)}>
            Close Chat
          </button>
        </div>
      )}

      {/* Feedback Section */}
      {isFeedbackGiven && (
        <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <h3>Leave Your Rating</h3>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => {
                  setRating(star);
                  setFeedbackMessage('Thanks for your feedback!');
                }}
                style={{
                  fontSize: '2rem',
                  color: star <= rating ? '#f5b301' : '#ccc',
                  cursor: 'pointer',
                }}
              >
                ★
              </span>
            ))}
          </div>
          {feedbackMessage && <p style={{ color: '#3e5879' }}>{feedbackMessage}</p>}
          <button
            onClick={() => setIsFeedbackGiven(false)}
            style={buttonStyle}
          >
            Close Feedback
          </button>
        </div>
      )}
    </div>
  );
};

export default Help;
