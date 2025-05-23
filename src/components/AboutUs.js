// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import { motion } from 'framer-motion';
// import soil from '../assets/soil.jpg'; // Image for the About Us section

// const AboutUsPage = () => {
//   const [isMoreVisible, setIsMoreVisible] = useState(false);

//   const handleToggleMore = () => {
//     setIsMoreVisible(!isMoreVisible);
//   };

//   const styles = {
//     page: {
//       textAlign: 'center',
//       backgroundColor: '#f4f4f9',
//       padding: '2rem',
//     },
//     section: {
//       padding: '4rem 2rem',
//       backgroundColor: 'white',
//       margin: '2rem 0',
//       borderRadius: '10px',
//       boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//     },
//     content: {
//       fontSize: '1.1rem',
//       color: '#333',
//       lineHeight: '1.6',
//     },
//     image: {
//       width: '100%',
//       height: '300px',
//       borderRadius: '15px',
//       backgroundImage: `url(${soil})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//     },
//     learnMoreButton: {
//       padding: '0.7rem 2rem',
//       fontSize: '1rem',
//       backgroundColor: '#32CD32',
//       color: 'white',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       marginTop: '2rem',
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <Navbar />
//       <section style={styles.section}>
//         <motion.h2
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           About Us
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           style={styles.content}
//         >
//           Welcome to Digital Agriculture Marketplace, an innovative platform designed to transform the agricultural landscape by connecting farmers and buyers directly. In an industry where middlemen often control pricing, we aim to empower farmers by providing them with a direct route to buyers, ensuring fair pricing and better profits.
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 1, duration: 1 }}
//           style={styles.image}
//         />
//         <button onClick={handleToggleMore} style={styles.learnMoreButton}>
//           {isMoreVisible ? 'Show Less' : 'Learn More'}
//         </button>
//         {isMoreVisible && (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.5, duration: 1 }}
//           >
//             <p style={styles.content}>
//               Our marketplace bridges the gap between local farmers and global buyers, helping improve the accessibility, transparency, and efficiency of agricultural trade. By offering farmers a digital marketplace, we ensure transparency and fairness.
//             </p>
//             <p style={styles.content}>
//               For Farmers: Farmers can list their produce, track inventory, set prices, and gain access to a wide range of buyers. Our platform also provides access to essential farming resources, helping farmers optimize their operations.
//             </p>
//             <p style={styles.content}>
//               For Buyers: Buyers can easily discover fresh, high-quality agricultural products directly from local farmers. With secure payment options and real-time order tracking, buyers are assured of a trustworthy and convenient shopping experience.
//             </p>
//             <p style={styles.content}>
//               Our Aim: Increase the income of farmers by eliminating middlemen and ensuring sustainable practices by promoting local, fresh produce.
//             </p>
//           </motion.div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default AboutUsPage;
