import React, { useState } from 'react'
import './navBarMain.css'
import logo from '../../assets/DlLogoWit.png'
import {Link} from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="navbar">
      <a href='/'><img src={logo} alt="Logo" className='logo' /></a>

      <div className="desktopMenu">
        <a href='/' className="dekstopMenuListItem">Home</a>
        <a href='/about' className="dekstopMenuListItem">About</a>
        <a href='/portfolio' className="dekstopMenuListItem">Portfolio</a>
        <a href='/clients' className="dekstopMenuListItem">Clients</a>
      </div>

      <button className="dekstopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
      }}>
      <i id='contactMeImg' class="fa-brands fa-whatsapp fa-2xl"></i>Contact Me</button>

      <i id='mobMenu' class="fa-solid fa-bars fa-2xl" onClick={()=>setShowMenu(!showMenu)}></i>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <a className="ListItem" href='/' onClick={()=>setShowMenu(false)}>Home</a>
        <a className="ListItem" href='/about' onClick={()=>setShowMenu(false)}>About</a>
        <a className="ListItem" href='/portfolio' onClick={()=>setShowMenu(false)}>Portfolio</a>
        <a className="ListItem" href='/clients' onClick={()=>setShowMenu(false)}>Clients</a>
        <a className="ListItem" href='/contact' onClick={()=>setShowMenu(false)}>Contact</a>
      </div>
  </nav>
  )
}
export default Navbar
