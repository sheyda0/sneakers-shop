"use client";

import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../buttons/PrimaryButton";
import ProductDetailItem from "./ProductDetailItem";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductOption from "./ProductOption";
import ProductSizes from "./ProductSizes";
import SizeGuideButton from "./SizeGuideButton";
import { addToCart, getItemTotal } from "@/lib/features/cart/cartSlice";
import { useState } from "react";

const ProductInfo = ({
  product,
  handleShowModal,
  handleAddProduct,
  selectedSize,
  handleSizeChange,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (id, name, image, price, size) => {
    dispatch(
      addToCart({
        id,
        name,
        image,
        price,
        size,
      })
    );
    handleAddProduct(product);
  };

  return (
    <div className="w-full lg:w-1/2 h-max lg:h-[50rem] z-[60] bg-[var(--light-color)] lg:bg-transparent rounded-t-[1rem] p-[1rem] lg:px-[2rem]">
      <h2 className="text-[1.25rem] lg:text-[1.5rem] font-semibold uppercase">
        {product?.name}
      </h2>

      {product?.sub_name && (
        <p className="text-[1.125rem]">&quot;{product?.sub_name}&quot;</p>
      )}

      <ProductOption />

      <p className="text-base lg:text-[1.25rem] font-semibold mt-[1rem]">
        $ {product?.price}.00
      </p>

      <div className="flex items-center justify-between w-full">
        <ProductInfoTitle>Size</ProductInfoTitle>

        <SizeGuideButton onClick={handleShowModal} />
      </div>

      <ProductSizes
        sizes={product.sizes}
        selectedSize={selectedSize}
        handleSizeChange={handleSizeChange}
      />

      <PrimaryButton
        onClick={() =>
          handleAddToCart(
            product?.id,
            product?.name,
            product?.images[0],
            product?.price,
            selectedSize
          )
        }
        cln="mt-[3rem] w-full hidden lg:block"
      >
        ADD TO CART
      </PrimaryButton>

      <ProductInfoTitle>Product Details</ProductInfoTitle>

      <div>
        <ProductDetailItem title="Brand" value={product?.brand} />
        <ProductDetailItem title="Nickname" value={product?.sub_name} />
        <ProductDetailItem title="Colorway" value={product?.colorway} />
        <ProductDetailItem title="Gender" value={product?.gender} />
      </div>

      <p className="text-zinc-600">{product?.description}</p>
    </div>
  );
};

export default ProductInfo;
