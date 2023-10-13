import Image from "next/image";
import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import ProjectsList from "./components/ProjectsList";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="md:max-w-[1500px] mx-auto relative w-full">
      <Hero />
      <About />
      <Skills />
      {/* <ProjectsList /> */}
      <Projects />
      <Contacts />
    </main>
  );
}
