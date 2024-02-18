import React from "react";
import About_wave from "../assets/imgs/about-wave.png";
import Blob_1 from "../assets/imgs/blob.png";
import Element_1 from "../assets/imgs/element-2.png";
import Codeimg from "../assets/imgs/3d-code.png";

 

export default function About() {
  return (
    <div>
      {/* <!-- about section --> */}
      <section className="about" id="about">
        <img src={About_wave} alt="" className="about-wave" />
        <img src={Blob_1} alt="" className="blob-1" />
        <img src={Blob_1} alt="" className="blob-2" />
        <img src={Element_1} alt="" className="element-2" />

        <div className="about-container container flex">
          <div className="about-content flex">
            <h2 className="about-h2">About me</h2>
            <div className="about-content-1 flex">
              <div className="about-content-1-img flex">
                <img src={Codeimg} alt="" />
              </div>
              <div className="about-contnent-1-data flex">
                <p>
                  Hello, I'm Sachin, a final-year Bachelor's Computer Sience
                  student.
                </p>
                <div className="qualification flex">
                  <h3>Qualification</h3>
                  <p>FY BSc.Computer Science from (VPM's R. Z. Shah College)</p>
                </div>
                <div className="skills flex">
                  <h3>Skilled in</h3>
                  <div className="logos flex">
                    <img src={ require('../assets/imgs/html.png') } alt="HTML" />
                    <img src={ require('../assets/imgs/css.png') } alt="CSS" />
                    <img src={ require('../assets/imgs/js.png') } alt="JS" />
                    <img src={ require('../assets/imgs/React.png') } alt="REACT JS" />
                    <img src={ require('../assets/imgs/android.png') } alt="ANDROID" />
                    <img src={ require('../assets/imgs/git.png') } alt="GIT" />
                    <img src={ require('../assets/imgs/github.png') }alt="GITHUB" />
                    <img src={ require('../assets/imgs/figma.png') } alt="FIGMA" />
                  </div>
                </div>
              </div>
            </div>

            <div className="about-content-2 flex">
              <div className="about-content-2-data flex">
                <h3>Info</h3>
                <p>
                  I am a B.Sc. Computer Science student, with good problem solving skills. Sound knowladge in HTML5, CSS, Javascript, framework like Bootstrap and library like ReactJS.
                </p>
                <p>
                Looking to start my career as Fresher entry-level Software Developer with a reputed firm driven by technology.
                </p>
                <a href="#contact" className="primary-btn hire-me">
                  HIRE ME
                </a>
              </div>
              <div className="about-content-2-img flex">
                <img src="#" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
