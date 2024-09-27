import SkeletonContainer from "./SkeletonContainer";
import SkeletonItem from "./SkeletonItem";

const ShoppingProductsSkeleton = () => {
  return (
    <SkeletonContainer cln="pb-[10rem] !flex-row">
      {[...Array(6)].map((item, index) => (
        <SkeletonItem
          key={index}
          cln="rounded-[0.5rem] h-[18rem] lg:h-[25rem] w-[47%] lg:w-[32%] mb-[1rem] lg:mb-0"
        />
      ))}
    </SkeletonContainer>
  );
};

export default ShoppingProductsSkeleton;
