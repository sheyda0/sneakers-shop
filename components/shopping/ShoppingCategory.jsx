import Link from "next/link";

const ShoppingCategory = ({ children, active, slug }) => {
  return (
    <Link
      href={`/shopping/${slug}`}
      className={`w-max h-[2rem] text-[0.875rem] capitalize px-[0.58rem] py-[0.2rem] rounded-full medium-shadow flex items-center justify-center ${
        active
          ? "bg-[var(--primary-color)] text-[var(--light-color)]"
          : "bg-white text-[var(--dark-gray-color)]"
      }`}
    >
      {children}
    </Link>
  );
};

export default ShoppingCategory;
