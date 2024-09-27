const HeroCovers = () => {
  return (
    <div className="hidden lg:block">
      <div className="bg-[var(--primary-color)] flex justify-center w-[25%] h-[20%] absolute top-0 right-[22%] rounded-t-none rounded-[2rem]"></div>

      <div className="bg-[var(--primary-color)] w-[25%] h-[75%] absolute bottom-0 right-[22%] rounded-b-none rounded-[2rem]"></div>
    </div>
  );
};

export default HeroCovers;
