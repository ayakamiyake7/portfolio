import React from "react";
import Image from "next/image";
import ProfileImage from "../../../public/images/image-profile.png";
import SectionTitle from "../atoms/SectionTitle";
import Title from "../atoms/Title";

const AboutMe = () => {
  return (
    <>
      <section className="container mx-auto mb-20 px-4 md:px-0 md:flex md:justify-between">
        <div className="w-full md:w-3/5 mb-10 md:mb-0">
          <SectionTitle title="About me" />
          <p className="tracking-widest text-base leading-8 mb-6 md:text-lg">
            I’m a front-end developer from Japan, currently based in London. In
            the past, I have worked at web design companies and created some web
            sites with my team members while working in Japan. I love to learn
            new things.
          </p>

          <Title title="Skills" />
          <ul className="text-base flex flex-wrap">
            <li className="w-1/2 md:w-1/3 relative pl-4 before:w-3 before:h-3 before:bg-yellow before:inline-block before:absolute before:left-0 before:top-0 before:bottom-0 before:m-auto">
              HTML5 / CSS3
            </li>
            <li className="w-1/2 md:w-1/3 relative pl-4 before:w-3 before:h-3 before:bg-yellow before:inline-block before:absolute before:left-0 before:top-0 before:bottom-0 before:m-auto">
              Sass
            </li>
            <li className="w-1/2 md:w-1/3 relative pl-4 before:w-3 before:h-3 before:bg-yellow before:inline-block before:absolute before:left-0 before:top-0 before:bottom-0 before:m-auto">
              JavaScript (ES6)
            </li>
            <li className="w-1/2 md:w-1/3 relative pl-4 before:w-3 before:h-3 before:bg-yellow before:inline-block before:absolute before:left-0 before:top-0 before:bottom-0 before:m-auto">
              jQuery
            </li>
            <li className="w-1/2 md:w-1/3 relative pl-4 before:w-3 before:h-3 before:bg-yellow before:inline-block before:absolute before:left-0 before:top-0 before:bottom-0 before:m-auto">
              React
            </li>
            <li className="w-1/2 md:w-1/3 relative pl-4 before:w-3 before:h-3 before:bg-yellow before:inline-block before:absolute before:left-0 before:top-0 before:bottom-0 before:m-auto">
              Next.js
            </li>
            <li className="w-1/2 md:w-1/3 relative pl-4 before:w-3 before:h-3 before:bg-yellow before:inline-block before:absolute before:left-0 before:top-0 before:bottom-0 before:m-auto">
              Typescript
            </li>
          </ul>
        </div>
        <div className="text-center">
          <div className="mb-4 relative after:w-64 after:h-64 after:bg-yellow after:absolute after:-bottom-3 md:after:-bottom-2 after:left-0 md:after:left-5 after:-right-10 md:after:right-0 after:m-auto after:-z-10">
            <Image src={ProfileImage} alt="Ayaka Miyake" className="" />
          </div>
          button
        </div>
      </section>
    </>
  );
};

export default AboutMe;
