const SecondaryBox = ({ children }) => {
  return (
    <div className="w-full h-max border border-[var(--gray-color)] rounded-[5px]">
      {children}
    </div>
  );
};

export default SecondaryBox;
