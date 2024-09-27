"use client";

import { useRouter } from "next/navigation";
import ShadowButton from "../buttons/ShadowButton";

const GoBackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <ShadowButton onClick={handleGoBack}>
      <svg
        width="36px"
        height="36px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" fill="white" />
        <path
          d="M14.5 17L9.5 12L14.5 7"
          stroke="var(--dark-gray-color)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ShadowButton>
  );
};

export default GoBackButton;
