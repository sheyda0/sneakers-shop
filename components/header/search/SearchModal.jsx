"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import { brands } from "@/utils/data";
import { useEffect, useState } from "react";
import supabase from "@/config/supabaseClient";
import SearchProductItem from "./SearchProductItem";
import CloseModalBtn from "@/components/buttons/CloseModalBtn";
import Modal from "@/components/modal/Modal";
import SearchItemsSkeleton from "@/components/skeleton/SearchItemsSkeleton";

const SearchModal = ({ handleHideModal, showModal }) => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      let query = supabase.from("products").select("*").range(0, 3);

      if (searchText) {
        query = query.textSearch("name", searchText);
      }

      const { data, error } = await query;
      setLoading(false);

      if (error) {
        console.error("Error fetching data:", error);
        setProducts([]);
      } else {
        setProducts(data);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    if (showModal) fetchProducts();
  }, [searchText, showModal]);

  return (
    <Modal
      handleCloseModal={handleHideModal}
      isOpen={showModal}
      cln="lg:!h-[26rem] !h-[90vh] medium-shadow rounded-[5px] overflow-hidden !z-[10000] !w-[100vw] !left-0 !top-0"
    >
      <div className="flex w-full flex-col items-center justify-center z-[1000] relative">
        <div className="flex w-full justify-end pt-[1rem] pr-[1rem] lg:pr-[2rem]">
          <CloseModalBtn onClick={handleHideModal} />
        </div>
        <div className="w-[90%] lg:w-[60%] mt-[1rem] lg:mt-[-1.5rem]">
          <SearchBar
            onChange={handleSearch}
            value={searchText}
            width="w-full"
          />

          <div className="flex flex-col lg:flex-row gap-[2rem] mt-[2rem]">
            <div className="min-w-[20rem]">
              <p className="text-[1.125rem] mb-[1rem]">
                Or explore our popular categories:
              </p>

              <ul>
                {brands.map((brand) => (
                  <li key={brand.name}>
                    <Link href={brand.url} className="capitalize underline">
                      {brand.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {loading ? (
              <SearchItemsSkeleton />
            ) : (
              <div className="flex flex-col lg:flex-row flex-wrap">
                {products?.map((product) => (
                  <SearchProductItem key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
