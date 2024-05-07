import React from 'react'
import './navbar.css'
import logo from '../../assets/DlLogoWit.png'
import contactImg from '../../assets/contactMe.png'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />

      <div className="desktopMenu">
        <Link className="dekstopMenuListItem">Home</Link>
        <Link className="dekstopMenuListItem">About</Link>
        <Link className="dekstopMenuListItem">Portfolio</Link>
        <Link className="dekstopMenuListItem">Clients</Link>
      </div>

      <button className="dekstopMenuBtn">
        <img src={contactImg} alt=""  className='dekstopMenuImg'/></button>

</nav>
  )
}
export default Navbar
