"use client";


import Image from "next/image";
import Hero from "./components/Heading";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay:100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 169
    });
    AOS.refresh();
  }, []);


  return (
    <div>
      <Hero/>
      <Skills/>
      <About/>
      <Contact/>
    </div>
  )
  }