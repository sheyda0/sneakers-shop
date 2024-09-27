"use client";

import Section from "../utils/Section";
import CustomHeader from "../utils/CustomHeader";
import CartCheckout from "./CartCheckout";
import CartItem from "./CartItem";
import MobileMenuContainer from "../utils/MobileMenuContainer";
import { isMobile } from "mobile-device-detect";
import CheckoutOptions from "./CheckoutOptions";
import BigTitle from "../utils/BigTitle";
import { useSelector } from "react-redux";
import { getCartLength } from "@/lib/features/cart/cartSlice";
import EmptyCartState from "./EmptyCartState";
// test
const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const cartLength = cart?.length;

  return (
    <>
      <div className="bg-[var(--light-color)] lg:bg-white">
        <CustomHeader title="My Cart" />
        {cartLength ? (
          <Section cln="!mt-[2rem] lg:!mt-[12rem] flex justify-between pb-[25rem] lg:pb-0">
            <div className="lg:w-[60%] w-full">
              <BigTitle>My Shopping Cart ({cartLength})</BigTitle>
              {cart.map((product, index) => (
                <CartItem key={index} product={product} />
              ))}
            </div>

            {isMobile ? (
              <MobileMenuContainer cln="bg-white h-[17rem] py-[1rem] tabbar lg:hidden">
                <CartCheckout cln="flex flex-col justify-between px-[1rem]" />
              </MobileMenuContainer>
            ) : (
              <div className="w-[35%] sticky top-[5rem] right-0 h-max">
                <CheckoutOptions />

                <CartCheckout cln="p-[2rem] bg-[var(--light-color)] flex flex-col rounded-[1rem]" />
              </div>
            )}
          </Section>
        ) : (
          <EmptyCartState />
        )}
      </div>
    </>
  );
};

export default Cart;
