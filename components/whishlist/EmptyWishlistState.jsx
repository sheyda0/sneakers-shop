import Link from "next/link";

const EmptyWishlistState = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <svg
        width="180px"
        height="180px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Interface / Heart_02">
          <path
            id="Vector"
            d="M19.2373 6.23731C20.7839 7.78395 20.8432 10.2727 19.3718 11.8911L11.9995 20.0001L4.62812 11.8911C3.15679 10.2727 3.21605 7.7839 4.76269 6.23726C6.48961 4.51034 9.33372 4.66814 10.8594 6.5752L12 8.00045L13.1396 6.57504C14.6653 4.66798 17.5104 4.51039 19.2373 6.23731Z"
            stroke="var(--gray-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>

      <p className="text-[1.5rem] font-semibold mt-[1rem]">
        Your Wishlist is Empty
      </p>
      <Link
        href="/shopping/all"
        className="text-[1.125rem] underline mt-[1rem]"
      >
        Let&apos;s Explore
      </Link>
    </div>
  );
};

export default EmptyWishlistState;
