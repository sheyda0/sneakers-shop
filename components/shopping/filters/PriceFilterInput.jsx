const PriceFilterInput = ({ label, value, onChange }) => {
  return (
    <div className="border h-max border-dashed rounded-[0.8rem] border-[var(--gray-color)] w-[45%] py-[0.5rem] px-[0.8rem] flex items-center gap-[0.5rem]">
      <label className="text-[var(--dark-gray-color)] text-base">
        {label}:
      </label>
      <input
        type="number"
        className="bg-transparent text-base border-none shadow-none outline-none w-full"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PriceFilterInput;
