"use client";

import { isMobile } from "mobile-device-detect";
import FooterCopyrights from "./FooterCopyrights";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <>
      {!isMobile && (
        <footer className="w-full">
          <FooterSocial />

          <div className="h-[15rem] lg:h-[20vh] bg-[var(--light-color)] flex items-center justify-center pb-[5rem] lg:pb-0">
            <FooterCopyrights />
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
