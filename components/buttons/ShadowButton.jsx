const ShadowButton = ({ children, onClick, cln }) => {
  return (
    <button
      onClick={onClick}
      className={`min-w-[2.8rem] h-[2.8rem] lg:w-[3rem] lg:h-[3rem] transition-all bg-white duration-300 cursor-pointer flex items-center justify-center medium-shadow rounded-[0.8rem] z-50 active:scale-90 ${cln}`}
    >
      {children}
    </button>
  );
};

export default ShadowButton;
