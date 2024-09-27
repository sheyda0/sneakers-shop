const ProductDetailItem = ({ title, value }) => {
  return (
    <div className="mb-[1rem]">
      <h4 className="font-semibold">{title}</h4>
      <p className=" text-zinc-600">{value}</p>
    </div>
  );
};

export default ProductDetailItem;
