import React from "react";
import './about.css'
import NavBarMain from '../navBarMain/navBarMain'
import ImageSliderAuto from '..//imageSlider/ImageSliderAuto';
import {ImageData} from '../../json/AboutMeData';


const About = () => {
  return (
    <div>
      <NavBarMain />
      <section id='aboutMe'>
      <span className='aboutTitle'>Who Am I?</span>
        <span className='aboutDesc'>Since graduating from the Curio College back in 2018 I have worked as a Camera-Operator for 4 years. I still am working as a freelancer these days. 
        After this adventure I have started to chase a diffrent passion of mine. As of right now I am a student at the HZ University of Applied Sciences in Middelburg.
        Here I am studying the computer-science program with a deep dive in to frontend software development. Check out more of my work on this Portfolio page. </span>
      </section>
      
      <div className='imageSliders'>
      <ImageSliderAuto id='imageSlider' ImageData={ImageData} SlideInterValTime={4000}/>
      <ImageSliderAuto id='imageSlider' ImageData={ImageData} SlideInterValTime={4000}/>
      <ImageSliderAuto id='imageSlider' ImageData={ImageData} SlideInterValTime={4000}/>
      </div>

      </div>
  );
}

export default About;