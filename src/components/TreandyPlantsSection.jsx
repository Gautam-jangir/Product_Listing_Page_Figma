import Button from "./Button";
import plantImage2 from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_2.png";
import plantImage3 from "../assets/products_img/Rose_Gold_Feminine_Calligraphy_Monogram_Logo_3.png";
import BagButton from "./BagButton";
import treandyPlantsCard from "../assets/icons/treandyPlantsCard.svg";

function TreandyPlantsSection() {
  return (
    <div className="flex justify-center">
      <div
        className={`flex justify-between lg:justify-center flex-col lg:flex-row w-[512px] h-[575px] w-full lg:w-[1619px] lg:h-[526px] bg-contain bg-no-repeat relative bg-treandycard`}
      >
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <img
            className="w-[266px] h-[266px] lg:w-[732px] lg:h-[732px] absolute top-[-20px] lg:top-[-206px]"
            src={plantImage2}
            alt="AglaonemaPlant"
          />
        </div>
        <div className="flex justify-center items-center px-[20px] py-[80px] lg:p-20 lg:px-2 lg:justify-start w-full lg:w-1/2">
          <div className="pt-[0px] lg:pt-0 flex flex-col lg:pl-20">
            <span className="font-semibold text-[19px] lg:text-[38px]">
              For Your Desks Decorations
            </span>
            <span className="font-semibold text-[10px] lg:text-[20px] my-6">
              I recently added a beautiful desk decoration plant to my
              workspace, and it has made such a positive difference!
            </span>
            <span className="font-semibold text-[19px] lg:text-[38px]">
              Rs.599/-
            </span>
            <div className="mt-4 flex gap-6">
              <Button title="Buy Now" />
              <BagButton bagSize="27px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function TreandyPlantsSectionReverse() {
  return (
    <div className="flex justify-center">
      <div
        className={`flex lg:justify-center flex-col-reverse lg:flex-row-reverse h-[575px] w-full lg:w-[1619px] lg:h-[526px] bg-contain bg-no-repeat relative`}
      >
        <img
          className="absolute inset-0 lg:rotate-0 lg:scale-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          src={treandyPlantsCard}
          alt="TreandyPlant"
        />
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <img
            className="w-[266px] h-[266px] lg:w-[732px] lg:h-[732px] absolute top-[-600px] lg:top-[-150px]"
            src={plantImage3}
            alt="AglaonemaPlant"
          />
        </div>
        <div className="flex justify-center items-center px-[40px] py-[100px] lg:p-20 lg:px-2 lg:justify-start w-full lg:w-1/2">
          <div className="pt-[0px] lg:pt-0 flex flex-col lg:pl-20">
            <span className="font-semibold text-[19px] lg:text-[38px]">
              For Your Desks Decorations
            </span>
            <span className="font-semibold text-[10px] lg:text-[20px] my-6">
              I recently added a beautiful desk decoration plant to my
              workspace, and it has made such a positive difference!
            </span>
            <span className="font-semibold text-[19px] lg:text-[38px]">
              Rs.599/-
            </span>
            <div className="mt-4 flex gap-6">
              <Button title="Buy Now" />
              <BagButton bagSize="27px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TreandyPlantsSection;
export {TreandyPlantsSectionReverse};
