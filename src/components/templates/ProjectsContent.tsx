import Image from "next/image";
import React from "react";
import ProjectsContentImage from "../../../public/images/image-product-02.png";
import Title from "../atoms/Title";

const ProjectsContent = () => {
  return (
    <>
      <section className="container mx-auto mb-16 px-4 md:px-0 md:flex md:justify-between">
        <div className="md:w-1/2 md:mr-4 mb-4">
          <Image src={ProjectsContentImage} alt="" layout="responsive" />
        </div>
        <div className="md:w-1/2">
          <Title title="Our goal"></Title>
          <p className="text-base md:text-lg tracking-wider">
            We were asked to create a website at Piece Craft Corporation in
            Japan. The website called “Toritada” sells eggs, chickens, rolled
            omelette and so on. The pictures were taken by a professional
            photographer. The client wanted to have a Japanese-style website so
            I used a “Japanese pattern” and “Japanese font” such as Japanese
            calligraphy.
          </p>
        </div>
      </section>

      {/* if the section is last, need to remove mb-16 */}
      <section className="container mx-auto mb-16 px-4 md:px-0 md:flex md:justify-between">
        <div className="md:w-1/2 md:ml-4 mb-4 md:order-2">
          <Image src={ProjectsContentImage} alt="" layout="responsive" />
        </div>
        <div className="md:w-1/2 md:order-1">
          <Title title="Our goal"></Title>
          <p className="text-lg tracking-wider">
            We were asked to create a website at Piece Craft Corporation in
            Japan. The website called “Toritada” sells eggs, chickens, rolled
            omelette and so on. The pictures were taken by a professional
            photographer. The client wanted to have a Japanese-style website so
            I used a “Japanese pattern” and “Japanese font” such as Japanese
            calligraphy.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProjectsContent;
