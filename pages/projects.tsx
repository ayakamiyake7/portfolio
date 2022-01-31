import Image from "next/image";
import Layout from "../src/components/layout/Layout";
import ProjectsTopImage from "../public/images/image-product-01.png";
import Category from "../src/components/atoms/Category";

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
        <Category />
      </section>
    </Layout>
  );
}
