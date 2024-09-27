import HeroBlob from "./HeroBlob";
import HeroBlobSm from "./HeroBlobSm";
import HeroCovers from "./HeroCovers";
import HeroSlider from "./HeroSlider";
import HeroSubText from "./HeroSubText";
import HeroTitle from "./HeroTitle";

const Hero = () => {
  return (
    <div className="w-full h-[28rem] rounded-[2rem] rounded-t-none lg:h-[100vh] relative lg:bg-[var(--light-color)] overflow-hidden bg-[var(--light-color)] mt-[3rem] lg:mt-0">
      <HeroBlobSm />

      <HeroBlob />

      <HeroCovers />

      <HeroSubText />

      <HeroTitle />

      <HeroSlider />
    </div>
  );
};

export default Hero;
