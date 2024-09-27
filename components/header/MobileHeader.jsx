"use client";

import Link from "next/link";
import Logo from "./Logo";
import { isMobile } from "mobile-device-detect";
import HeaderAdvertise from "./HeaderAdvertise";

const MobileHeader = () => {
  return (
    <>
      {isMobile && (
        <div className="absolute top-0 left-0 w-[100%] z-[10] flex items-center flex-col">
          <HeaderAdvertise />

          <div className="h-[3rem] bg-[var(--secondary-color)] w-full flex items-center gap-[2rem] justify-center text-[var(--primary-color)] text-[0.875rem]">
            <Link href="/">
              <Logo
                color="var(--light-color)"
                size="70px"
                cln="mb-[-1.5rem] mt-[-1.8rem]"
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
