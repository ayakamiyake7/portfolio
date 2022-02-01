import Image from "next/image";
import Layout from "../src/components/layout/Layout";
import ProjectsTopImage from "../public/images/image-product-01.png";
import Category from "../src/components/atoms/Category";
import ProjectsContent from "../src/components/templates/ProjectsContent";
import SectionTitle from "../src/components/atoms/SectionTitle";

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
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4"
          >
            <path
              d="M15 30C6.71484 30 0 23.2852 0 15C0 6.71484 6.71484 0 15 0C23.2852 0 30 6.71484 30 15C30 23.2852 23.2852 30 15 30Z"
              fill="#003F63"
            />
            <path
              d="M23.8867 5.29292C23.8555 5.29292 23.8242 5.29292 23.7969 5.30073H19.1016C18.8125 5.29292 18.543 5.44526 18.3984 5.69526C18.2539 5.94526 18.2539 6.25385 18.3984 6.50385C18.543 6.74995 18.8125 6.90229 19.1016 6.89838H21.9688L13.7344 15.1328C13.5273 15.3359 13.4414 15.6328 13.5156 15.914C13.5898 16.1914 13.8086 16.4101 14.0859 16.4843C14.3672 16.5585 14.6641 16.4726 14.8672 16.2656L23.1016 8.0312V10.8984C23.0977 11.1874 23.25 11.457 23.4961 11.6015C23.7461 11.746 24.0547 11.746 24.3047 11.6015C24.5547 11.457 24.7031 11.1874 24.6992 10.8984V6.19917C24.7344 5.9687 24.6602 5.73042 24.5039 5.55854C24.3477 5.38276 24.1211 5.2851 23.8867 5.29292ZM7.90234 8.49995C7.02734 8.49995 6.30078 9.2226 6.30078 10.0976V22.0976C6.30078 22.9726 7.02734 23.6992 7.90234 23.6992H19.9023C20.7773 23.6992 21.5 22.9726 21.5 22.0976V12.0351L19.9023 13.6367V22.0976H7.90234V10.0976H16.3633L17.9648 8.49995H7.90234Z"
              fill="white"
            />
          </svg>
        </div>
        <Category />
        <ProjectsContent />
      </section>
    </Layout>
  );
}
