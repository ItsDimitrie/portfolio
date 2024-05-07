import React from "react";
import './skills.css'

const Skills = () => {
  return (
    <div>
      <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>Lorem ipsum dolor sit amet. 33 architecto possimus id quam consequuntur et maxime repudiandae ut autem aspernatur. Sed veritatis laudantium ut consequuntur officia ut minus rerum eum tempora quasi ut cumque quidem. Et dolor rerum rem numquam omnis in repellat dicta qui laudantium aperiam est enim amet. Et fuga consequatur ut harum nihil ex saepe dolore! </span>
        <div className='skillBars'>

          <div className='skillBar'>
          <i id="icon" class="fa-solid fa-palette fa-2xl"></i>
            <div className="skillBarText">
              <h2>Design</h2>
              <p>Dit is een demo Text</p>
            </div>
          </div>

          <div className='skillBar'>
          <i id="icon" class="fa-solid fa-code fa-2xl"></i>
            <div className="skillBarText">
              <h2>Code</h2>
              <p>Dit is een demo Text</p>
            </div>
          </div>

          <div className='skillBar'>
          <i id="icon" class="fa-solid fa-video fa-2xl"></i>
            <div className="skillBarText">
              <h2>Video</h2>
              <p>Dit is een demo Text</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Skills;