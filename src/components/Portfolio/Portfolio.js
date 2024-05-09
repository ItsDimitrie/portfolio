import React from "react";
import './Portfolio.css';
import Portfolio1 from '../../assets/IMG_1370.png';
import { Link } from 'react-scroll';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2 className="worksTitle">My Portfolio</h2>
      <span className='worksDesc'>Since graduating from the Curio College back in 2018 I have worked as a Camera-Operator for 4 years. I still am working as a freelancer these days. 
        After this adventure I have started to chase a diffrent passion of mine. As of right now I am a student at the HZ University of Applied Sciences in Middelburg.
        Here I am studying the computer-science program with a deep dive in to frontend software development. Check out more of my work on this Portfolio page.</span>

        <div className='worksImgs'>
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio1} alt="" className="worksImg" />
          <img src={Portfolio1} alt="" className="worksImg" />
        </div>


        <button className='worksBtn'><i id='seeMoreIcn' class="fa-solid fa-eye fa-2xl"></i>See More</button>
    </section>
  )
}

export default Portfolio;