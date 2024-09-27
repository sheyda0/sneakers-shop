"use client";

import { useState } from "react";
import DropdownButton from "./DropdownButton";
import DropdownMenu from "./DropdownMenu";
import "./dropdown.css";

const Dropdown = ({
  title,
  items,
  selectedSortOption,
  handleSelectSortOption,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleActivate = () => {
    setIsActive((prev) => !prev);
  };

  const handleHideDropdown = () => {
    setIsActive(false);
  };



  return (
    <>
      {isActive && (
        <div
          onClick={handleHideDropdown}
          className="w-full h-full absolute top-0 left-0 z-[200]"
        ></div>
      )}

      <div className="relative dropdown">
        <DropdownButton onClick={handleActivate}>
          {selectedSortOption ? selectedSortOption : title}
        </DropdownButton>
        <DropdownMenu
          items={items}
          isActive={isActive}
          handleHideDropdown={handleHideDropdown}
          handleSelectSortOption={handleSelectSortOption}
        />
      </div>
    </>
  );
};

export default Dropdown;
