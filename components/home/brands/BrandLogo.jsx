import Image from "next/image";
import Link from "next/link";

const BrandLogo = ({ image, url }) => {
  return (
    <Link href={url}>
      <Image
        src={`/images/brands/${image}`}
        width={400}
        height={400}
        alt="sneaker"
      />
    </Link>
  );
};

export default BrandLogo;
