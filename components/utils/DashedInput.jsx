const DashedInput = ({ name, index, label, onChange, checked, cln }) => {
  return (
    <div key={index}>
      <input
        id={`${name}-${index + 1}`}
        type="checkbox"
        name={name}
        onChange={onChange}
        checked={checked}
        className="hidden"
      />
      <label htmlFor={`${name}-${index + 1}`}>
        <div
          className={`${cln} min-w-[3rem] h-[3rem] cursor-pointer flex items-center justify-center border border-[var(--gray-color)] text-[var(--dark-gray-color)] text-[0.875rem] border-dashed rounded-[0.8rem] medium-shadow-hover ${
            checked
              ? "border-[var(--primary-color)] border-[1px] !border-solid"
              : ""
          }`}
        >
          {label}
        </div>
      </label>
    </div>
  );
};

export default DashedInput;
