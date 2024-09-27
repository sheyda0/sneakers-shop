"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ReleaseCard = ({ url, image, name, price, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnHover = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href={url}
      className="h-[13rem] lg:h-[22rem] 3xl:h-[27rem] relative rounded-[0.5rem] transition-all duration-[0.6s] lg:px-[3rem] w-full lg:w-1/3 lg:hover:w-[50%] flex"
      style={{
        background:
          index === 0 ? "#33BBC5" : index === 1 ? "#85E6C5" : "#C8FFE0",
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleUnHover}
    >
      <div className="relative w-[20%] h-full pt-[1rem] lg:pt-[2rem] pl-[1rem] lg:pl-0">
        <div className="flex flex-col gap-[0.5rem] lg:gap-[1rem] text-[var(--light-color)]">
          <p className="text-[1.5rem] min-w-[10rem] lg:min-w-[15rem] lg:text-[2rem] font-semibold mb-[0.5rem]">
            {name}
          </p>

          <p className="text-base lg:text-[1.25rem]">${price}</p>
        </div>

        <div className="border-[0.5px] opacity-[0.5] border-[var(--light-color)] rotate-180 absolute top-[6.5rem] lg:top-[8rem] left-[1rem] lg:left-0 h-[40%] lg:h-[60%]"></div>
      </div>

      <div>
        <div className="relative max-w-[80%] px-[1.75rem] block lg:px-0 mb-[1rem] lg:mb-0">
          <Image
            src={`/images/products/${image}`}
            width={600}
            height={600}
            alt="sneaker"
            className="rotate-[-15deg] mt-[7%] lg:mt-[30%] !max-w-[140%] ml-[-30%]"
          />
        </div>
      </div>
    </Link>
  );
};

export default ReleaseCard;
