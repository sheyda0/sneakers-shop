const CloseModalBtn = ({ onClick }) => {
  return (
    <button
      className="action-close"
      datarole="closeBtn"
      type="button"
      onClick={onClick}
    >
      <span>
        <svg
          width="36px"
          height="36px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white" />
          <path
            d="M7 17L16.8995 7.10051"
            stroke="var(--dark-gray-color)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 7.00001L16.8995 16.8995"
            stroke="var(--dark-gray-color)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
};

export default CloseModalBtn;
