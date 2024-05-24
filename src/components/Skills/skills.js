import React from "react";
import './skills.css'

const Skills = () => {
  return (
    <div classname="SkillDiv">
      <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>Since graduating from the Curio College back in 2018 I have worked as a Camera-Operator for 4 years. I still am working as a freelancer these days. 
        After this adventure I have started to chase a diffrent passion of mine. As of right now I am a student at the HZ University of Applied Sciences in Middelburg.
        Here I am studying the computer-science program with a deep dive in to frontend software development. Check out more of my work on this Portfolio page. </span>
        
        <div className='skillBars'>

        <div className='skillBar'>
          <i id="icon" class="fa-solid fa-code fa-2xl fa-fade" style={{color: "#ffffff",}}></i>
            <div className="skillBarText">
              <h2>Software Development</h2>
              <p>Frontend Developments projects, school projects, side projects.</p>
            </div>
          </div>

          <div className='skillBar'>
          <i id="icon" class="fa-solid fa-palette fa-2xl fa-fade" style={{color: "#ff6a00",}}></i>
            <div className="skillBarText">
              <h2>Design</h2>
              <p>Photoshop, eSports Designs and designs for multiple projects.</p>
            </div>
          </div>

          <div className='skillBar'>
          <i id="icon" class="fa-solid fa-film fa-2xl fa-fade" style={{color: "#74C0FC",}}></i>
            <div className="skillBarText">
              <h2>Video</h2>
              <p>Multicam Camera-Operator, Drone Operator, Video Editor</p>
            </div>
          </div>
        </div>

        <a href='/about'><button className='seeMoreBtn'><i id='seeMoreIcn' class="fa-solid fa-hand-peace fa-2xl"></i>Read more about me.</button></a>

      </section>
    </div>
  );
}

export default Skills;