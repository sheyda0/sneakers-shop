import SkeletonContainer from "./SkeletonContainer";
import SkeletonItem from "./SkeletonItem";

const SliderSkeleton = () => {
  return (
    <SkeletonContainer cln="pb-[10rem]">
      {[...Array(4)].map((item, index) => (
        <SkeletonItem
          key={index}
          cln="rounded-[0.5rem] h-[18rem] lg:h-[25rem] w-[47%] lg:w-[32%]"
        />
      ))}
    </SkeletonContainer>
  );
};

export default SliderSkeleton;
