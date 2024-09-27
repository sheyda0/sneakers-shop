"use client";

import DashedInput from "@/components/utils/DashedInput";
import { selectSize, setSizes } from "@/lib/features/filters/filtersSlice";
import { handleParamsChange } from "@/utils/functions";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const sizes = [3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];

const SizeFilter = () => {
  const [urlSizes, setUrlSizes] = useState([]);
  const dispatch = useDispatch();
  const selectedSizes = useSelector((state) => state.filters.sizes);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const sizeParams = searchParams.get("size")?.split(",") || [];
    setUrlSizes(sizeParams);

    if (sizeParams.length > 0) {
      dispatch(setSizes(sizeParams));
    }
  }, [searchParams]);

  const isChecked = (size) => {
    return (
      selectedSizes.includes(size.toString()) ||
      urlSizes.includes(size.toString())
    );
  };

  return (
    <div className="flex items-center flex-wrap gap-[0.5rem] lg:gap-[1rem]">
      {sizes.map((size, index) => (
        <DashedInput
          key={index}
          name="size"
          index={index}
          label={size}
          onChange={() =>
            handleParamsChange(
              "size",
              size.toString(),
              dispatch(selectSize(size.toString())),
              router,
              pathname,
              searchParams
            )
          }
          checked={isChecked(size.toString())}
        />
      ))}
    </div>
  );
};

export default SizeFilter;
