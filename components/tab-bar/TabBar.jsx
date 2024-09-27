"use client";

import { useState, useEffect } from "react";
import TabBarTab from "./TabBarTab";
import { usePathname } from "next/navigation";
import { tabBarItems } from "@/utils/data";
import MobileMenuContainer from "../utils/MobileMenuContainer";

const TabBar = () => {
  const [selectedTab, setSelectedTab] = useState("menu-1");

  const currentPath = usePathname();

  useEffect(() => {
    tabBarItems.forEach((path, index) => {
      if (path.path === currentPath) {
        setSelectedTab(`menu-${index + 1}`);
      }
    });
  }, [currentPath]);

  return (
    <>
      <MobileMenuContainer cln="bg-[var(--light-color)] h-[64px] px-[12px] tabbar lg:hidden">
        <div>
          {tabBarItems.map((path, index) => (
            <TabBarTab
              key={index}
              id={index + 1}
              checked={selectedTab === `menu-${index + 1}`}
              icon={path.icon}
              url={path.path}
            />
          ))}
        </div>
      </MobileMenuContainer>
    </>
  );
};

export default TabBar;
