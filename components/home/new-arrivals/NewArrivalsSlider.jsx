"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { isMobile } from "mobile-device-detect";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import GradientCard from "@/components/cards/GradientCard";

export default function NewArrivalsSlider({ products }) {
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
        {sortedProducts?.map((sneaker, index) => (
          <SwiperSlide key={index}>
            <GradientCard
              image={sneaker.images[0]}
              cardIndex={index}
              name={sneaker.name}
              price={sneaker.price}
              url={`/products/${sneaker.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
