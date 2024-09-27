"use client";

import { isMobile } from "mobile-device-detect";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
isMobile;

const Accordion = ({ title, content, contentHeight }) => {
  const [openAcc, setOpenAcc] = useState(isMobile ? false : true);

  const toggleAcc = () => {
    setOpenAcc(!openAcc);
  };

  return (
    <ul className="w-full relative">
      <div className="text-[1.2rem] py-[1.2rem] border-b border-[var(--gray-color)] border-dashed">
        <div className="flex gap-1">
          <div
            className="flex items-center justify-between w-full"
            onClick={toggleAcc}
          >
            <span className="text-[1.125rem] text-[var(--dark-gray-color)] lg:text-[1.2rem]">
              {title}
            </span>
            {openAcc ? (
              <FiChevronUp color="var(--dark-gray-color)" size={15} />
            ) : (
              <FiChevronDown color="var(--dark-gray-color)" size={15} />
            )}
          </div>
        </div>
        <div
          className={`overflow-hidden accordion-content transition-all duration-300 overflow-y-auto opacity-0 h-0 ${
            openAcc
              ? `opacity-100 pt-[1.5rem] ${
                  contentHeight ? contentHeight : "h-[22rem]"
                }`
              : ""
          }`}
        >
          {content}
        </div>
      </div>
    </ul>
  );
};

export default Accordion;
