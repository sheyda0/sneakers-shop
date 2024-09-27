"use client";

const ProductSizes = ({ sizes, selectedSize, handleSizeChange }) => {
  return (
    <div className="flex flex-wrap items-center gap-[0.5rem] lg:gap-[1rem]">
      {sizes?.map((size, index) => (
        <div className="product-size" key={index}>
          <input
            id={`size-${index + 1}`}
            type="radio"
            name="size"
            onChange={() => handleSizeChange(size)}
            checked={selectedSize === size}
            className="hidden"
          />
          <label htmlFor={`size-${index + 1}`}>
            <div className="w-[3rem] h-[3rem] transition-all duration-300 cursor-pointer flex items-center justify-center bg-[var(--light-gray-color)] rounded-[0.8rem]">
              {size}
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProductSizes;
