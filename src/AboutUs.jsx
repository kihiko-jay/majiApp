import React from 'react';
import './AboutUs.css';
import Scarcityimage from "./assets/scarcityimage.jpg";
import Hero from "./Hero";
const AboutUs = () => {
  return (
    
    
    <div className="about-us">
      <Hero 
        image={Scarcityimage} 
        title="About Us" 
        description="Learn more about our team and mission."
      />

      <main className="main-content">
        <h1>About Us</h1>
        <p>
          Maji Ni Uhai is dedicated to providing clean and safe water to communities in need. Our mission is to improve the quality of life through sustainable water solutions.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ipsa nemo, quam porro provident voluptate, minus eius earum, labore aspernatur harum velit consectetur aliquid amet accusamus reprehenderit? Atque, voluptates rem!
        </p>
         <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur officia, hic possimus minus enim adipisci, repudiandae quisquam debitis provident recusandae. Adipisci, impedit ea. Beatae in nostrum enim molestiae incidunt?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quasi fuga. Velit sequi dicta nisi vero maxime iste repudiandae vel est cum, doloribus, tempora nesciunt suscipit minima molestias asperiores rerum?</p>
        <h2 className='team-content'>Our Team</h2>
        <p>Meet the passionate individuals behind our organization.</p>
        
        {/* Add team member details here */}
      </main>

      
    </div>
    
  );
};

export default AboutUs;
