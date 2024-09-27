import { usePathname } from "next/navigation";
import ShoppingCategory from "./ShoppingCategory";

const categories = ["all", "men", "women"];

const ShoppingCategories = () => {
  const path = usePathname();

  return (
    <div className="flex items-center gap-[1rem] my-[1rem] ">
      {categories.map((category) => {
        const pageCategory = path.includes(`/${category}`);
        return (
          <ShoppingCategory
            key={category}
            slug={category}
            active={pageCategory}
          >
            {category}
          </ShoppingCategory>
        );
      })}
    </div>
  );
};

export default ShoppingCategories;
