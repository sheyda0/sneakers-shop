"use client";

import CartItem from "../cart/CartItem";
import CustomHeader from "../utils/CustomHeader";
import Section from "../utils/Section";
import BigTitle from "../utils/BigTitle";
import { useSelector } from "react-redux";
import { getWishlistItems } from "@/lib/features/wishlist/wishlistSlice";
import EmptyWishlistState from "./EmptyWishlistState";

const Wishlist = () => {
  const wishlistItems = useSelector(getWishlistItems);
  const wishlistLength = wishlistItems.length;

  return (
    <>
      <div className="bg-[var(--light-color)] lg:min-h-[100vh] lg:bg-white">
        <CustomHeader title="My Wishlist" />
        {wishlistLength ? (
          <Section cln="!mt-[2rem] lg:!mt-[12rem] flex justify-between mb-0 lg:pb-0">
            <div className="lg:w-[60%] mx-auto w-full">
              <BigTitle>My Wishlist ({wishlistLength})</BigTitle>
              {wishlistItems.map((product, index) => (
                <CartItem wishlistItem={true} key={index} product={product} />
              ))}
            </div>
          </Section>
        ) : (
          <EmptyWishlistState />
        )}
      </div>
    </>
  );
};

export default Wishlist;
