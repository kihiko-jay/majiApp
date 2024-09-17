import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Donors.css';

const Donors = () => {
  return (
    <div className="donors">
     

      <main className="main-content">
        <h1>Our Donors</h1>
        <p>We are grateful for the support of our generous donors. Their contributions make our work possible.</p>
        <ul>
          <li>Donor 1</li>
          <li>Donor 2</li>
          <li>Donor 3</li>
          <li>Donor 4</li>
        </ul>
      </main>

      
    </div>
  );
};

export default Donors;
