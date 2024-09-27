"use client";

import Image from "next/image";
import { isMobile } from "mobile-device-detect";
import Link from "next/link";

const AddedToCartItem = ({ product }) => {
  return (
    <div className="lg:border-b pt-[1rem] lg:p-[1rem] border-[var(--light-gray-color)] lg:pb-[1.5rem]">
      <div className="mb-[2rem] transition-all duration-300 lg:mb-[2rem] flex justify-between ">
        <div className="flex">
          <Image
            src={`/images/products/${product.images[0]}`}
            width={isMobile ? 150 : 170}
            height={isMobile ? 150 : 170}
            alt="sneaker"
            className="rounded-[1rem]"
          />

          <div className="flex flex-col justify-between ml-[1rem]">
            <div>
              <h2 className="text-[0.875rem] lg:text-[1.125rem] font-semibold uppercase">
                {product.name}
              </h2>

              <p className="text-base text-[0.875rem] mt-[5px]">
                $ {product.price}.00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <p className="font-semibold">25+ people have this item in their cart</p>
      </div>
    </div>
  );
};

export default AddedToCartItem;
