import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import AboutMe from "../components/AboutMe/AboutMe";


const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />

      <Hero />

      <AboutMe />
    </>
  );
};

export default Home;
