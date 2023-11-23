import React from 'react';
import Nav from '../assets/imgs/NAV-LOGO.png';

export default function Navbar() {
  return (
    <div>
               {/* NAV BAR */}
    <nav className="navbar">
        <div className="container nav-container flex">
            <a href="#"  className="nav-img">
                <img src={Nav} alt=""/>
            </a>
            <div className="nav-links" id="nav-links">
                <ul className="flex">
                    <li><a href="#home" className="hover-links active-link" id="home-btn">HOME</a></li>
                    <li><a href="#about" className="hover-links" id="about-btn">ABOUT</a></li>
                    <li><a href="#projects" className="hover-links" id="project-btn">PROJECTS</a></li>
                    <li><a href="#contact" className="hover-links" id="contact-btn">CONTACT</a></li>
                </ul>
            </div>
            <div className="menu-icon" id="nav-toggle">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    </nav>
    </div>
  )
}
