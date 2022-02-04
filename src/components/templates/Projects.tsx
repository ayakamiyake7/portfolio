import Image from "next/image";
import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import ProjectImage from "../../../public/images/image-01.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto mt-20 mb-20 px-4 md:px-0"
    >
      <SectionTitle title="Projects" />
      <div className="mt-8">
        <Image src={ProjectImage} alt="Toritada" width={480} height={208} />
        <div className="flex justify-between items-center bg-yellow px-6 py-3 md:w-[480px]">
          <h3 className="text-base font-bold tracking-widest">
            Toritada<span className="text-xs font-medium"> | Website</span>
          </h3>
          <a
            href=""
            className="bg-navy rounded-full w-8 h-8 flex items-center justify-center"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8867 0.292916C17.8555 0.292916 17.8242 0.292915 17.7969 0.300727H13.1016C12.8125 0.292915 12.543 0.445259 12.3984 0.695259C12.2539 0.945259 12.2539 1.25385 12.3984 1.50385C12.543 1.74995 12.8125 1.90229 13.1016 1.89838H15.9688L7.73438 10.1328C7.52734 10.3359 7.44141 10.6328 7.51563 10.914C7.58984 11.1914 7.80859 11.4101 8.08594 11.4843C8.36719 11.5585 8.66406 11.4726 8.86719 11.2656L17.1016 3.0312V5.89839C17.0977 6.18745 17.25 6.45698 17.4961 6.60151C17.7461 6.74604 18.0547 6.74604 18.3047 6.60151C18.5547 6.45698 18.7031 6.18745 18.6992 5.89839V1.19917C18.7344 0.968697 18.6602 0.730416 18.5039 0.558541C18.3477 0.382759 18.1211 0.285103 17.8867 0.292916ZM1.90234 3.49995C1.02734 3.49995 0.300781 4.2226 0.300781 5.0976V17.0976C0.300781 17.9726 1.02734 18.6992 1.90234 18.6992H13.9023C14.7773 18.6992 15.5 17.9726 15.5 17.0976V7.0351L13.9023 8.63667V17.0976H1.90234V5.0976H10.3633L11.9648 3.49995H1.90234Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
