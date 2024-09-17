import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import './HomePage.css';

import  Hero  from "./Hero";
import  waterimage  from "./assets/waterimage.webp";

const HomePage = () => {
  return (
    
    <div className="homepage">
      
      

      
      <Hero 
        image={waterimage} 
        title="Welcome to Maji Ni Uhai" 
        description="Water is life. Join us in making a difference."
      />
      
      
      <main className="main-content">
        
          

        <section className="latest-news">
          <h2>Latest News</h2>
          <p>Stay updated with our latest projects and initiatives.</p>
        </section>

        <section className="call-to-action">
          <h2>Get Involved</h2>
          <button className="cta-button">Donate Now</button>
          <button className="cta-button">Join Us</button>
        </section>
      </main>

      
    </div>
    
  );
};

export default HomePage;
