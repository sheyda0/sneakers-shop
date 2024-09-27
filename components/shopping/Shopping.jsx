"use client";

import { useState, useEffect, useMemo } from "react";
import Modal from "../modal/Modal";
import Breadcrumb from "../utils/Breadcrumb";
import Dropdown from "../utils/dropdown/Dropdown";
import Section from "../utils/Section";
import ShoppingCategories from "./ShoppingCategories";
import ShoppingProducts from "./ShoppingProducts";
import Filters from "./filters/Filters";
import ModalFiltersHeader from "./filters/ModalFiltersHeader";
import ShoppingSidebar from "./ShoppingSidebar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import supabase from "@/config/supabaseClient";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilters,
  setBrands,
  setColors,
  setMaxPrice,
  setMinPrice,
  setSizes,
} from "@/lib/features/filters/filtersSlice";
import { getParams } from "@/utils/functions";
import ShoppingFiltersButton from "./ShoppingFiltersButton";
import CustomHeader from "../utils/CustomHeader";
import { isMobile } from "mobile-device-detect";
import ShoppingProductsSkeleton from "../skeleton/ShoppingProductsSkeleton";
import _ from "lodash";

const sortOptions = ["Price High To Low", "Price Low To High"];

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isQueryReady, setIsQueryReady] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [loading, setLoading] = useState(true);

  const { brands, sizes, colors } = useSelector((state) => state.filters);

  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const dispatch = useDispatch();
  const selectedBrands = useSelector((state) => state.filters.brands);
  const selectedColors = useSelector((state) => state.filters.colors);
  const selectedFilterSizes = useSelector((state) => state.filters.sizes);
  const selectedSizes = useMemo(
    () => selectedFilterSizes.map((item) => Number(item)),
    [selectedFilterSizes]
  );
  const minPrice = useSelector((state) => state.filters.minPrice);
  const maxPrice = useSelector((state) => state.filters.maxPrice);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  // select sort option and add to params
  const handleSelectSortOption = (option) => {
    setSelectedSortOption(option);
    const params = new URLSearchParams(searchParams.toString());
    const paramExists = params.has("sort");

    if (paramExists) {
      params.set("sort", option.replace(/\s+/g, "-").toLowerCase());
    } else {
      params.append("sort", option.replace(/\s+/g, "-").toLowerCase());
    }

    router.replace(`${path}?${params.toString()}`);
  };

  // get params from url and change state to fetch products
  useEffect(() => {
    const brandParams = getParams(searchParams, "brand", []);
    const colorParams = getParams(searchParams, "color", []);
    const sizesParams = getParams(searchParams, "size", []);
    const minPriceParams = getParams(searchParams, "minPrice", 0);
    const maxPriceParams = getParams(searchParams, "maxPrice", 500);

    if (
      brandParams.length > 0 &&
      colorParams.length > 0 &&
      sizesParams.length > 0 &&
      minPriceParams &&
      maxPriceParams
    ) {
      dispatch(setBrands(brandParams));
      dispatch(setColors(colorParams));
      dispatch(setSizes(sizesParams));
      dispatch(setMinPrice(minPriceParams));
      dispatch(setMaxPrice(maxPriceParams));
    }

    setIsQueryReady(true);
  }, [searchParams, dispatch]);

  // fetch products based on selecting params
  const fetchProducts = async () => {
    setLoading(true);
    try {
      let query = supabase.from("products").select("*");
      // .textSearch("name", "dunk");

      if (selectedBrands.length > 0) {
        query = query.in("brand", selectedBrands);
      }

      if (selectedSizes.length > 0) {
        query = query.contains("sizes", JSON.stringify(selectedSizes));
      }

      if (selectedColors.length > 0) {
        query = query.in("color", selectedColors);
      }

      if ((minPrice, maxPrice)) {
        query = query.gt("price", minPrice);
        query = query.lt("price", maxPrice);
      }

      if (path.includes("/men")) {
        query = query.eq("gender", "mens");
      } else if (path.includes("/women")) {
        query = query.eq("gender", "womens");
      }

      const { data, error } = await query;
      setLoading(false);

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setProducts(data);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const sortedProducts = useMemo(() => {
    if (!products) return [];

    switch (selectedSortOption) {
      case "Price Low To High":
        return [...products].sort((a, b) => a.price - b.price);
      case "Price High To Low":
        return [...products].sort((a, b) => b.price - a.price);
      default:
        return [...products].sort((a, b) => b.id - a.id);
    }
  }, [products, selectedSortOption]);

  const debouncedFetchProducts = _.debounce(fetchProducts, 500);

  useEffect(() => {
    debouncedFetchProducts();
    return () => {
      debouncedFetchProducts.cancel();
    };
  }, [minPrice, maxPrice, brands, sizes, colors]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const sortParam = params.get("sort");

    if (sortParam) {
      switch (sortParam) {
        case "price-low-to-high":
          setSelectedSortOption("Price Low To High");
          break;
        case "price-high-to-low":
          setSelectedSortOption("Price High To Low");
          break;
        default:
          setSelectedSortOption("");
          break;
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (
      !(
        params.has("sort") ||
        params.has("brand") ||
        params.has("size") ||
        params.has("color") ||
        params.has("minPrice") ||
        params.has("maxPrice")
      )
    ) {
      dispatch(resetFilters());
    }
  }, [router, searchParams]);

  return (
    <>
      <Section cln="lg:pt-[8rem] !px-0 !my-0 !lg:my-[3rem] bg-[var(--light-color)] lg:bg-white">
        <CustomHeader title="Shopping" />
        <Breadcrumb />

        <div className="px-[1rem] mt-[1.5rem] lg:mt-0">
          <div className="flex items-center justify-between">
            {isMobile && (
              <ShoppingFiltersButton showFilters={handleShowModal} />
            )}

            <ShoppingCategories />

            <Dropdown
              title="Sort By"
              items={sortOptions}
              selectedSortOption={selectedSortOption}
              handleSelectSortOption={handleSelectSortOption}
            />
          </div>

          <div className="flex gap-[4rem]">
            <ShoppingSidebar />
            {loading ? (
              <ShoppingProductsSkeleton />
            ) : !loading && products.length == 0 ? (
              <div className="text-[1.5rem] w-full h-[50vh] flex items-center justify-center font-semibold text-[var(--dark-gray-color)]">
                Sorry, no products found!
              </div>
            ) : (
              <ShoppingProducts products={sortedProducts} />
            )}
          </div>
        </div>
      </Section>

      <Modal
        isOpen={showModal}
        cln="!z-[1000] p-[1rem] medium-shadow rounded-[5px] overflow-hidden !w-[100vw] !left-0 !h-[100vh] !top-0"
      >
        <ModalFiltersHeader handleHideModal={handleHideModal} />
        <Filters onSeeResultsClick={handleHideModal} />
      </Modal>
    </>
  );
};

export default Shopping;
