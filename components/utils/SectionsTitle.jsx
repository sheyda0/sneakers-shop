const SectionsTitle = ({ children, cln }) => {
  return (
    <h3
      className={`text-[1.75rem] lg:text-[2.5rem] font-bold lg:mb-[2.5rem] uppercase ${cln}`}
    >
      {children}
    </h3>
  );
};

export default SectionsTitle;
