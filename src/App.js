import Home from "./components/Home/home";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
