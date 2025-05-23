import React, { useState } from "react";

const ProductForm = ({ onSubmit }) => {
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    description: "",
    images: [],
    quantity: "",
    price: "",
    minOrder: "",
    quality: "",
    deliveryOption: "",
    deliveryCharges: "",
    expectedDelivery: "",
    pickupAvailable: false,
    reviews: "",
    testimonials: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData({
      ...productData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle Multiple Image Upload
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProductData({
      ...productData,
      images: [...productData.images, ...files],
    });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(productData);
  };

  const styles = {
    form: {
      background: "#F8F1E4", // Light Brown for Farm Theme
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "600px",
      margin: "auto",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "8px 0",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px",
      background: "#8D6E63",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      width: "100%",
      borderRadius: "5px",
    },
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center", color: "#6D4C41" }}>Add Product</h2>

      <label>Product Name</label>
      <input type="text" name="name" style={styles.input} onChange={handleChange} />

      <label>Product Category</label>
      <select name="category" style={styles.input} onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
        <option value="Grains">Grains</option>
        <option value="Livestock">Livestock</option>
        <option value="Organic">Organic</option>
      </select>

      <label>Product Description</label>
      <textarea name="description" style={styles.input} onChange={handleChange} />

      <label>Product Images (Upload Multiple)</label>
      <input type="file" multiple accept="image/*" onChange={handleImageChange} />

      <label>Available Quantity (kg/L/units)</label>
      <input type="number" name="quantity" style={styles.input} onChange={handleChange} />

      <label>Unit Price (Per kg/L/unit)</label>
      <input type="number" name="price" style={styles.input} onChange={handleChange} />

      <label>Minimum Order Quantity</label>
      <input type="number" name="minOrder" style={styles.input} onChange={handleChange} />

      <label>Quality/Grade</label>
      <select name="quality" style={styles.input} onChange={handleChange}>
        <option value="">Select Quality</option>
        <option value="Organic">Organic</option>
        <option value="Non-Organic">Non-Organic</option>
        <option value="Certified">Certified</option>
      </select>

      <label>Delivery Options</label>
      <select name="deliveryOption" style={styles.input} onChange={handleChange}>
        <option value="">Select Delivery Option</option>
        <option value="Self-Delivery">Self-Delivery</option>
        <option value="Courier">Courier</option>
        <option value="Third-Party">Third-Party Service</option>
      </select>

      <label>Delivery Charges (If applicable)</label>
      <input type="number" name="deliveryCharges" style={styles.input} onChange={handleChange} />

      <label>Expected Delivery Time</label>
      <input type="text" name="expectedDelivery" style={styles.input} onChange={handleChange} />

      <label>
        <input type="checkbox" name="pickupAvailable" onChange={handleChange} />
        Pickup Option Available?
      </label>

      <label>Customer Reviews & Ratings</label>
      <textarea name="reviews" style={styles.input} onChange={handleChange} />

      <label>Previous Buyer Testimonials</label>
      <textarea name="testimonials" style={styles.input} onChange={handleChange} />

      <button type="submit" style={styles.button}>Submit Product</button>
    </form>
  );
};

export default ProductForm;
