import FooterSocialItem from "./FooterSocialItem";
import { socailsMedias } from "@/utils/data";

const FooterSocial = () => {
  return (
    <div className="w-full bg-[var(--primary-color)] py-[0.5rem] flex gap-[2.5rem] justify-center items-center">
      {socailsMedias.map((item, index) => (
        <FooterSocialItem key={index} icon={item.logo} url="/" />
      ))}
    </div>
  );
};

export default FooterSocial;
