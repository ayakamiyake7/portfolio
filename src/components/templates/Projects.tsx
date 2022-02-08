import Image from "next/image";
import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import ProjectImage from "../../../public/images/image-01.png";
import ProjectSwiper from "../molecules/ProjectSwiper";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto mt-20 mb-20 px-4 md:px-0"
    >
      <SectionTitle title="Projects" />
      <div className="mt-8">
        <ProjectSwiper />
      </div>
    </section>
  );
};

export default Projects;
