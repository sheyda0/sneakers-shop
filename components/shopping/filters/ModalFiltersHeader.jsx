import CloseModalBtn from "@/components/buttons/CloseModalBtn";

const ModalFiltersHeader = ({ handleHideModal }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[1rem]">
        <span>
          {" "}
          <svg
            width="28px"
            height="28px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M21.23 7.61998H15.69C15.31 7.61998 15 7.30998 15 6.91998C15 6.53998 15.31 6.22998 15.69 6.22998H21.23C21.61 6.22998 21.92 6.53998 21.92 6.91998C21.92 7.30998 21.61 7.61998 21.23 7.61998Z"
              fill="var(--primary-color)"
            />
            <path
              opacity="0.4"
              d="M6.46008 7.62023H2.77008C2.39008 7.62023 2.08008 7.31023 2.08008 6.93023C2.08008 6.55023 2.39008 6.24023 2.77008 6.24023H6.46008C6.84008 6.24023 7.15008 6.55023 7.15008 6.93023C7.15008 7.31023 6.84008 7.62023 6.46008 7.62023Z"
              fill="var(--primary-color)"
            />
            <path
              d="M10.1505 10.84C12.3154 10.84 14.0705 9.08496 14.0705 6.92C14.0705 4.75504 12.3154 3 10.1505 3C7.98551 3 6.23047 4.75504 6.23047 6.92C6.23047 9.08496 7.98551 10.84 10.1505 10.84Z"
              fill="var(--primary-color)"
            />
            <path
              opacity="0.4"
              d="M21.2296 17.7701H17.5396C17.1596 17.7701 16.8496 17.4601 16.8496 17.0801C16.8496 16.7001 17.1596 16.3901 17.5396 16.3901H21.2296C21.6096 16.3901 21.9196 16.7001 21.9196 17.0801C21.9196 17.4601 21.6096 17.7701 21.2296 17.7701Z"
              fill="var(--primary-color)"
            />
            <path
              opacity="0.4"
              d="M8.31008 17.7701H2.77008C2.39008 17.7701 2.08008 17.4601 2.08008 17.0801C2.08008 16.7001 2.39008 16.3901 2.77008 16.3901H8.31008C8.69008 16.3901 9.00008 16.7001 9.00008 17.0801C9.00008 17.4601 8.69008 17.7701 8.31008 17.7701Z"
              fill="var(--primary-color)"
            />
            <path
              d="M13.8497 21.0002C16.0146 21.0002 17.7697 19.2451 17.7697 17.0802C17.7697 14.9152 16.0146 13.1602 13.8497 13.1602C11.6847 13.1602 9.92969 14.9152 9.92969 17.0802C9.92969 19.2451 11.6847 21.0002 13.8497 21.0002Z"
              fill="var(--primary-color)"
            />
          </svg>
        </span>

        <span className="text-[var(--dark-gray-color)] text-[1.125rem] font-semibold">
          Filter
        </span>
      </div>

      <CloseModalBtn onClick={handleHideModal} />
    </div>
  );
};

export default ModalFiltersHeader;
