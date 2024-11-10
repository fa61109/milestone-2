// skills.tsx (or Skills.tsx)
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-2 item-center">
        <div data-aos="zoom-in">
          <h2 className="text-4xl md:text-5xl text-red-500">Technologies I work with</h2>
          <p className="text-white pt-2">
          "I am a skilled developer with expertise in HTML, 
          CSS, JavaScript, TypeScript, Next.js, and Tailwind CSS.
           I bring a strong foundation in front-end technologies to build responsive,
            efficient, and visually engaging web applications."
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 text-[#c0c0c0] text-3xl sm:text-4xl">
            <div className="space-y-2">
              <h2 data-aos="zoom-in">HTML</h2>
              <h2 data-aos="zoom-in">CSS</h2>
              <h2 data-aos="zoom-in">TYPESCRIPT</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="zoom-in">NEXT.JS</h2>
              <h2 data-aos="zoom-in">TAILWIND</h2>
              <h2 data-aos="zoom-in">JAVASCRIPT</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
