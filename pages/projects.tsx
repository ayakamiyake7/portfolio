import Image from "next/image";
import Layout from "../src/components/layout/Layout";
import ProjectsTopImage from "../public/images/image-product-01.png";
import Category from "../src/components/atoms/Category";
import ProjectsContent from "../src/components/templates/ProjectsContent";
import SectionTitle from "../src/components/atoms/SectionTitle";

import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <Layout>
      <section className="container mx-auto mb-20 px-4 md:px-0">
        <div className="mb-6 md:mb-12">
          <Image
            src={ProjectsTopImage}
            width="900"
            height="342"
            layout="responsive"
            objectFit={"cover"}
          />
        </div>
        <div className="flex items-center mb-9">
          <SectionTitle title="Toritada" />
          <a
            href="https://toritada.co.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy rounded-full w-8 h-8 ml-4 flex items-center justify-center hover:opacity-80 transition-all"
          >
            <FaExternalLinkAlt className="text-white w-4 h-4" />
          </a>
        </div>
        <Category />
        <ProjectsContent />
      </section>
    </Layout>
  );
}
