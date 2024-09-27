const BurgerButton = () => {
  return (
    <button>
      <svg
        width="42px"
        height="42px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12H18"
          stroke="var(--light-color)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 17H11"
          stroke="var(--light-color)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 7H15"
          stroke="var(--light-color)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default BurgerButton;
