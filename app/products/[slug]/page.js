import Trending from "@/components/home/trending/Trending";
import Product from "@/components/single-product/Product";
import supabase from "@/config/supabaseClient";

const page = async ({ params }) => {
  const id = params.slug;

  let { data, error } = await supabase.from("products").select().eq("id", id);

  return (
    <div className="pb-[5rem]">
      <Product product={data} />
      <Trending />
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  const { data, error } = await supabase.from("products").select("*");

  const productId = data?.map((product) => ({ id: product.id.toString() }));

  return productId;
}
