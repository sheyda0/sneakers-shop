"use client";

import Image from "next/image";
import InCartButton from "../buttons/InCartButton";
import DeleteButton from "../buttons/DeleteButton";
import { isMobile } from "mobile-device-detect";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "@/lib/features/cart/cartSlice";
import Link from "next/link";
import { removeFromWishlist } from "@/lib/features/wishlist/wishlistSlice";

const CartItem = ({ product, wishlistItem }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id, size) => {
    dispatch(removeItem({ id, size }));
  };

  const handleIncrement = (id, size) => {
    dispatch(incrementQuantity({ id, size }));
  };

  const handleDecrement = (id, size) => {
    dispatch(decrementQuantity({ id, size }));
  };

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist({ id }));
  };

  return (
    <div className="mb-[2rem] transition-all duration-300 medium-shadow-hover lg:mb-[2rem] flex justify-between lg:border rounded-[1rem] lg:p-[1rem] border-dashed lg:pb-[1.5rem]">
      <div className="flex">
        <Link href={`/products/${product.id}`}>
          <Image
            src={`/images/products/${product.image}`}
            width={isMobile ? 150 : 200}
            height={isMobile ? 150 : 200}
            alt="sneaker"
            className="rounded-[1rem]"
          />
        </Link>

        <div className="flex flex-col justify-between ml-[1rem]">
          <div>
            <Link href={`/products/${product.id}`}>
              <h2 className="text-[0.875rem] lg:text-[1.125rem] font-semibold uppercase">
                {product.name}
              </h2>{" "}
            </Link>

            <p className="text-base text-[0.875rem] mt-[5px]">
              $ {product.price}.00
            </p>
          </div>
          {!wishlistItem && (
            <InCartButton
              qty={product.quantity}
              handleIncrease={() => handleIncrement(product.id, product.size)}
              handleDecrease={() => handleDecrement(product.id, product.size)}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between items-center">
        <p className="min-w-[4rem] text-[var(--dark-gray-color)]">
          Size: {product.size}
        </p>
        <DeleteButton
          onClick={() =>
            wishlistItem
              ? handleRemoveFromWishlist(product.id)
              : handleRemoveFromCart(product.id, product.size)
          }
        />
      </div>
    </div>
  );
};

export default CartItem;
