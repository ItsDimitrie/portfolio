import React from "react";
import './Portfolio.css';
import PortfolioRWS from '../../assets/RWSProject.png';
import PortfolioHZ from '../../assets/HZProject.png';
import PortfolioITC from '../../assets/ITCProject.png';
import PortfolioSport from '../../assets/SportProject.png';
import PortfolioStudio from '../../assets/StudioProject.png';
import PortfolioDrone from '../../assets/DroneProject.png';


import { Link } from 'react-scroll';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2 className="worksTitle">My Portfolio</h2>
      <span className='worksDesc'>Since graduating from the Curio College back in 2018 I have worked as a Camera-Operator for 4 years. I still am working as a freelancer these days. 
        After this adventure I have started to chase a diffrent passion of mine. As of right now I am a student at the HZ University of Applied Sciences in Middelburg.
        Here I am studying the computer-science program with a deep dive in to frontend software development. Check out more of my work on this Portfolio page.</span>

        <div className='worksImgs'>
          <img src={PortfolioRWS} alt="" className="worksImg" />
          <img src={PortfolioHZ} alt="" className="worksImg" />
          <img src={PortfolioITC} alt="" className="worksImg" />
          <img src={PortfolioSport} alt="" className="worksImg" />
          <img src={PortfolioStudio} alt="" className="worksImg" />
          <img src={PortfolioDrone} alt="" className="worksImg" />
        </div>


        <button className='worksBtn'><i id='seeMoreIcn' class="fa-solid fa-eye fa-2xl"></i>See More</button>
    </section>
  )
}

export default Portfolio;