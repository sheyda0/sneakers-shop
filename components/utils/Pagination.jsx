const Pagination = () => {
  return (
    <div className="flex items-center">
      <ul className="flex gap-[1rem]">
        <li className="w-max h-[2rem] text-[0.875rem] px-[0.5rem] rounded-full medium-shadow text-[var(--dark-gray-color)] flex items-center justify-center bg-[var(--light-color)]">
          {"<"} PREV
        </li>
        <li className="w-[2rem] h-[2rem] rounded-full medium-shadow text-[var(--dark-gray-color)] flex items-center justify-center bg-[var(--light-color)]">
          1
        </li>
        <li className="w-[2rem] h-[2rem] rounded-full medium-shadow flex items-center justify-center bg-[var(--primary-color)] text-[var(--light-color)]">
          2
        </li>{" "}
        <li className="w-[2rem] h-[2rem] rounded-full medium-shadow text-[var(--dark-gray-color)] flex items-center justify-center bg-[var(--light-color)]">
          3
        </li>
        <li>...</li>
        <li className="w-[2rem] h-[2rem] rounded-full medium-shadow text-[var(--dark-gray-color)] flex items-center justify-center bg-[var(--light-color)]">
          5
        </li>
        <li className="w-max h-[2rem] text-[0.875rem] px-[0.5rem] rounded-full medium-shadow text-[var(--dark-gray-color)] flex items-center justify-center bg-[var(--light-color)]">
          {" "}
          NEXT {">"}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
