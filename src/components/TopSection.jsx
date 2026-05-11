import CustomerReviewSectionCard from "./CustomerReviewSectionCard";
import EarthsExhale from "./EarthsExhale";
import Footer from "./Footer";
import Navbar from "./Navbar";
import OurBesto2Section from "./OurBesto2Section";
import ResponsiveGallery from "./ResponsiveGallery";
import { TreandyPlantsSectionReverse } from "./TreandyPlantsSection";
import SectionHeading, { O2Heading } from "./SectionHeading";
import TreandyPlantsSection from "./TreandyPlantsSection";
import PaginationCard from "./PaginationCard";

function TopSection() {
  return (
    <div className="text-white bg-[#1B2316] h-full w-full">
      <div className="z-[-100] bg-[url(./assets/background.jpg)] bg-no-repeat bg-cover font-(family-name:--font-inter) w-full h lg:h-[2592px] bg-top">
        <Navbar />
        <EarthsExhale />
        <div className="mt-[83px] mb-[79px]">
          <SectionHeading headingTitle="Our Treandy plants" />
        </div>
        <div className="ml-[54px] mr-[55px] mb-[127px]">
          <TreandyPlantsSection />
        </div>
        <div className="ml-[54px] mr-[55px] mb-[127px]">
          <TreandyPlantsSectionReverse />
        </div>
      </div>
      <div className="bg-[#1B2316]">
        <div className="mt-[176px] mb-[84px]">
          <SectionHeading headingTitle="Our Top Selling Plants" />
        </div>
        <div className="mb-[65px]">
          <ResponsiveGallery />
        </div>
        {/* <div className="mb-[65px]">
          <ResponsiveGallery />
        </div> */}
        <SectionHeading headingTitle="Customer Review" />
        <div className="flex flex-wrap justify-center items-center gap-10 my-20">
          <CustomerReviewSectionCard />
          <CustomerReviewSectionCard />
          <CustomerReviewSectionCard />
        </div>
        <div className="mt-[223px]">
          <O2Heading headingTitle="Our Best o2" />
        </div>
        <div className="mt-[242px]">
          <OurBesto2Section />
        </div>
        <div className="mt-[100px]">
          <PaginationCard />
        </div>
        <div className="mt-[260px]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default TopSection;
