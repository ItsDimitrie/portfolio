import Intro from "../Intro/intro";
import Skills from "../Skills/skills";
import Portfolio from "../Portfolio/Portfolio";
import Client from "../Contact/client";
import Contact from "..//Contact/contact";
import NavBarHome from "../NavBarHome/navbar";
import FadeInSection from "../Animations/FadeInSection/FadeInSection";

function Home() {
  return (
    <div className="App">
      <NavBarHome />

      <FadeInSection >
        <Intro />
      </FadeInSection>

      <FadeInSection >
        <Skills />
      </FadeInSection>

      <FadeInSection >
       <Portfolio />
      </FadeInSection>

      <FadeInSection >
       <Client />
      </FadeInSection>

      <FadeInSection >
        <Contact />
      </FadeInSection>
      </div>
  );
}

export default Home;
