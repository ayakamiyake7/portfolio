import { ContentfulClientApi, createClient } from "contentful";

import Image from "next/image";
import Layout from "../../src/components/layout/Layout";
import SectionTitle from "../../src/components/atoms/SectionTitle";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
  const {
    title,
    mainImage,
    image,
    image2,
    link,
    gitHubLink,
    skills,
    leadContent,
    content,
  } = portfolio.fields;

  // For rich text
  const options = {
    renderText: (text: any) => {
      return text
        .split("\n")
        .reduce((children: any, textSegment: any, index: any) => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
    },
  };

  return (
    <Layout>
      <section className="container mx-auto mb-20 px-4 md:px-0">
        <div className="mb-6 md:mb-12">
          <Image
            src={`https:${mainImage.fields.file.url}`}
            width={mainImage.fields.file.details.image.width}
            height={mainImage.fields.file.details.image.height}
            // width="900"
            // height="342"
            layout="responsive"
            objectFit={"cover"}
            alt={title}
          />
        </div>
        <div className="flex items-center mb-9">
          <SectionTitle title={title} />
          <a
            href={`${portfolio.fields.gitHubLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 flex items-center justify-center hover:opacity-80 transition-all"
          >
            {gitHubLink && <FaGithub className="text-navy w-8 h-8" />}
          </a>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy rounded-full w-8 h-8 ml-3 flex items-center justify-center hover:opacity-80 transition-all"
            >
              <FaExternalLinkAlt className="text-white w-4 h-4" />
            </a>
          )}
        </div>
        {skills.map((skill: any) => {
          return (
            <span key={skill} className="text-lg">
              {skills.join(" / ")}
              {console.log(skill)}
            </span>
          );
        })}

        <section className="mt-8 md:px-0 md:flex md:justify-between">
          <div className="md:w-1/2 md:mr-6 md:mb-0 mb-4">
            <Image
              src={`https:${image.fields.file.url}`}
              alt={title}
              layout="responsive"
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
              // width={388}
              // height={216}
            />
          </div>
          <div className="md:w-1/2">
            <div className="text-base md:text-lg tracking-wider">
              {documentToReactComponents(leadContent, options)}
            </div>
          </div>
        </section>

        {content && (
          <section className="mt-16 md:px-0 flex flex-col md:flex-row md:justify-between">
            <div className="md:w-1/2 order-last md:order-first">
              <div className="text-base md:text-lg tracking-wider">
                {documentToReactComponents(content, options)}
              </div>
            </div>
            <div className="md:w-1/2 md:ml-6 md:mb-0 mb-4 order-first md:order-last">
              <Image
                src={`https:${image2.fields.file.url}`}
                alt={title}
                layout="responsive"
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                // width={388}
                // height={216}
              />
            </div>
          </section>
        )}
      </section>
    </Layout>
  );
}
