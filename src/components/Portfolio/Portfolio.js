import React from "react";
import './Portfolio.css';
import NavbarMain from "../navBarMain/navBarMain";
import FadeInSection from "../Animations/FadeInSection/FadeInSection";



const Portfolio = () => {
  return (
    <div>
       <NavbarMain />
       <FadeInSection >
       <div id='filmWork'>
        
          <h1>Film</h1>
       </div>
       <div id='programWork'>
        
        <h1>Programming</h1>
     </div>
     <div id='designWork'>
        
        <h1>Designs</h1>
     </div>
     </FadeInSection>
    </div>
    
  )
}

export default Portfolio;