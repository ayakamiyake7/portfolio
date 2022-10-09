import React from "react";
import Image from "next/image";
import ProfileImage from "../../../public/images/image-profile.png";
import SectionTitle from "../atoms/SectionTitle";
import Title from "../atoms/Title";

const skillsSet = [
  { name: "HTML5", image: "/images/html5.png" },
  { name: "CSS3", image: "/images/css3.png" },
  { name: "SCSS", image: "/images/scss.png" },
  { name: "JavaScript (ES6)", image: "/images/javascript.png" },
  // {name: 'jQuery', image: '/images/jquery.png'},
  { name: "React", image: "/images/react.png" },
  { name: "Next.js", image: "/images/nextjs.png" },
  { name: "Typescript", image: "/images/typescript.png" },
  // {name: 'Chakra UI', image: '/images/chakra.png'},
  // {name: 'Tailwind CSS', image: '/images/tailwindcss.png'},
  // {name: 'Vercel', image: '/images/vercel.png'},
  // {name: 'Firebase', image: '/images/firebase.png'},
];

const AboutMe = () => {
  return (
    <>
      <section
        id="aboutMe"
        className="container mx-auto mt-20 px-4 md:px-0 md:flex md:justify-between"
      >
        <div className="w-full md:w-3/5 mb-10 md:mb-0">
          <SectionTitle title="About me" />
          <p className="tracking-widest text-base leading-8 mt-8 mb-6 md:text-lg">
            I am a front-end developer from Japan, currently based in London. I
            have a wealth of web-design and creation experience gained while
            working for web design companies in Japan. I am highly driven and
            love to learn new things.
          </p>

          <Title title="Skills" />
          <ul className="flex flex-wrap">
            {skillsSet.map((skill) => {
              return (
                <li className="mr-2 mt-2" key={skill.name}>
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={48}
                    height={48}
                  />
                </li>
              );
            })}
          </ul>
          <ul className="text-base flex flex-wrap mt-5">
            {skillsSet.map((skill) => (
              <li
                className="w-1/2 md:w-1/3 relative pl-4 before:w-3 before:h-3 before:bg-yellow before:inline-block before:absolute before:left-0 before:top-0 before:bottom-0 before:m-auto"
                key={skill.name}
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <div className="relative after:w-64 after:h-64 after:bg-yellow after:absolute after:-bottom-3 md:after:-bottom-2 after:left-0 md:after:left-5 after:-right-10 md:after:right-0 after:m-auto after:-z-10">
            <Image src={ProfileImage} alt="Ayaka Miyake" className="" />
          </div>
          <a
            href="./CV_ayaka_miyake.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy font-bold text-lg mx-auto mt-8 block rounded-lg border-4 border-navy w-4/5 py-2 px-6 hover:bg-navy hover:text-white transition"
          >
            Download CV
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
