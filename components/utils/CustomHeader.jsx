"use client";

import { useState } from "react";
import SearchButton from "../header/search/SearchButton";
import GoBackButton from "../utils/GoBackButton";
import { isMobile } from "mobile-device-detect";
import SearchModal from "../header/search/SearchModal";

const CustomHeader = ({ title, rightButton }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {isMobile && (
        <>
          <header>
            <div className="w-full flex items-center justify-between p-[1rem] pb-0">
              <GoBackButton />
              <p className="text-[1.125rem] font-semibold">{title}</p>
              {rightButton ? (
                rightButton
              ) : (
                <SearchButton onClick={handleShowModal} />
              )}
            </div>
          </header>

          <SearchModal
            handleHideModal={handleHideModal}
            showModal={showModal}
          />
        </>
      )}
    </>
  );
};

export default CustomHeader;
