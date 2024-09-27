"use client";

import Link from "next/link";
import Logo from "./Logo";
import { isMobile } from "mobile-device-detect";
import IconWhitBadge from "./IconWhitBadge";
import HeaderAdvertise from "./HeaderAdvertise";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { getCartLength } from "@/lib/features/cart/cartSlice";
import { getWishlistLength } from "@/lib/features/wishlist/wishlistSlice";
import { useState } from "react";
import SearchModal from "./search/SearchModal";
import SearchButton from "./search/SearchButton";

const Header = () => {
  const currentPath = usePathname();
  const isHero = currentPath === "/";
  const cartLength = useSelector(getCartLength);
  const wishlistLength = useSelector(getWishlistLength);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <header>
        {!isMobile && (
          <>
            <div
              className={`absolute top-0 left-0 w-[100%] z-[10] ${
                !isHero ? "bg-[var(--light-color)]" : ""
              }`}
            >
              {!isHero && <HeaderAdvertise isHero={isHero} />}

              <div
                className={`w-full flex items-center justify-between px-[2rem] ${
                  !isHero ? "h-[4rem]" : ""
                }`}
              >
                <Link href="/">
                  <Logo
                    color={
                      !isHero ? "var(--primary-color)" : "var(--light-color)"
                    }
                  />
                </Link>

                <Link
                  href="/shopping/men"
                  className={`text-[1.125rem] hidden lg:block ${
                    !isHero
                      ? "text-[var(--primary-color)]"
                      : "text-[var(--light-color)]"
                  }`}
                >
                  MEN
                </Link>

                <Link
                  href="/shopping/women"
                  className={`text-[1.125rem] hidden lg:block ${
                    !isHero
                      ? "text-[var(--primary-color)]"
                      : "text-[var(--light-color)]"
                  }`}
                >
                  WOMEN
                </Link>

                <div className="w-[40%] flex items-center justify-end gap-[3rem] pr-[6%]">
                  <SearchButton onClick={handleShowModal} />

                  <Link href="/cart">
                    <IconWhitBadge
                      number={cartLength}
                      badge={cartLength ? true : false}
                      icon={
                        <svg
                          width="34px"
                          height="34px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 8H17.1597C18.1999 8 19.0664 8.79732 19.1528 9.83391L19.8195 17.8339C19.9167 18.9999 18.9965 20 17.8264 20H6.1736C5.00352 20 4.08334 18.9999 4.18051 17.8339L4.84718 9.83391C4.93356 8.79732 5.80009 8 6.84027 8H8M16 8H8M16 8L16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7L8 8M16 8L16 12M8 8L8 12"
                            stroke="var(--primary-color)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                    />
                  </Link>

                  <Link href="/wishlist">
                    <IconWhitBadge
                      number={wishlistLength}
                      badge={wishlistLength ? true : false}
                      icon={
                        <svg
                          width="36px"
                          height="36px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Interface / Heart_02">
                            <path
                              id="Vector"
                              d="M19.2373 6.23731C20.7839 7.78395 20.8432 10.2727 19.3718 11.8911L11.9995 20.0001L4.62812 11.8911C3.15679 10.2727 3.21605 7.7839 4.76269 6.23726C6.48961 4.51034 9.33372 4.66814 10.8594 6.5752L12 8.00045L13.1396 6.57504C14.6653 4.66798 17.5104 4.51039 19.2373 6.23731Z"
                              stroke="var(--primary-color)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      <SearchModal handleHideModal={handleHideModal} showModal={showModal} />
    </>
  );
};

export default Header;
