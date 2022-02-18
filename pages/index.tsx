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

type IFields = {
  title: string;
  content: string;
  mainImage: string;
  image: string;
  link: string;
};

export const getStaticProps = async () => {
  const client: ContentfulClientApi = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY as string,
  });

  const response: EntryCollection<IFields> = await client.getEntries({
    content_type: "portfolio",
  });
  return {
    props: {
      portfolios: response.items,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ portfolios }) => {
  console.log(portfolios);

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
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation]}
            navigation
            loop
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="mySwiper flex"
          >
            {portfolios.map((portfolio: any) => (
              <ProjectSwiper key={portfolio.sys.id} portfolio={portfolio} />
            ))}
          </Swiper>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
