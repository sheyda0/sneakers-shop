"use client";

import GoBackButton from "../utils/GoBackButton";
import { isMobile } from "mobile-device-detect";
import ProductFavoriteButton from "./ProductFavoriteButton";

const ProductMobileHeader = () => {
  return (
    <>
      {isMobile && (
        <header>
          <div className="w-full flex items-center justify-between p-[1rem] pb-0">
            <GoBackButton />
            <p className="text-[1.125rem] font-semibold">Sneaker</p>
            <ProductFavoriteButton />
          </div>
        </header>
      )}
    </>
  );
};

export default ProductMobileHeader;
