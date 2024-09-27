const ColorFilterItem = ({ index, color, onChange, checked, hex, total }) => {
  return (
    <div className="w-full" key={index}>
      <input
        id={`color-${index + 1}`}
        type="checkbox"
        name="color"
        onChange={onChange}
        checked={checked}
        className="hidden"
      />
      <label htmlFor={`color-${index + 1}`}>
        <div
          className={`w-full h-[2.5rem] cursor-pointer flex items-center justify-between px-[1rem] border border-[var(--gray-color)] text-[var(--dark-gray-color)] text-[0.875rem] border-dashed rounded-[0.8rem] medium-shadow-hover ${
            checked
              ? "border-[var(--primary-color)] border-[1px] !border-solid"
              : ""
          }`}
        >
          <span className="capitalize">{color}</span>

          <div
            className={`min-w-[1.3rem] min-h-[1.3rem] rounded-full ${
              color == "white" ? "border border-[var(--gray-color)]" : ""
            }`}
            style={{ background: hex }}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ColorFilterItem;
