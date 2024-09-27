"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";
import { isMobile } from "mobile-device-detect";

const colors = [
  "#f6e6e7",
  "#fefbea",
  "#defee4",
  "#ffedeb",
  "#feeef1",
  "#f6e6e7",
  "#fefbea",
  "#defee4",
  "#ffedeb",
  "#feeef1",
  "#f6e6e7",
  "#fefbea",
  "#defee4",
  "#ffedeb",
  "#feeef1",
];

const SliderCard = ({ name, price, images, url, width, height }) => {
  const slides = images?.map((img) => (
    <SwiperSlide key={img}>
      <Image
        alt="slide"
        width={isMobile ? 200 : 350}
        height={isMobile ? 200 : 350}
        src={`/images/products/${img}`}
        loading="lazy"
        decoding="async"
      />
    </SwiperSlide>
  ));

  return (
    <div
      className={`slider-card h-max pb-[1rem] mb-[1rem] bg-white relative rounded-[1rem] overflow-hidden transition-all duration-[0.6s] ${
        width ? width : "w-full"
      } ${height ? height : "h-[18rem] lg:h-[25rem] 3xl:h-[27rem]"}`}
    >
      <Link href={url} className="relative block lg:mb-0">
        <div className="min-w-[42vw] max-w-[42vw] lg:min-w-[19vw] lg:max-w-[19vw] h-[10rem] lg:h-[16rem] 3xl:h-[18rem]">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            scrollbar={{
              hide: false,
            }}
            spaceBetween={10}
            navigation={true}
            draggable={true}
            // thumbs={{ swiper: thumbsSwiper }}
            modules={[Scrollbar]}
            className="mySwiper2 h-[10rem] lg:h-[16rem] 3xl:h-[18rem]"
          >
            {slides}
          </Swiper>
        </div>
      </Link>

      <div className="flex flex-col items-start px-[1rem] mt-[-0.4rem] lg:mt-0 lg:px-0">
        <Link
          href={url}
          className="text-base lg:text-[1.25rem] font-semibold w-[80%]"
        >
          {name}
        </Link>

        <p className="text-base lg:text-[1.25rem] font-semibold mt-[0.5rem]">
          $ {price}.00
        </p>

        {/* <PrimaryButton isLink={true} url={url} cln="!py-[0.4rem]">
          BUY NOW
        </PrimaryButton> */}
      </div>
    </div>
  );
};

export default SliderCard;
