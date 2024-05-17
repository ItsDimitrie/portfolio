import Home from "./components/Home/home";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/about";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
