import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header=()=>{
    return (
        <>
        <header className="header">
        <div className="logo">Maji Ni Uhai</div>
        
        <nav className="nav">
          
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/donors">Donors</Link>
            <Link to="/work-done">Work Done</Link>
          
        </nav>
      </header></>
    )
}
export default Header;