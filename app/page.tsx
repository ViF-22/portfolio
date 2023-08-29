import Image from "next/image";
import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import ProjectsList from "./components/ProjectsList";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto relative ">
      <Hero />
      <About />
      <Skills />
      <ProjectsList />
      <Contacts />
    </main>
  );
}
