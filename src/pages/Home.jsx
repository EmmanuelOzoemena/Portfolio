import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import AboutMe from "../components/AboutMe/AboutMe";
// import ProjectCard from "../components/ProjectCard/ProjectCard";
import projects from "../data/projects";
import ProjectCarousel from "../components/ProjectCarousel/ProjectCarousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />

      <AboutMe />

      {/* {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))} */}

       <ProjectCarousel projects={projects} />
    </>
  );
};

export default Home;
