import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const MainVisual = () => {
  return (
    <section className="bg-gradient-to-b from-[#FEAB65] via-[#ECA7A4] to-[#BC98BF] relative pt-36 pb-36 lg:px-64">
      <h1 className="text-white text-4xl md:text-6xl font-bold tracking-widest text-center mb-10">
        Hi,
        <br className="md:hidden" />
        I’m Ayaka!
      </h1>
      <span className="text-white text-2xl block text-center tracking-wider mb-4 leading-2 after:absolute after:inline-block after:w-px after:h-16 after:bg-white after:left-0 after:right-0 after:m-auto after:bottom-10">
        Front-end Developer
      </span>
      <div className="flex justify-center px-4">
        <a
          href="https://www.linkedin.com/in/ayaka-miyake/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="w-5 h-5 text-white" />
        </a>

        <a
          href="https://github.com/ayakamiyake7/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4"
        >
          <FaGithub className="w-5 h-5 text-white" />
        </a>
      </div>
    </section>
  );
};

export default MainVisual;
