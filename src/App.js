import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Route, Routes} from "react-router-dom";
import { Element } from "react-scroll";

function App() {
  return (
    <>
    <Navbar/>
    <Element id="Home" className="section">
      <Home />
    </Element>
    <Element id="About" className="section">
      <About/>
    </Element>
    <Element id="Contact" className="section">
      <Contact/>
    </Element>
    <Element id="Project" className="section">
      <Project/>
      </Element>
      <Footer/>
    
    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />

    </Routes> */}
    </>

  );
}

export default App;
