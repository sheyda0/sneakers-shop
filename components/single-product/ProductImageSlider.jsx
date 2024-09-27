"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { isMobile } from "mobile-device-detect";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import ProductStand from "./ProductStand";
import ProductFavoriteButton from "./ProductFavoriteButton";

export default function ProductImageSlider({
  images,
  id,
  handleAddToWishlist,
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="relative w-full lg:w-[70%] h-[24.5rem] lg:h-[48rem] lg:ml-[-2rem] px-[1rem] lg:px-[2rem]">
      {!isMobile && (
        <ProductFavoriteButton
          id={id}
          handleAddToWishlist={handleAddToWishlist}
          cln="absolute top-0 right-[5rem]"
        />
      )}

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-[39.2rem] lg:h-[58rem]"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/images/products/${image}`}
              width={1000}
              height={1000}
              alt="sneaker"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ProductStand />

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper single-product-gallery"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/images/products/${image}`}
              width={200}
              height={200}
              alt="sneaker"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
