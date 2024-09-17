import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Services from './Services';
import Contact from './Contact';
import Donors from './Donors';
import WorkDone from './WorkDone';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (<>
    
    <Router>
    <Header/>
      <Routes>
       
        <Route path="/" element={<HomePage />} /> {/* Set homepage path to "/" */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/work-done" element={<WorkDone />} />
        
      </Routes>
      <Footer/>
    </Router>
    
    </>
    
  );
};

export default App;
