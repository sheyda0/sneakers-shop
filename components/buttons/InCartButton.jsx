import IncreaseDecreaseButton from "./IncreaseDecreaseButton";

const InCartButton = ({ qty, handleIncrease, handleDecrease }) => {
  return (
    <div className="flex items-center gap-[1rem]">
      <IncreaseDecreaseButton onClick={handleDecrease} />

      <span>{qty}</span>

      <IncreaseDecreaseButton onClick={handleIncrease} increase={true} />
    </div>
  );
};

export default InCartButton;
