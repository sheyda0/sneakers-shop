import Image from "next/image";
import Link from "next/link";

const FooterSocialItem = ({ icon, url }) => {
  return <Link href={url}>{icon}</Link>;
};

export default FooterSocialItem;
