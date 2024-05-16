import Intro from "../Intro/intro";
import Skills from "../Skills/skills";
import Portfolio from "../Portfolio/Portfolio";
import Client from "../Contact/client";
import ImageSliderAuto from '..//imageSlider/ImageSliderAuto';
import Contact from "..//Contact/contact";
import {ImageData} from '../../json/JsonData';
import NavBarHome from "../NavBarHome/navbar";

function Home() {
  return (
    <div className="App">
      <NavBarHome />
      <Intro />
      <Skills />
      <Portfolio />
      <Client />
      <ImageSliderAuto ImageData={ImageData} SlideInterValTime={4000}/>
      <Contact />
      </div>
  );
}

export default Home;
