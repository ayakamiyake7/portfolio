import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import "swiper/css/bundle";
import "swiper/css/navigation";

const ProjectSwiper = () => {
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
      className="mySwiper"
    >
      {SLIDEDATA.map((data, index: number) => {
        console.log(`${data.posts}`);

        return (
          <SwiperSlide key={`${index}`}>
            <a href={`${data.posts}`}>
              <Image
                src={`${data.src}`}
                width={480}
                height={208}
                alt={`${data.title}`}
              />
            </a>

            <div className="flex justify-between items-center bg-yellow px-6 py-2">
              <a href={`${data.posts}`}>
                <h3 className="text-base font-bold tracking-widest">
                  {`${data.title}`}
                  <span className="text-xs font-medium">
                    {" "}
                    | {`${data.type}`}
                  </span>
                </h3>
              </a>
              <div className="flex">
                <a
                  href={`${data.gitHub}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center hover:opacity-80 transition-all"
                >
                  {data.gitHub[index] && (
                    <FaGithub className="text-navy w-7 h-7" />
                  )}
                </a>

                {data.url[index] && (
                  <a
                    href={`${data.url}`}
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
      })}
    </Swiper>
  );
};

export default ProjectSwiper;
