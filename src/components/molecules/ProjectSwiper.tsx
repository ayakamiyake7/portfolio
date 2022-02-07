import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";

import "swiper/css/bundle";
import "swiper/css/navigation";

const ProjectSwiper = () => {
  const SLIDEDATA = [
    //constants
    {
      src: "/images/image-01.png",
      text: "test",
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      modules={[Navigation]}
      className="mySwiper"
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {SLIDEDATA.map((data, index: number) => {
        return (
          <SwiperSlide key={`${index}`}>
            <Image
              src={data.src}
              layout="responsive"
              width={640}
              height={400}
              alt="test_image"
            />
            {data.text}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProjectSwiper;
