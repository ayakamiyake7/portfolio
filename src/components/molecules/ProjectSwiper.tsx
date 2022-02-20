import React from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Navigation } from "swiper";
import { createClient, EntryCollection } from "contentful";

// type IFields = {
//   title: any;
//   content: any;
//   mainImage: any;
//   image: any;
//   link: any;
// };

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

const ProjectSwiper = ({ portfolios }: { portfolios: any }) => {
  console.log("article=", portfolios);
  // const ProjectSwiper = ({ portfolios }: { portfolios: any }) => {
  // console.log(portfolios);
  // type portfolio = {
  //   title: string;
  // };

  // return (
  // <Swiper
  //   spaceBetween={50}
  //   slidesPerView={1}
  //   modules={[Navigation]}
  //   navigation
  //   loop
  //   breakpoints={{
  //     768: {
  //       slidesPerView: 3,
  //       spaceBetween: 40,
  //     },
  //   }}
  //   className="mySwiper flex"
  // >
  //   <SwiperSlide key={id}>
  //     <Link href={`/posts/${slug}`}>
  //       <a>
  //         <Image
  //           src={`http:${mainImage.fields.file.url}`}
  //           //width={mainImage.fields.file.details.image.width}
  //           // height={mainImage.fields.file.details.image.height}
  //           width={480}
  //           height={208}
  //           alt={title}
  //         />
  //       </a>
  //     </Link>
  //     <div className="flex justify-between items-center bg-yellow px-6 py-2">
  //       <Link href={`/posts/${slug}`}>
  //         <a>
  //           <h3 className="text-base font-bold tracking-widest">
  //             {title}
  //             <span className="text-xs font-medium"> | {type}</span>
  //           </h3>
  //         </a>
  //       </Link>

  //       <div className="flex">
  //         <a
  //           href={`${gitHubLink}`}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="flex items-center justify-center hover:opacity-80 transition-all"
  //         >
  //           {gitHubLink && <FaGithub className="text-navy w-7 h-7" />}
  //         </a>

  //         {link && (
  //           <a
  //             href={link}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="bg-navy rounded-full w-7 h-7 ml-1 flex items-center justify-center hover:opacity-80 transition-all"
  //           >
  //             <FaExternalLinkAlt className="text-white" />
  //           </a>
  //         )}
  //       </div>
  //     </div>
  //   </SwiperSlide>
  // </Swiper>
  // );
  const SLIDEDATA = [
    //constants
    {
      title: "Toritada",
      src: "/images/image-01.png",
      type: "Website",
      posts: "posts/toritada",
      url: "https://toritada.co.jp",
      gitHub: "",
    },
    {
      title: "Todo App",
      src: "/images/image-01.png",
      type: "App",
      posts: "posts/todo-app",
      url: "https://google.com",
      gitHub: "https://github.com/if-tech-support/todo_team_2",
    },
    {
      title: "Triangle inc.",
      src: "/images/image-01.png",
      type: "Website",
      posts: "posts/triangle",
      url: "https://triangle-pearl.jp/",
      gitHub: "",
    },
  ];
  // const { title, mainImage, link, slug, type, gitHubLink } = portfolio.fields;
  // const id = portfolio.sys.id;

  return (
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
        <SwiperSlide key={portfolio.sys.id}>
          {/* <h3 className="text-base font-bold tracking-widest">
            {portfolio.fields.title}
          </h3> */}

          <Link href={`/posts/${portfolio.fields.slug}`}>
            <a>
              <Image
                src={`http:${portfolio.fields.mainImage.fields.file.url}`}
                //width={mainImage.fields.file.details.image.width}
                // height={mainImage.fields.file.details.image.height}
                width={480}
                height={208}
                alt={portfolio.fields.title}
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
        </SwiperSlide>
      ))}

      {/* {SLIDEDATA.map((data: any, index: number) => {
        return (
          <SwiperSlide>
            <h3 className="text-base font-bold tracking-widest">
              {data.title}
              <span className="text-xs font-medium"> | {data.type}</span>
            </h3>
            ;
          </SwiperSlide>
        );
      })} */}
    </Swiper>
  );
};

export default ProjectSwiper;
