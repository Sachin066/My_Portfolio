import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import img1 from '../assets/imgs/element-1.png';
import img3 from '../assets/imgs/element-3.png';
import Nav from '../assets/imgs/NAV-LOGO.png';




export default function Header() {
  return (
<>
    {/* // Navbar */}

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

{/* Hoem page */}
      <section className="home" id="home">
        <img src={img1} alt="" className="element-1" />
        <img src={img3} alt="" className="element-3" />
        <img src="/assets/imgs/element-4.png" alt="" className="element-4"/>
        <div className="home-container container flex">
          <div className="home-left flex">
            <div className="home-data flex">
              <span className="secondary-btn">Hii... WELCOME</span>
              <div className="home-title flex">
                <h1 className="title">SACHIN SAROJ</h1>
                <p>YOUR DEVELOPER</p>
              </div>
              
              {/* <a href="#contact" className="primary-btn flex">Download CV</a> */}
              <a className="primary-btn flex" href={require("../assets/Downloadable/DownloadCV.pdf")} download="Download CV">Download CV</a>

            </div>
          </div>
          <div className="home-right flex">
            <div className="home-right-data">
              <img src="" alt=""className="home-right-img"/> 
              <div className="social-icons flex">

                <a href="https://github.com/Sachin066" target="_blank"> <FontAwesomeIcon icon={faGithubSquare} /> </a>
                <a href="https://www.linkedin.com/in/sachin-saroj-86206b230/" target="_blank"> <FontAwesomeIcon icon={faLinkedin} /> </a>
                <a href="https://twitter.com/Sachin___066" target="_blank"> <FontAwesomeIcon icon={faTwitterSquare} /> </a>
                <a href="https://www.instagram.com/sachin___0013/" target="_blank"> <FontAwesomeIcon icon={faInstagramSquare} /> </a>

              </div>
            </div>
          </div>
        </div>

        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#8364e8" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,266.7C384,267,480,245,576,202.7C672,160,768,96,864,96C960,96,1056,160,1152,176C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </section>

      </>

    
  )
}
