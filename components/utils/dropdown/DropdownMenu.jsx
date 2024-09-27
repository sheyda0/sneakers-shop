const DropdownMenu = ({
  items,
  isActive,
  handleSelectSortOption,
  handleHideDropdown,
}) => {
  return (
    <ul
      className={`dropdown_menu rounded-[1rem] medium-shadow absolute top-[100%] right-[0.5rem] w-[10rem] bg-white ${
        isActive
          ? "h-[6rem] px-[0.5rem] py-[0.5rem] overflow-visible"
          : "h-0 p-0 overflow-hidden"
      }`}
    >
      {items?.map((item, index) => (
        <li
          onClick={() => {
            handleSelectSortOption(item);
            handleHideDropdown();
          }}
          key={index}
          className="h-max cursor-pointer dropdown_item text-[var(--dark-gray-color)] text-[0.875rem] lg:text-[1rem] light-green-border-bottom py-[0.5rem] px-[0.5rem]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
