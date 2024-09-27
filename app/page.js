import HomeContent from "@/components/home/HomeContent";
import supabase from "@/config/supabaseClient";
export default async function Home() {
  let { data, error } = await supabase.from("products").select("*");

  return (
    <>
      <HomeContent products={data} />
    </>
  );
}
