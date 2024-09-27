import { BiSearch } from "react-icons/bi";

const SearchBar = ({ width, onChange, value }) => {
  return (
    <div
      className={`flex flex-col items-center relative lg:mt-[1.5rem] z-[50] ${
        width ? width : ""
      }`}
    >
      <div className={`relative ${width ? width : "w-[100%]"}`}>
        <input
          type="text"
          placeholder="Search"
          onChange={onChange}
          value={value}
          className="placeholder:text-[var(--dark-gray-color)] rounded-[0.8rem] py-[0.6rem] focus:shadow-md bg-white border border-[var(--gray-color)] lg:py-[0.8rem] outline-none px-[0.65rem] transition-all duration-300 w-full font-xl text-[var(--dark-gray-color)] text-base"
        />
        <div className="border-l border-[var(--dark-gray-color)] rounded-tl-none rounded-bl-none rounded-[0.8rem] px-[0.8rem] py-[0.4rem] absolute right-0 top-[0.3rem] lg:top-[0.5rem]">
          <BiSearch
            color="var(--dark-gray-color)"
            className="text-[1.3rem] md:text-[1.5rem]"
          />
        </div>
      </div>
      {/* <div className="w-[22rem] h-20 bg-orange-300 absolute top-[48px]"></div> */}
    </div>
  );
};

export default SearchBar;
