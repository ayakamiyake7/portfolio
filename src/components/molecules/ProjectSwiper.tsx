import React from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectSwiper = ({ portfolio }) => {
  type portfolio = {
    title: string;
  };
  const { title, content, mainImage, image, link, slug, type, gitHubLink } =
    portfolio.fields;
  const id = portfolio.sys.id;
  return (
    <SwiperSlide key={id}>
      <Link href={`/posts/${slug}`}>
        <a>
          <Image
            src={`http:${mainImage.fields.file.url}`}
            //width={mainImage.fields.file.details.image.width}
            // height={mainImage.fields.file.details.image.height}
            width={480}
            height={208}
            alt={title}
          />
        </a>
      </Link>
      <div className="flex justify-between items-center bg-yellow px-6 py-2">
        <Link href={`/posts/${slug}`}>
          <a>
            <h3 className="text-base font-bold tracking-widest">
              {title}
              <span className="text-xs font-medium"> | {type}</span>
            </h3>
          </a>
        </Link>

        <div className="flex">
          <a
            href={`${gitHubLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center hover:opacity-80 transition-all"
          >
            {gitHubLink && <FaGithub className="text-navy w-7 h-7" />}
          </a>

          {link && (
            <a
              href={link}
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
  );
  // const SLIDEDATA = [
  //   //constants
  //   {
  //     title: "Toritada",
  //     src: "/images/image-01.png",
  //     type: "Website",
  //     posts: "posts/toritada",
  //     url: "https://toritada.co.jp",
  //     gitHub: "",
  //   },
  //   {
  //     title: "Todo App",
  //     src: "/images/image-01.png",
  //     type: "App",
  //     posts: "posts/todo-app",
  //     url: "https://google.com",
  //     gitHub: "https://github.com/if-tech-support/todo_team_2",
  //   },
  //   {
  //     title: "Triangle inc.",
  //     src: "/images/image-01.png",
  //     type: "Website",
  //     posts: "posts/triangle",
  //     url: "https://triangle-pearl.jp/",
  //     gitHub: "",
  //   },
  // ];
  // return (
  //   <Swiper
  //     spaceBetween={50}
  //     slidesPerView={1}
  //     modules={[Navigation]}
  //     navigation
  //     loop
  //     breakpoints={{
  //       768: {
  //         slidesPerView: 3,
  //         spaceBetween: 40,
  //       },
  //     }}
  //     className="mySwiper flex"
  //   >
  //     {SLIDEDATA.map((data, index: number) => {
  //       console.log(`${data.posts}`);
  //       return (
  //         <SwiperSlide key={`${data.title}`}>
  //           <a href={`${data.posts}`}>
  //             <Image
  //               src={`${data.src}`}
  //               width={480}
  //               height={208}
  //               alt={`${data.title}`}
  //             />
  //           </a>
  //           <div className="flex justify-between items-center bg-yellow px-6 py-2">
  //             <a href={`${data.posts}`}>
  //               <h3 className="text-base font-bold tracking-widest">
  //                 {`${data.title}`}
  //                 <span className="text-xs font-medium">
  //                   {" "}
  //                   | {`${data.type}`}
  //                 </span>
  //               </h3>
  //             </a>
  //             <div className="flex">
  //               <a
  //                 href={`${data.gitHub}`}
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //                 className="flex items-center justify-center hover:opacity-80 transition-all"
  //               >
  //                 {data.gitHub[index] && (
  //                   <FaGithub className="text-navy w-7 h-7" />
  //                 )}
  //               </a>
  //               {data.url[index] && (
  //                 <a
  //                   href={`${data.url}`}
  //                   target="_blank"
  //                   rel="noopener noreferrer"
  //                   className="bg-navy rounded-full w-7 h-7 ml-1 flex items-center justify-center hover:opacity-80 transition-all"
  //                 >
  //                   <FaExternalLinkAlt className="text-white" />
  //                 </a>
  //               )}
  //             </div>
  //           </div>
  //         </SwiperSlide>
  //       );
  //     })}
  //   </Swiper>
  // );
};

export default ProjectSwiper;
