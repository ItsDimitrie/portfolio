import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/contact";
import ImageSlider from './components/imageSlider/ImageSlider';
import ImageSliderAuto from './components/imageSlider/ImageSliderAuto';
import './components/imageSlider/imageSlider.css';
import {ImageData} from './json/JsonData';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
      <ImageSliderAuto ImageData={ImageData} SlideInterValTime={4000}/>
    </div>
  );
}

export default App;
