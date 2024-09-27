import { VscChevronDown } from "react-icons/vsc";

const DropdownButton = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="dropdown_button text-[0.9rem] text-[var(--dark-gray-color)] lg:text-[1rem] flex items-center gap-2 justify-center relative py-[18px] cursor-pointer"
    >
      {children}
      <VscChevronDown />
    </li>
  );
};

export default DropdownButton;
