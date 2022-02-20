import Layout from "../src/components/layout/Layout";
import AboutMe from "../src/components/templates/AboutMe";
import MainVisual from "../src/components/templates/MainVisual";
import SectionTitle from "../src/components/atoms/SectionTitle";
import ProjectSwiper from "../src/components/molecules/ProjectSwiper";

import "swiper/css/navigation";

import { NextPage } from "next";
import { createClient } from "contentful";

export const getStaticProps = async () => {
  // const client: ContentfulClientApi = createClient({
  const client: any = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY as string,
  });

  // const response: EntryCollection<IFields> = await client.getEntries({
  const response: any = await client.getEntries({
    content_type: "portfolio",
  });
  return {
    props: {
      portfolios: response.items,
    },
  };
};

const Home: NextPage<any> = ({ portfolios }) => {
  console.log("portfolios-", portfolios);

  return (
    <Layout>
      <MainVisual />
      <AboutMe />

      <section
        id="projects"
        className="container mx-auto mt-20 mb-20 px-4 md:px-0"
      >
        <SectionTitle title="Projects" />
        <div className="mt-8">
          <ProjectSwiper portfolios={portfolios} />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
