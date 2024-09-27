import SliderCard from "../cards/SliderCard";

const ShoppingProducts = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-between lg:justify-normal lg:gap-[1rem] pb-[2rem] w-full mt-[2rem] lg:mt-0">
      {products?.map((sneaker, index) => (
        <SliderCard
          image={sneaker.single_image}
          cardIndex={index}
          name={sneaker.name}
          price={sneaker.price}
          url={`/products/${sneaker.id}`}
          key={index}
          width="w-[47%] lg:w-[32%]"
          height="!h-[17rem] lg:!h-[27rem]"
          images={sneaker.images}
        />
      ))}
    </div>
  );
};

export default ShoppingProducts;
