"use client";

import DashedInput from "@/components/utils/DashedInput";
import { selectBrand, setBrands } from "@/lib/features/filters/filtersSlice";
import { brands } from "@/utils/data";
import { handleParamsChange } from "@/utils/functions";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const BrandFilter = () => {
  const [urlBrands, setUrlBrands] = useState([]);
  const dispatch = useDispatch();
  const selectedbrands = useSelector((state) => state.filters.brands);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const brandParams = searchParams.get("brand")?.split(",") || [];
    setUrlBrands(brandParams);

    if (brandParams.length > 0) {
      dispatch(setBrands(brandParams));
    }
  }, [searchParams]);

  const isChecked = (brandName) => {
    return selectedbrands.includes(brandName) || urlBrands.includes(brandName);
  };

  return (
    <div className="flex w-full items-center flex-wrap lg:flex-nowrap gap-[0.5rem] lg:gap-[1rem]">
      {brands.map((brand, index) => (
        <DashedInput
          key={index}
          activeOnBorder={true}
          cln="min-w-1/3 overflow-hidden min-h-[3.5rem]"
          name="brand"
          index={index}
          label={
            <Image
              src={`/images/brands/${brand.logo}`}
              width={100}
              height={100}
              alt="sneaker"
            />
          }
          onChange={() =>
            handleParamsChange(
              "brand",
              brand.name,
              dispatch(selectBrand(brand.name)),
              router,
              pathname,
              searchParams
            )
          }
          checked={isChecked(brand.name)}
        />
      ))}
    </div>
  );
};

export default BrandFilter;
