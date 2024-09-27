"use client";

import { useState, useEffect } from "react";
import ColorFilterItem from "./ColorFilterItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectColor,
  selectcolor,
  setColors,
} from "@/lib/features/filters/filtersSlice";
import { handleParamsChange } from "@/utils/functions";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const colors = [
  { name: "black", hex: "#363636", total: 5 },
  { name: "blue", hex: "#048fb8", total: 5 },
  // { name: "brown", hex: "#7f5546", total: 5 },
  { name: "green", hex: "#5fa72c", total: 5 },
  { name: "orange", hex: "#ff7e4a", total: 5 },
  // { name: "pink", hex: "#f9c7dd", total: 5 },
  { name: "white", hex: "#ffffff", total: 5 },
];

const ColorFilter = () => {
  const [urlColors, setUrlColors] = useState([]);
  const dispatch = useDispatch();
  const selectedcolors = useSelector((state) => state.filters.colors);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const colorParams = searchParams.get("color")?.split(",") || [];
    setUrlColors(colorParams);

    if (colorParams.length > 0) {
      dispatch(setColors(colorParams));
    }
  }, [searchParams]);

  const isChecked = (colorName) => {
    return selectedcolors.includes(colorName) || urlColors.includes(colorName);
  };

  return (
    <div className="flex flex-col w-full items-center gap-[0.5rem] lg:gap-[1rem]">
      {colors.map((color, index) => (
        <ColorFilterItem
          key={index}
          index={index}
          color={color.name}
          hex={color.hex}
          total={color.total}
          onChange={() =>
            handleParamsChange(
              "color",
              color.name,
              dispatch(selectColor(color.name)),
              router,
              pathname,
              searchParams
            )
          }
          checked={isChecked(color.name)}
        />
      ))}
    </div>
  );
};

export default ColorFilter;
