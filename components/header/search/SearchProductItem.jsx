"use client";

import { isMobile } from "mobile-device-detect";
import Image from "next/image";
import Link from "next/link";

const SearchProductItem = ({ product }) => {
  return (
    <div className="mb-[2rem] transition-all duration-300 medium-shadow-hover lg:mb-[2rem] flex justify-between rounded-[1rem] lg:p-[1rem] w-1/2">
      <div className="flex">
        <Link href={`/products/${product.id}`} className="w-[8rem] lg:w-max">
          <Image
            src={`/images/products/${product.images[0]}`}
            width={isMobile ? 150 : 110}
            height={isMobile ? 150 : 110}
            alt="sneaker"
            className="rounded-[1rem] w-full"
          />
        </Link>

        <div className="flex flex-col justify-between ml-[1rem]">
          <div>
            <Link href={`/products/${product.id}`}>
              <h2 className="text-base lg:text-[0.875rem] font-semibold uppercase w-[15rem] lg:w-max">
                {product.name}
              </h2>{" "}
            </Link>

            <p className="text-base lg:text-[0.875rem] mt-[5px] font-semibold">
              $ {product.price}.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProductItem;
