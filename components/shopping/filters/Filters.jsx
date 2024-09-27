"use client";

import Accordion from "@/components/utils/Accordion";
import BrandFilter from "./BrandFilter";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import PriceFilter from "./PriceFilter";
import { isMobile } from "mobile-device-detect";

const Filters = ({ onSeeResultsClick }) => {
  return (
    <div className="py-[1rem] flex flex-col justify-between h-full">
      <div className="w-full px-[1rem] overflow-y-auto pb-[2rem]">
        <Accordion
          title="Brand"
          contentHeight="h-[6.3rem]"
          content={<BrandFilter />}
        />
        <Accordion
          title="Size"
          contentHeight="h-[9rem]"
          content={<SizeFilter />}
        />
        <Accordion
          title="Color"
          contentHeight="h-[17rem] lg:h-[19rem]"
          content={<ColorFilter />}
        />
        <Accordion
          title="Price"
          contentHeight="h-[7.5rem]"
          content={<PriceFilter />}
        />
      </div>
      {isMobile && (
        <PrimaryButton
          cln="w-full py-[0.5rem] min-h-[2.5rem] fixed bottom-[1.2rem] left-0"
          btnTxtCln="text-[1.1rem]"
          onClick={onSeeResultsClick}
        >
          SEE RESULTS
        </PrimaryButton>
      )}
    </div>
  );
};

export default Filters;
