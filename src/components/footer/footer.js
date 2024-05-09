import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer classname='footer'>
      <p className='copyright'>Copyright &#169; 2024 Dimitrie Lauer.</p>

      <a href="https://github.com/ItsDimitrie"><i id='firstIcon' class="fa-brands fa-github fa-2xl"></i></a>
      <a href="https://www.linkedin.com"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
      <a href="https://twitter.com/_Its_Dimah"><i class="fa-brands fa-x-twitter fa-2xl"></i></a>
      <a href="https://www.instagram.com/its_dimah/"><i class="fa-brands fa-instagram fa-2xl"></i></a>
      <p className='email'>dimitrielauer@hotmail.com</p>

    </footer>
  );
}

export default Footer;