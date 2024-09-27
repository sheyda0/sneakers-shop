const SkeletonContainer = ({ children, cln }) => {
  return (
    <div
      role="status"
      className={`animate-pulse w-full flex flex-col lg:flex-row justify-between flex-wrap ${cln}`}
    >
      {children}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SkeletonContainer;
