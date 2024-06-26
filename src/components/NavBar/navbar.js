import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/DlLogoWit.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="navbar">
      <a href='/'><img src={logo} alt="Logo" className='logo' /></a>

      <div className="desktopMenu">
        <a href='/' className="dekstopMenuListItem">Home</a>
        <a href='/about' activeClass='active' className="dekstopMenuListItem">About</a>
        <a href='/portfolio' activeClass='active' className="dekstopMenuListItem">Portfolio</a>
        <a href='/clients' activeClass='active' className="dekstopMenuListItem">Clients</a>
      </div>

      <a href='/'><button className="dekstopMenuBtn"><i id='contactMeImg' class="fa-brands fa-whatsapp fa-2xl"></i>Contact Me</button></a>

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
