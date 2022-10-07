import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
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

// type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Projects = ({ portfolios }: { portfolios: any }) => {
  console.log("article=", portfolios);

  // type portfolio = {
  //   title: string;
  // };

  // const { title, mainImage, link, slug, type, gitHubLink } = portfolio.fields;
  // const id = portfolio.sys.id;

  return (
    <ul
      // spaceBetween={50}
      // slidesPerView={1}
      // modules={[Navigation]}
      // navigation
      // loop
      // breakpoints={{
      //   768: {
      //     slidesPerView: 3,
      //     spaceBetween: 40,
      //   },
      // }}
      // className="grid grid-cols-2	gap-2"
      className="projects-list"
    >
      {portfolios.map((portfolio: any) => (
        <li key={portfolio.sys.id} className="projects-list--item">
          <Link href={`/posts/${portfolio.fields.slug}`}>
            <a className="block leading-[0]">
              <img
                src={`https:${portfolio.fields.mainImage.fields.file.url}`}
                // width={"40vw"}
                // height={208}
                alt={portfolio.fields.title}
                className="w-full"
              />
            </a>
          </Link>
          <div className="flex justify-between items-center bg-yellow px-6 py-2">
            <Link href={`/posts/${portfolio.fields.slug}`}>
              <a>
                <h3 className="text-base font-bold tracking-widest">
                  {portfolio.fields.title}
                  <span className="text-xs font-medium">
                    {" "}
                    | {portfolio.fields.type}
                  </span>
                </h3>
              </a>
            </Link>

            <div className="flex">
              <a
                href={`${portfolio.fields.gitHubLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:opacity-80 transition-all"
              >
                {portfolio.fields.gitHubLink && (
                  <FaGithub className="text-navy w-7 h-7" />
                )}
              </a>

              {portfolio.fields.link && (
                <a
                  href={portfolio.fields.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy rounded-full w-7 h-7 ml-1 flex items-center justify-center hover:opacity-80 transition-all"
                >
                  <FaExternalLinkAlt className="text-white" />
                </a>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Projects;
