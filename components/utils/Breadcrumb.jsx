"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  const newPathSegments = [...pathSegments];
  // if (newPathSegments.length > 0) {
  //   newPathSegments[newPathSegments.length - 1] = product.subcategory;
  // }

  const [activeSegmentIndex, setActiveSegmentIndex] = useState(
    newPathSegments.length - 1
  );

  return (
    <nav className="mb-4 hidden md:block">
      <ul className="flex items-center gap-2 text-[var(--dark-gray-color)]">
        <li>
          <Link href="/">Home</Link>
        </li>
        {newPathSegments?.map((segment, index) => {
          const url = newPathSegments.slice(0, index + 1).join("/");
          const isActive = index === activeSegmentIndex;

          return (
            <li
              key={segment}
              className={`flex items-center gap-2 ${
                isActive ? "font-semibold" : ""
              }`}
            >
              <span className="text-[2rem] text-[var(--dark-gray-color)] font-bold mb-[1rem]">
                .
              </span>{" "}
              <Link href={url}>{segment}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
