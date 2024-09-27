import MobileHeader from "../header/MobileHeader";
import TabBar from "../tab-bar/TabBar";
import Brands from "./brands/Brands";
import Hero from "./hero/Hero";
import LatestArrivals from "./latest-arrivals/LatestArrivals";
import NewArravals from "./new-arrivals/NewArravals";
import Releases from "./releases/Releases";
import Trending from "./trending/Trending";

const HomeContent = ({ products }) => {
  return (
    <div className="pb-[5rem]">
      <MobileHeader />
      <Hero />
      <NewArravals />
      <Releases />
      <LatestArrivals />
      <Brands />
      <Trending />
      <TabBar />
    </div>
  );
};

export default HomeContent;
