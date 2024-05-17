import React from "react";
import './about.css'
import NavBarMain from '../navBarMain/navBarMain'
import ImageSliderAuto from '..//imageSlider/ImageSliderAuto';
import {ImageData} from '../../json/AboutMeData';
import {ImageData2} from '../../json/AboutMeDataSlide2';
import {ImageData3} from '../../json/AboutMeDataSlide3';

import FadeInSection from "../Animations/FadeInSection/FadeInSection";


const About = () => {
  return (
    <div>
      <NavBarMain />
      <FadeInSection>
      <section id='aboutMe'>
      <span className='aboutTitle'>Who Am I?</span>

        <span className='aboutDesc'>Hi, I’m Dimitrie, a dynamic and ambitious professional with a unique blend of creative and technical expertise. 
        At 24 years old, I’ve already carved out a notable path in both the media and tech industries. </span>
      
      <div className='imageSliders'>
      <ImageSliderAuto ImageData={ImageData} SlideInterValTime={4000}/>
      <ImageSliderAuto ImageData={ImageData2} SlideInterValTime={4000}/>
      <ImageSliderAuto ImageData={ImageData3} SlideInterValTime={4000}/>
      </div>

      <span className='aboutDesc'>
        
          <b>Camera-Operator (2018 - Present)</b><br></br><br></br>

            Upon graduating from Curio College in 2018, I embarked on an exciting career as a Camera-Operator. 
            Over the past four years, I've honed my skills in capturing high-quality visuals and telling compelling stories through the lens. 
            My experience spans various projects, but I’ve primarily worked with Allus Media, a leading company specializing in broadcasting and live streaming sports events. 
            This role has not only sharpened my technical abilities but also instilled in me a keen eye for detail and a passion for dynamic, real-time production environments.<br></br><br></br>

          <b>Freelance Work</b><br></br><br></br>

            Continuing my journey as a freelancer, I’ve had the privilege of collaborating with diverse clients, adapting to different styles and requirements, and consistently delivering exceptional visual content. 
            My freelance work has allowed me to build a robust portfolio, showcasing my versatility and commitment to excellence.<br></br><br></br>

          <b>Academic Pursuits and New Passions</b><br></br><br></br>

            In 2023, I decided to pursue another passion of mine—technology. 
            I am currently a student at HZ University of Applied Sciences in Middelburg, where I am diving deep into the world of computer science with a focus on frontend software development. 
            This academic pursuit has been incredibly fulfilling, merging my creative background with technical innovation. 
            My coursework and projects have provided me with a solid foundation in programming, user interface design, and web development. </span>

      </section>
      </FadeInSection>
      </div>
  );
}

export default About;