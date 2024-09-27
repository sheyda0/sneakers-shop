"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { isMobile } from "mobile-device-detect";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroSlider() {
  const paginationRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && paginationRef.current) {
      swiperInstance.params.pagination.el = paginationRef.current;
      swiperInstance.pagination.init();
      swiperInstance.pagination.render();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance, paginationRef]);

  return (
    <div className="absolute top-[4rem] lg:right-[-15rem] w-full h-full">
      <Swiper
        direction={isMobile ? "horizontal" : "vertical"}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        pagination={{
          clickable: true,
          el: paginationRef.current,
          renderBullet: (index, className) => {
            return `<span className="${className} custom-bullet">${
              index + 1
            }</span>`;
          },
        }}
        speed={2000}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full lg:w-[50%] h-[50vh] lg:h-[100vh]"
      >
        <SwiperSlide>
          <Image
            src="/images/hero/jordan-air-jordan-1-retro-high-og-chicago-lost-and-found_18316489_45637604_2048.png"
            width={isMobile ? 350 : 900}
            height={492}
            alt="sneaker"
            className="rotate-[-20deg] mt-[8%] lg:mt-[15%] ml-[0.65rem] lg:ml-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/hero/jordan-air-jordan-1-mid-wmns-washed-teal_18509026_45626841_2048.png"
            width={isMobile ? 350 : 900}
            height={492}
            alt="sneaker"
            className="rotate-[-20deg] mt-[8%] lg:mt-[15%] ml-[0.65rem] lg:ml-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/hero/jordan-air-jordan-1-mid-se-wmns-lightbulb_15388318_45871167_2048.png"
            width={isMobile ? 350 : 900}
            height={492}
            alt="sneaker"
            className="rotate-[-20deg] mt-[8%] lg:mt-[15%] ml-[0.65rem] lg:ml-0"
          />
        </SwiperSlide>
      </Swiper>

      {/* Custom Pagination */}
      <div ref={paginationRef} className="custom-pagination"></div>
    </div>
  );
}
