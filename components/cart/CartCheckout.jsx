"use client";

import { useSelector } from "react-redux";
import PrimaryButton from "../buttons/PrimaryButton";
import CheckoutItem from "./CheckoutItem";
import { getSubtotal } from "@/lib/features/cart/cartSlice";

const CartCheckout = ({ cln }) => {
  const subtotal = useSelector(getSubtotal);
  return (
    <div className={cln}>
      <div className="w-full flex flex-col gap-[1rem] !h-max border-b border-dashed pb-[1rem]">
        <CheckoutItem title="Subtotal" value={`$${subtotal}.00`} />
        <CheckoutItem title="Shopping" value="Free" />
        <CheckoutItem title="Estimated sales tax" value="_" />
      </div>

      <CheckoutItem
        title="Total Cost"
        value={`$${subtotal}.00`}
        cln="lg:py-[2rem]"
        titleStyle="text-[1.25rem] text-black"
        valueStyle="text-[1.25rem]"
      />

      <PrimaryButton
        btnTxtCln="text-[1.125rem] lg:!text-[1.25rem]"
        cln="px-[3rem] py-[0.5rem]"
      >
        Checkout
      </PrimaryButton>
    </div>
  );
};

export default CartCheckout;
