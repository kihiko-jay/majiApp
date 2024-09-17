import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Contact.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="contact">
      

      <main className="main-content">
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
        <div className="contact-info">
          <p>Email: info@majiniuhai.org</p>
          <p>Phone: +254 123 456 789</p>
          <p>Address: 123 Water Way, Nairobi, Kenya</p>
        </div>
      </main>

      
    </div>
  );
};

export default Contact;
