import Link from "next/link";

const EmptyCartState = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <svg
        width="180px"
        height="180px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 8H17.1597C18.1999 8 19.0664 8.79732 19.1528 9.83391L19.8195 17.8339C19.9167 18.9999 18.9965 20 17.8264 20H6.1736C5.00352 20 4.08334 18.9999 4.18051 17.8339L4.84718 9.83391C4.93356 8.79732 5.80009 8 6.84027 8H8M16 8H8M16 8L16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7L8 8M16 8L16 12M8 8L8 12"
          stroke="var(--gray-color)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className="text-[1.25rem] lg:text-[1.5rem] font-semibold mt-[1rem]">
        Your Shopping Cart is Empty
      </p>
      <Link
        href="/shopping/all"
        className="text-[1.125rem] underline mt-[1rem]"
      >
        Let&apos;s go shopping!
      </Link>
    </div>
  );
};

export default EmptyCartState;
