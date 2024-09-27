import Section from "@/components/utils/Section";
import SectionsTitle from "@/components/utils/SectionsTitle";
import NewArrivalsSlider from "./NewArrivalsSlider";
import supabase from "@/config/supabaseClient";

const NewArravals = async () => {
  const { data, error } = await supabase.from("products").select("*");

  return (
    <Section>
      <SectionsTitle>new arrivals</SectionsTitle>
      <NewArrivalsSlider products={data} />
    </Section>
  );
};

export default NewArravals;
