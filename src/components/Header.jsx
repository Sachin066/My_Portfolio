import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import img1 from '../assets/imgs/element-1.png';
import img3 from '../assets/imgs/element-3.png';
import img5 from '../assets/imgs/element-5.png';
import hero from '../assets/imgs/sachin.png';



export default function Header() {
  return (
    
      <section className="home" id="home">
        <img src={img1} alt="" className="element-1" />
        <img src={img3} alt="" className="element-3" />
        {/* <!-- <img src="/assets/imgs/element-4.png" alt="" className="element-4"/> --> */}
        <div className="home-container container flex">
          <div className="home-left flex">
            <div className="home-data flex">
              <span className="secondary-btn">Hii... WELCOME</span>
              <div className="home-title flex">
                <h1 className="title">SACHIN SAROJ</h1>
                <p>YOUR DEVELOPER</p>
              </div>
              <p className="para-text">
                {/* "Unlocking Digital Potential with Creative Frontend Solutions. <br/>
                    Transforming Ideas into Seamless User Experiences. <br/>
                    Your Vision, My Code – Let's Build the Web Together." */}
                {/* <img src={img5} alt="" className="element-5" /> */}

              </p>
              {/* <a href="#contact" className="primary-btn flex">Download CV</a> */}
              <a className="primary-btn flex" href={require("../assets/Downloadable/DownloadCV.pdf")} download="Download CV">Download CV</a>

            </div>
          </div>
          <div className="home-right flex">
            <div className="home-right-data">
              <img src="" alt=""className="home-right-img"/> 
              <div className="social-icons flex">
                {/* <a href="https://github.com/Sachin066" target="_blank"> <i className="fa-brands fa-square-github"></i> </a>
                <a href="https://www.linkedin.com/in/sachin-saroj-86206b230/" target="_blank"> <i className="fa-brands fa-linkedin"></i> </a>
                <a href="https://twitter.com/Sachin___066" target="_blank"> <i className="fa-brands fa-square-twitter"></i> </a>
                <a href="https://www.instagram.com/sachin___0013/" target="_blank"> <i className="fa-brands fa-square-instagram"></i> </a> */}

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

    
  )
}
