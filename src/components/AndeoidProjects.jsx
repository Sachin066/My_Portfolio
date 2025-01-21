import React from "react";
import Blob_1 from "../assets/imgs/blob.png";

export default function AndroidProjects() {
  return (
    // android project  section

    <section className="projects" id="projects">
      <img
        src={require("../assets/imgs/project-wave.png")}
        alt="project-wave"
      />

      <div className="project-container container flex">
        <h2 className="project-h2"> Android Projects</h2>
        <div className="project-box flex">
          <div className="project-card flex">
            <div className="project-img">
              <img src={require("../assets/imgs/chatapp.jpg")} alt="chatapp" />
            </div>
            <h3>Chat Android App</h3>
            <a
              href={require("../assets/Downloadable/Chat-App.apk")}
              download="Chat-App"
            >
              Download App
            </a>
          </div>

          <div className="project-card flex">
            <div className="project-img">
              <img src={require("../assets/imgs/Android.jpg")} alt="" />
            </div>
            <h3>Coming Soon</h3>
            <a href="#" target="_blank">
              Live Preview
            </a>
          </div>

          <div className="project-card flex">
            <div className="project-img">
              <img src={require("../assets/imgs/Android.jpg")} alt="" />
            </div>
            <h3>Coming Soon</h3>
            <a href="#" target="_blank">
              Live Preview
            </a>
          </div>
        </div>
      </div>
      <img
        src={require("../assets/imgs/about-wave.png")}
        alt=""
        className="about-wave"
      />
    </section>
  );
}
