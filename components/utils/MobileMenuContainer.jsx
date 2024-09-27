"use client";

import { isMobile } from "mobile-device-detect";

const MobileMenuContainer = ({ cln, children }) => {
  return (
    <>
      {isMobile && (
        <nav
          className={`${cln} w-full fixed bottom-0 left-0 !z-[1000] rounded-t-[1rem] medium-shadow`}
        >
          {children}
        </nav>
      )}
    </>
  );
};

export default MobileMenuContainer;
