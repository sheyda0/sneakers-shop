"use client";

import { isMobile } from "mobile-device-detect";
import Link from "next/link";

const HeaderAdvertise = () => {
  return (
    <div
      className={`h-[3rem] lg:h-[2rem] w-full flex items-center gap-[2rem] justify-center text-[var(--light-color)] text-[0.875rem] ${
        isMobile
          ? "bg-[var(--light-color)] text-[var(--primary-color)]"
          : "bg-[var(--primary-color)]"
      }`}
    >
      <span>FREE AND EASY RETURNS</span>
      <Link href="/" className="underline">
        SEE DETAILS
      </Link>
    </div>
  );
};

export default HeaderAdvertise;
