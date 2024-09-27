"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { isMobile } from "mobile-device-detect";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import GradientCard from "@/components/cards/GradientCard";
import SliderCard from "@/components/cards/SliderCard";

export default function TrendingSlider({ products }) {
  const sortedProducts = [...products].sort((a, b) => b.id - a.id);

  return (
    <>
      <Swiper
        slidesPerView={isMobile ? 2 : 4}
        slidesPerGroup={2}
        speed={800}
        loop={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {sortedProducts.map((sneaker, index) => (
          <SwiperSlide key={index}>
            <SliderCard
              image={sneaker.single_image}
              cardIndex={index}
              name={sneaker.name}
              price={sneaker.price}
              url={`/products/${sneaker.id}`}
              width="w-full"
              // height="h-[17rem] lg: h-[27rem]"
              images={sneaker.images}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
