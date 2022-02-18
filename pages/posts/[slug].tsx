import { ContentfulClientApi, createClient, Sys } from "contentful";

import Image from "next/image";
import Layout from "../../src/components/layout/Layout";
import Title from "../../src/components/atoms/Title";
import SectionTitle from "../../src/components/atoms/SectionTitle";

import { FaExternalLinkAlt } from "react-icons/fa";

const client: ContentfulClientApi = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY as string,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "portfolio",
  });

  const paths = res.items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const { items } = await client.getEntries({
    content_type: "portfolio",
    "fields.slug": params.slug,
  });
  return {
    props: { portfolio: items[0] },
  };
};

export default function Projects({ portfolio }: { portfolio: any }) {
  console.log(portfolio);
  return (
    <Layout>
      <section className="container mx-auto mb-20 px-4 md:px-0">
        <div className="mb-6 md:mb-12">
          <Image
            src={"/images/image-product-01.png"}
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
        <p className="text-lg">HTML / CSS / jQuery / WordPress / Design</p>

        <section className="mt-8 md:px-0 md:flex md:justify-between">
          <div className="md:w-1/2 md:mr-4 mb-4">
            <Image
              src={"/images/image-product-02.png"}
              alt=""
              layout="responsive"
              width={388}
              height={216}
            />
          </div>
          <div className="md:w-1/2">
            <Title title="Our goal"></Title>
            <p className="text-base md:text-lg tracking-wider">
              We were asked to create a website at Piece Craft Corporation in
              Japan. The website called “Toritada” sells eggs, chickens, rolled
              omelette and so on. Toritada wanted to have a Japanese-style
              website so I used a “Japanese pattern” and “Japanese font” such as
              Japanese calligraphy.
              <br />
              <br />
              This website shows who Toritada is, what history Toritada has and
              has locations and contact form. Then, this information help the
              customers know Toritada well.
            </p>
          </div>
        </section>

        {/* if the section is last, need to remove mb-16 */}
      </section>
    </Layout>
  );
}