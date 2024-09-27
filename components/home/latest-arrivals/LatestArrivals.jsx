"use client";

import SecondaryButton from "@/components/buttons/SecondaryButton";
import Section from "@/components/utils/Section";
import SectionsTitle from "@/components/utils/SectionsTitle";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "mobile-device-detect";

const LatestArrivals = () => {
  return (
    <Section cln="relative">
      <Link href="/shopping/all">
        {isMobile ? (
          <div>
            <div className="h-[10rem] bg-[#f0eff2]"></div>
            <Image
              src="/images/hero/Nike-Dunk-Low-Denim-Turq-Summer-2024-Feature-Sneaker-Boutique-mobile.jpg"
              width={1536}
              height={655}
              alt="sneaker"
            />
          </div>
        ) : (
          <Image
            src="/images/hero/Nike-Dunk-Low-Denim-Turq-Summer-2024-Feature-Sneaker-Boutique.webp"
            width={1536}
            height={655}
            alt="sneaker"
          />
        )}

        <div className="absolute left-[3rem] top-[1rem] lg:top-auto lg:bottom-[1rem] flex flex-col gap-[1rem]">
          <SectionsTitle cln="!mb-0">honor the gift</SectionsTitle>
          <p className="mt-[-1rem]">Latest Arrivals</p>
          <SecondaryButton cln="w-[13rem]">SHOP NOW</SecondaryButton>
        </div>
      </Link>
    </Section>
  );
};

export default LatestArrivals;
