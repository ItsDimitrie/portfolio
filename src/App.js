import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Client from "./components/Contact/client";
import ImageSliderAuto from './components/imageSlider/ImageSliderAuto';
import Contact from "./components/Contact/contact";
import './components/imageSlider/imageSlider.css';
import {ImageData} from './json/JsonData';
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Client />
      <ImageSliderAuto ImageData={ImageData} SlideInterValTime={4000}/>
      <Contact />
      <Footer />
      </div>
  );
}

export default App;
