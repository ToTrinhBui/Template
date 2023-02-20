import React from "react";
import Contact from "./componants/Contact";
import Information from "./componants/Information";
import Language from "./componants/Language";
import Navbar from "./componants/Navbar";
import Title from "./componants/Title";
import Project from "./componants/Project";
import Footer from "./componants/Footer";
import Skill from "./componants/Skill";
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
