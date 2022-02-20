import Layout from "../src/components/layout/Layout";
import AboutMe from "../src/components/templates/AboutMe";
import MainVisual from "../src/components/templates/MainVisual";
import SectionTitle from "../src/components/atoms/SectionTitle";
import ProjectSwiper from "../src/components/molecules/ProjectSwiper";

import { Swiper } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css/navigation";

import { InferGetStaticPropsType, NextPage } from "next";
import { ContentfulClientApi, createClient, EntryCollection } from "contentful";

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
  // const Home = () => {
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
          {/* {portfolios.map((portfolio: any) => (
              <ProjectSwiper key={portfolio.sys.id} portfolio={portfolio} />
            ))} */}
          {/* {SLIDEDATA.map((data: any, index: number) => { */}
          {/* {SLIDEDATA.map((data: any, index: number) => { */}
          {/* <ProjectSwiper data={data} />; */}
          <ProjectSwiper portfolios={portfolios} />
          {/* console.log("data=", data);
            })} */}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
