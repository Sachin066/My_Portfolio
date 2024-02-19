import React from 'react'

export default function WedProjects() {
  return (
    // web project  section 

<section className="projects" id="projects">
    <img src={ require('../assets/imgs/project-wave.png') } alt="project-wave" />
    <div className="project-container container flex">
        <h2 className="project-h2">Web Projects</h2>
        <div className="project-box flex">

            <div className="project-card flex">
                <div className="project-img">
                <img src={ require('../assets/imgs/educourses .png') } alt="chatapp" />
                </div>
                <h3>EduCourses</h3>
                <a href="https://github.com/Sachin066/College_Project_EduCourses" target="_blank">View Project</a>
            </div>
            

            <div className="project-card flex">
                <div className="project-img">
                <img src={ require('../assets/imgs/Web.jpg') } alt="chatapp" />
                </div>
                <h3>Coming Soon</h3>
                <a href="#" target="_blank">Live Preview</a>
            </div>

            <div className="project-card flex">
                <div className="project-img">
                <img src={ require('../assets/imgs/Web.jpg') } alt="chatapp" />
                </div>
                <h3>Coming Soon</h3>
                <a href="#" target="_blank">Live Preview</a>
            </div>

            
        </div>
        
    </div>
    
</section>
  )
}
