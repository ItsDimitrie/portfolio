import React from "react";
import './PortfolioHome.css';
import PortfolioRWS from '../../assets/RWSProject.png';
import PortfolioHZ from '../../assets/HZProject.png';
import PortfolioITC from '../../assets/ITCProject.png';
import PortfolioSport from '../../assets/SportProject.png';
import PortfolioStudio from '../../assets/StudioProject.png';
import PortfolioDrone from '../../assets/DroneProject.png';
import { Link } from 'react-scroll';

const PortfolioHome = () => {
  return (
    <section id='portfolio'>
      <h2 className="worksTitle">My Portfolio</h2>
      <span className='worksDesc'>I am still working as a camera-operator these days. Besides that I study Information & Communication Technology at the 
      HZ University of Applied Sciences. In this portfolio part of my website you can see my design work, school projects, personal programming projects and my video work.</span>

        <div className='worksImgs'>
          <img src={PortfolioRWS} alt="" className="worksImg" />
          <img src={PortfolioHZ} alt="" className="worksImg" />
          <img src={PortfolioITC} alt="" className="worksImg" />
          <img src={PortfolioSport} alt="" className="worksImg" />
          <img src={PortfolioStudio} alt="" className="worksImg" />
          <img src={PortfolioDrone} alt="" className="worksImg" />
        </div>

        <a href='/portfolio'><button className='worksBtn'><i id='seeMoreIcn' class="fa-solid fa-eye fa-2xl"></i>See More</button></a>
    </section>
  )
}

export default PortfolioHome;