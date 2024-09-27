import Section from "@/components/utils/Section";
import SectionsTitle from "@/components/utils/SectionsTitle";
import BrandLogo from "./BrandLogo";
import { brands } from "@/utils/data";

const Brands = () => {
  return (
    <Section>
      <SectionsTitle cln="mb-[2rem]">brands</SectionsTitle>

      <div className="flex items-center w-full justify-center">
        {brands.map((brand, index) => (
          <BrandLogo key={index} image={brand.logo} url={brand.url} />
        ))}
      </div>
    </Section>
  );
};

export default Brands;
