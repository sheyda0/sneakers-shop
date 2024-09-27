"use client";

import ReleaseCard from "@/components/cards/ReleaseCard";
import Section from "@/components/utils/Section";
import SectionsTitle from "@/components/utils/SectionsTitle";
import supabase from "@/config/supabaseClient";
import { useEffect, useState } from "react";

const Releases = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from("products")
        .select("*")
        .range(0, 2)
        .in("id", [20, 28, 32]);

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
    fetchProducts();
  }, []);

  // const sortedProducts = [...products].sort((a, b) => b.id - a.id);

  return (
    <Section>
      <SectionsTitle cln="mb-[2rem]">Releases</SectionsTitle>

      <div className="flex flex-col lg:flex-row items-center gap-[1rem] w-full">
        {products?.map((item, index) => (
          <ReleaseCard
            url={`product/${item.id}`}
            key={index}
            image={item.images[5]}
            name={item.name}
            price={item.price}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Releases;
