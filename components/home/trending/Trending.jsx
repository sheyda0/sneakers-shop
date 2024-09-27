import Section from "@/components/utils/Section";
import SectionsTitle from "@/components/utils/SectionsTitle";
import TrendingSlider from "./TrendingSlider";
import supabase from "@/config/supabaseClient";

const Trending = async () => {
  const { data, error } = await supabase.from("products").select("*");

  return (
    <Section cln="lg:!mb-[-3rem] !mb-0">
      <SectionsTitle>Trending</SectionsTitle>
      <TrendingSlider products={data} />
    </Section>
  );
};

export default Trending;
