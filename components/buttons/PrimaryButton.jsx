import Link from "next/link";

const PrimaryButton = ({ children, isLink, url, cln, btnTxtCln, onClick }) => {
  return (
    <>
      {isLink ? (
        <Link
          href={url}
          className={`px-[0.75rem] text-center lg:px-5 py-[0.3rem] lg:py-2.5 relative rounded group overflow-hidden font-medium bg-[var(--primary-color)] text-[var(--light-color)] inline-block ${cln}`}
        >
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[var(--secondary-color)] group-hover:h-full opacity-90"></span>
          <span className="relative text-[0.875rem] lg:text-base">
            {children}
          </span>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`px-[0.75rem] lg:px-5 py-[0.3rem] lg:py-2.5 relative rounded group overflow-hidden font-medium bg-[var(--primary-color)] text-[var(--light-color)] inline-block ${cln}`}
        >
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[var(--secondary-color)] group-hover:h-full opacity-90"></span>
          <span className={`relative text-[0.75rem] lg:text-base ${btnTxtCln}`}>
            {children}
          </span>
        </button>
      )}
    </>
  );
};

export default PrimaryButton;
