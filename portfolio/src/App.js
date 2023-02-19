import React from "react";
import Contact from "./componants/Contact";
import Information from "./componants/Information";
import Language from "./componants/Language";
import Navbar from "./componants/Navbar";
import Title from "./componants/Title";
import Project from "./componants/Project";
import Footer from "./componants/Footer";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Title />
      <Information />
      <Contact />
      <Language />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
