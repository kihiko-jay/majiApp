import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Services.css';
import Hero from './Hero';
import drillingrig from "./assets/drillingrig.jpg"
const Services = () => {
  return (
    <div className="services">
      <Hero 
        image={drillingrig} 
        title="Transforming Communities with Sustainable Water Solution" 
        description="Discover our range of services dedicated to ensuring access to clean, safe water."/>
        

      <main className="main-content">
        <h1>Our Services</h1>
        <p>We provide a range of services to ensure communities have access to clean and safe water.</p>
        <ul>
          <li>Water Filtration Systems</li>
          <li>Well Drilling</li>
          <li>Community Education</li>
          <li>Sanitation Solutions</li>
        </ul>
      </main>

      
    </div>
  );
};

export default Services;
