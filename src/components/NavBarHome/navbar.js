import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/DlLogoWit.png'
import contactImg from '../../assets/contactMe.png'
import {Link} from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="navbar">
      <a href='/'><img src={logo} alt="Logo" className='logo' /></a>

      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="dekstopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-90} duration={500}  className="dekstopMenuListItem">About</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-55} duration={500}  className="dekstopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={0} duration={500}  className="dekstopMenuListItem">Clients</Link>
      </div>

      <button className="dekstopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
      }}>
      <i id='contactMeImg' class="fa-brands fa-whatsapp fa-2xl"></i>Contact Me</button>

      <i id='mobMenu' class="fa-solid fa-bars fa-2xl" onClick={()=>setShowMenu(!showMenu)}></i>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-90} duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-55} duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={0} duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>Clients</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={0} duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
  </nav>
  )
}
export default Navbar
