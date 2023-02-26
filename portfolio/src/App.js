import React from "react";
import Contact from "./components/Contact";
import Information from "./components/Information";
import Language from "./components/Language";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Skill from "./components/Skill";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Title />
      <Information />
      <Contact />
      <Language />
      <Project />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
