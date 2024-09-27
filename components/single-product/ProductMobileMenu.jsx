"use client";

import { useDispatch } from "react-redux";
import PrimaryButton from "../buttons/PrimaryButton";
import MobileMenuContainer from "../utils/MobileMenuContainer";
import { addToCart } from "@/lib/features/cart/cartSlice";

const ProductMobileMenu = ({ product, handleAddProduct, selectedSize }) => {
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
    <>
      <MobileMenuContainer cln="bg-white h-[80px] py-[12px] px-[1rem] tabbar lg:hidden flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-[var(--dark-gray-color)] text-[1.125rem]">Price</p>
          <p className="ont-semibold text-[1.25rem]">$ {product?.price}.00</p>
        </div>

        <PrimaryButton
          btnTxtCln="text-[1.125rem]"
          cln="px-[3rem] py-[0.5rem]"
          onClick={() =>
            handleAddToCart(
              product?.id,
              product?.name,
              product?.images[0],
              product?.price,
              selectedSize
            )
          }
        >
          ADD TO CART
        </PrimaryButton>
      </MobileMenuContainer>
    </>
  );
};

export default ProductMobileMenu;
