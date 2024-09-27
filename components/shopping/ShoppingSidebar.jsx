"use client";

import { isMobile } from "mobile-device-detect";
import Filters from "./filters/Filters";

const ShoppingSidebar = () => {
  return (
    <>
      {!isMobile && (
        <div className="max-w-[22%] min-w-[22%] h-max">
          <Filters />
        </div>
      )}
    </>
  );
};

export default ShoppingSidebar;
