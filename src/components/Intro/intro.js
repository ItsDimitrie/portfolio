import React from "react";
import './intro.css';
import bg from '../../assets/DimiBier.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
       <div className='introContent'>
        <span className='Hello'>Hello,</span>
        <span className='IntroText'>I'm <span className="introName">Dimitrie</span> <br /> Frontend Developer In Training</span>
        <p className='introPara'>I am a student at the HZ University of Applied Sciences and <br></br> graduated in AV-Specialism at the Curio College</p>
        <a href='/portfolio'><button className="btn"> <i id="workIcon" class="fa-solid fa-briefcase fa-2xl"></i>Check out my work</button></a>
       </div>

       <img src={bg} alt="Profile" className="bg"/>

    </section>
  )
}

export default Intro;