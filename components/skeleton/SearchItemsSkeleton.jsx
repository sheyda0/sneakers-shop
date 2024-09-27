import SkeletonContainer from "./SkeletonContainer";
import SkeletonItem from "./SkeletonItem";

const SearchItemsSkeleton = () => {
  return (
    <SkeletonContainer>
      {[...Array(4)].map((item, index) => (
        <SkeletonItem
          key={index}
          cln="h-[5rem] rounded-[0.5rem] lg:w-[49%] w-full mb-4 w-[47%] lg:w-[32%]"
        />
      ))}
    </SkeletonContainer>
  );
};

export default SearchItemsSkeleton;
