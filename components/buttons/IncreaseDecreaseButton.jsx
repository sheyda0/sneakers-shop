const IncreaseDecreaseButton = ({ increase, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[2rem] h-[2rem] rounded-full flex items-center justify-center medium-shadow-hover text-[1.5rem] active:scale-95 bg-white lg:bg-[var(--gray-color)] text-[var(--dark-gray-color)]`}
    >
      <span className="mb-[7px]">{increase ? "+" : "-"}</span>
    </button>
  );
};

export default IncreaseDecreaseButton;
