import { useState } from "react";
import "./App.css";
import InfoTab from "./Components/HeroSection/InfoTab";
import NavBar from "./Components/HeroSection/Navbar";
import Hero from "./Components/HeroSection/Hero";
import Carousel from "./Components/HeroSection/Carosel";
import { About } from "./Components/AboutUsSection/About";
import SimpleSlider, { Specification } from "./Components/AboutUsSection/Specification";
import Projects from "./Components/ProjectsSection/Projects";
import Testinominals from "./Components/TestinominalsSection/Testinominals";
import Teams from "./Components/Teamsection/Teams";
import Faqsection from "./Components/FAQ/faqsection";
import Logos from "./Components/FAQ/Logos";
import LatestBlogs from "./Components/FAQ/LatestBlogs";
import WinningAwards from "./Components/FAQ/WinningAwards";

function App() {
  return (
    <>
      <InfoTab />
      <NavBar />
      <Hero/>
      {/* <Carousel/> */}
      <About/>
      {/* <SimpleSlider/> */}
      <Projects/>
      <Testinominals/>
      <Teams/>
      <Faqsection/>
      <LatestBlogs/>
      <Logos/>
      <WinningAwards/>
    </>
  );
}

export default App;
