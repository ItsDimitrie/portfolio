import React from "react";
import './Portfolio.css';
import NavbarMain from "../navBarMain/navBarMain";



const Portfolio = () => {
  return (
    <div>
       <NavbarMain />
       <div id='filmWork'>
        
          <h1>Film</h1>
       </div>
       <div id='programWork'>
        
        <h1>Programming</h1>
     </div>
     <div id='designWork'>
        
        <h1>Designs</h1>
     </div>
    </div>
  )
}

export default Portfolio;