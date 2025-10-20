import React from "react";
import AboutMe from "../sections/AboutMe";
import TopBar from '../component/organism/NavBar/topBar';
import FeaturedProjects from '../sections/FeaturedProjects';
import Skills from '../sections/Skills';
import ContactMe from '../sections/ContactMe';

function Portfolio() {
  return (
    <div className="w-full" style={{border:'2px solid #f00'}}>
      
      <TopBar />
      <AboutMe/>
      <FeaturedProjects/>
      <Skills/>
      <ContactMe/>
    </div>
  );
}

export default Portfolio;
