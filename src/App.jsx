import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#09081bf6] bg-grid text-white overflow-hidden">
      <Navbar/>
      <About />
      <Skills />
      <Experience />
      <Work/>
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
