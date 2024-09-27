"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";

const colors = [
  "#f6e6e7",
  "#fefbea",
  "#defee4",
  "#ffedeb",
  "#feeef1",
  "#f6e6e7",
  "#fefbea",
  "#defee4",
  "#ffedeb",
  "#feeef1",
  "#f6e6e7",
  "#fefbea",
  "#defee4",
  "#ffedeb",
  "#feeef1",
  "#f6e6e7",
  "#fefbea",
  "#defee4",
  "#ffedeb",
  "#feeef1",
  "#f6e6e7",
  "#fefbea",
  "#defee4",
  "#ffedeb",
  "#feeef1",
  "#f6e6e7",
  "#fefbea",
  "#defee4",
  "#ffedeb",
  "#feeef1",
];

const GradientCard = ({
  name,
  price,
  image,
  url,
  cardIndex,
  width,
  height,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnHover = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative rounded-[0.5rem] overflow-hidden transition-all duration-[0.6s] lg:px-[3rem] ${
        width ? width : ""
      } ${height ? height : "h-[15.7rem] lg:h-[20rem] 3xl:h-[21.5rem]"}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnHover}
    >
      <Link
        href={url}
        className="relative px-[1.75rem] block lg:px-0 mb-[1rem] lg:mb-0"
      >
        <Image
          src={`/images/products/${image}`}
          width={400}
          height={400}
          alt="sneaker"
        />
      </Link>

      {colors.map(
        (color, index) =>
          index === cardIndex && (
            <div
              className={`w-full h-full absolute top-0 transition-all duration-[0.9s] left-0 z-[-1] ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
              style={{
                background: `linear-gradient(0deg, ${colors[cardIndex]} 0%, rgba(0,0,0,0) 40%)`,
              }}
              key={index}
            ></div>
          )
      )}

      <div className="flex flex-col items-center justify-between h-[55%] 3xl:h-[45%] gap-[0.5rem] lg:gap-[1rem]">
        <Link
          href={url}
          className="text-base lg:text-[1.25rem] font-semibold mb-[0.5rem] text-center w-[80%]"
        >
          {name}
        </Link>

        <p className="text-[var(--primary-color)] text-base lg:text-[1.25rem] font-semibold">
          $ {price}.00
        </p>

        <PrimaryButton isLink={true} url={url} cln="!py-[0.4rem]">
          BUY NOW
        </PrimaryButton>
      </div>
    </div>
  );
};

export default GradientCard;
