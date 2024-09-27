"use client";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState, useEffect } from "react";
import PriceFilterInput from "./PriceFilterInput";
import { useDispatch } from "react-redux";
import { setMaxPrice, setMinPrice } from "@/lib/features/filters/filtersSlice";
import { handlePriceParamsChange } from "@/utils/functions";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const PriceFilter = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(500);

  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const minPriceParams = parseInt(searchParams.get("minPrice")) || 0;
    const maxPriceParams = parseInt(searchParams.get("maxPrice")) || 500;

    setMin(minPriceParams);
    setMax(maxPriceParams);

    dispatch(setMinPrice(minPriceParams));
    dispatch(setMaxPrice(maxPriceParams));
  }, [searchParams, dispatch]);

  const handleMinChange = (value) => {
    handlePriceParamsChange(
      "minPrice",
      value,
      dispatch(setMinPrice(value)),
      router,
      pathname,
      searchParams
    );
  };

  const handleMaxChange = (value) => {
    handlePriceParamsChange(
      "maxPrice",
      value,
      dispatch(setMaxPrice(value)),
      router,
      pathname,
      searchParams
    );
  };

  const handlePriceChange = (e) => {
    const [newMin, newMax] = e;

    if (newMin !== min) {
      handleMinChange(newMin);
      setMin(newMin);
    }

    if (newMax !== max) {
      handleMaxChange(newMax);
      setMax(newMax);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-[2rem] mb-[2rem]">
        <PriceFilterInput
          label="Min"
          value={min}
          onChange={(e) => handleMinChange(parseInt(e.target.value))}
        />
        <PriceFilterInput
          label="Max"
          value={max}
          onChange={(e) => handleMaxChange(parseInt(e.target.value))}
        />
      </div>

      <div>
        <RangeSlider
          id="price-range-slider"
          min={0}
          max={500}
          value={[min, max]}
          onInput={handlePriceChange}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
