import Button from "../components/Button";
import aglaonemaPlant from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_1.png";
import BagButton from "./BagButton";

function ResponsiveSection({flexDirection = "row"}) {
  return (
    <div className="flex justify-center">
      <div className={`flex justify-center flex-col lg:flex-${flexDirection}  sm:w-[512px] sm:h-[644px] lg:w-[1619px] lg:h-[526px] bg-[url(./assets/icons/treandyPlantsCard.svg)] backdrop-blur-[15px]`}>
        <div className="flex justify-center w-full lg:w-1/2 relative">
          {/* <div className="w-[459px] h-[459px] bg-amber-300 absolute top-[-40px] lg:static"></div> */}
          <img
            className="w-[601px] h-[732px] absolute top-[-510px] lg:top-[-250px]"
            src={aglaonemaPlant}
            alt="AglaonemaPlant"
          />
        </div>
        <div className="flex justify-center items-center p-20 lg:px-2 lg:justify-start w-full lg:w-1/2">
          <div className="pt-[320px] lg:pt-0 flex flex-col pl-20">
            <span className="font-semibold text-[38px]">
              For Your Desks Decorations
            </span>
            <span className="font-semibold text-[20px] my-6">
              I recently added a beautiful desk decoration plant to my
              workspace, and it has made such a positive difference!
            </span>
            <span className="font-semibold text-[38px]">
              Rs.599/-
            </span>
            <div className="mt-4 flex gap-6">
              <Button title="Buy Now" />
              <BagButton bagSize="27px"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveSection;
